let VideoShowCaseResponse = "";

class VideoShowCase{
    constructor(){
        this.url = "";
        this.API_Key =  "ce77aaeb83dc417f01169d443f16255a&language=en-US";
        this.additionalpararmatend = "";
        this.videocontent = null;
        this.set_content_for_video = {

        }

    }

    set_url_for_video(value){
        this.url = `https://api.themoviedb.org/3/movie/${value}/videos`; 
    }

    set_url_for_details(value){
        this.url = `https://api.themoviedb.org/3/movie/${value}`;
    }

    set_url_for_movie_providers(value){
        this.url = `https://api.themoviedb.org/3/movie/${value}/watch/providers`;
    }

    watchproviderslistpopulator(list){
        let htmlContentTemplate = "";
        console.log(list.length)
        for(let i = 0;i<list.length;i++){
            if(list[i].logo_path !== null){
                htmlContentTemplate = htmlContentTemplate + `<div id="availableplatformcontent"><img src="https://image.tmdb.org/t/p/w300${list[i].logo_path}" alt="${list[i].provider_name}"/><p>${list[i].provider_name}</p></div>`;
            }
            
        }
        return htmlContentTemplate;
    }

    main_content_set(value){
        this.set_url_for_video(value);
        this.fetchvideourl();
        this.convertojson();
        this.set_content_for_video["embed_url"] = this.videocontent.results[0].key;
        
        this.set_url_for_details(value);
        this.fetchvideourl();
        this.convertojson();
        this.set_content_for_video["title"] = this.videocontent.original_title;
        this.set_content_for_video["overview"] = this.videocontent.overview;
        this.set_content_for_video["releasedate"] = this.videocontent.release_date;
        this.set_content_for_video["ratings"] = this.videocontent.vote_average;

        this.set_url_for_movie_providers(value);
        this.fetchvideourl();
        this.convertojson();

        if(this.videocontent.results.US !== undefined && this.videocontent.results.US.buy !== undefined 
            && this.videocontent.results.US.buy.length >= 1){
            this.set_content_for_video["Movieproviders"] = this.watchproviderslistpopulator(this.videocontent.results.US.buy);
        }
        else if(this.videocontent.results.US !== undefined && this.videocontent.results.US.flatrate !== undefined 
            && this.videocontent.results.US.flatrate.length >= 1){
            this.set_content_for_video["Movieproviders"] = this.watchproviderslistpopulator(this.videocontent.results.US.flatrate);
        }
        else{
            this.set_content_for_video["Movieproviders"] = "No Data Available Yet...";
        }
        
    }

    set_video_content(){
        this.videocontent = VideoShowCaseResponse;
        VideoShowCaseResponse = null;
    }

    async fetchvideourl(callback){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            VideoShowCaseResponse = xhttp.responseText;
        }
        };
        xhttp.open("GET", `${this.url}?api_key=${API_Key}&language=en-US${this.additionalpararmatend}`, false);
        xhttp.setRequestHeader("Content-type", 'application/json');
        xhttp.send();
    }
    convertojson(){
        this.videocontent = JSON.parse(VideoShowCaseResponse);
    }
}

//Public Variable for stroing location of image
let location_image = null;

function videocloser(){
    let closethis = document.getElementById("closethis");
    closethis.onclick = function(){
        document.getElementById("showcasevideo").innerHTML = "";
        document.getElementById("showcasevideo").style.display = "none";
        window.scrollTo(0,location_image);
    }
}


function ContentRetriveforvideoshowcase(content){
    return `
    <div id="closethis">X</div>
        <div id="video">
            <iframe width="600" height="315" src="https://www.youtube.com/embed/${content.embed_url}?modestbranding=1&controls=0&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div id="title-section">
            <strong>${content.title}</strong>
            <p id="ratebar">Ratings: ${content.ratings}<span id="othermoviedetails">${content.releasedate}</span></p>
            <p>${content.overview}</p>
            <strong>Movie Available on:</strong>
            <div id="availableplatforms">
            ${content.Movieproviders}
            </div>
        </div>
    `

}

function showcasetrailer(movied, loc){
    location_image = loc;
    let Showcaseapi = new VideoShowCase();
    Showcaseapi.main_content_set(movied);
    document.getElementById("showcasevideo").style.display = "flex";
    document.getElementById("showcasevideo").innerHTML = ContentRetriveforvideoshowcase(Showcaseapi.set_content_for_video);
    window.scrollBy(0,document.getElementById("showcasevideo").offsetTop - 450);
    videocloser();
}
