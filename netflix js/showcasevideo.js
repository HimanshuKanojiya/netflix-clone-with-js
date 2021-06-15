//This script is not depended on other script
//It will be loaded in all pages


let VideoShowCaseResponse = ""; //For Saving API Responses

//Class for Fetching Video URL, and Video Details for showing about the movie/tv series
class VideoShowCase{
    constructor(){
        //class variable
        this.url = "";
        this.API_Key =  "ce77aaeb83dc417f01169d443f16255a&language=en-US";
        this.additionalpararmatend = "";
        this.videocontent = null;
        this.set_content_for_video = {

        }
        this.switchtoTv = false;

    }

    set_url_for_video(value){
        //This function is for setting API for fetching Movie Video
        this.url = `https://api.themoviedb.org/3/movie/${value}/videos`; 
    }

    set_url_for_video_tv(value){
        //This function is for setting API for fetching TV Video
        this.url = `https://api.themoviedb.org/3/tv/${value}/videos`; 
    }

    set_url_for_details(value){
        //This function is for setting API for fetching Movie Details
        this.url = `https://api.themoviedb.org/3/movie/${value}`;
    }

    set_url_for_details_tv(value){
        //This function is for setting API for fetching TV Details
        this.url = `https://api.themoviedb.org/3/tv/${value}`;
    }

    watchproviderslistpopulator(list){
        let htmlContentTemplate = "";
        for(let i = 0;i<list.length;i++){
            if(list[i].logo_path !== null){
                htmlContentTemplate = htmlContentTemplate + `<div id="availableplatformcontent"><img src="https://image.tmdb.org/t/p/w300${list[i].logo_path}" alt="${list[i].provider_name}"/><p>${list[i].provider_name}</p></div>`;
            }
            
        }
        return htmlContentTemplate;
    }

    main_content_set(value){
        //This function is resposible for Handling Fetching work
        try{
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

        }
        catch{
            this.set_url_for_video_tv(value);
            this.fetchvideourl();
            this.convertojson();
            this.set_content_for_video["embed_url"] = this.videocontent.results[0].key;

            this.set_url_for_details_tv(value);
            this.fetchvideourl();
            this.convertojson();
            this.set_content_for_video["title"] = this.videocontent.original_name;
            this.set_content_for_video["overview"] = this.videocontent.overview;
            this.set_content_for_video["releasedate"] = this.videocontent.first_air_date;
            this.set_content_for_video["ratings"] = this.videocontent.vote_average;

        }
        console.clear();
        
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
        //This function will convert response to JSON
        this.videocontent = JSON.parse(VideoShowCaseResponse);
    }
}

//Public Variable for stroing location of image
let location_image = null;

const videocloser = () => {
    const closethis = document.getElementById("closethis");
    closethis.onclick = () => {
        document.getElementById("showcasevideo").innerHTML = "";
        document.getElementById("showcasevideo").style.display = "none";
        window.scrollTo(0,location_image);
    }
}


const ContentRetriveforvideoshowcase = (content) => {
    return `
    <div id="closethis">X</div>
        <div id="video">
            <iframe width="600" height="315" src="https://www.youtube.com/embed/${content.embed_url}?modestbranding=1&controls=0&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div id="title-section">
            <strong>${content.title}</strong>
            <p id="ratebar">Ratings: ${content.ratings}<span id="othermoviedetails">${content.releasedate}</span></p>
            <p>${content.overview}</p>
        </div>
    `

}

const showcasetrailer = (movied, loc) => {
    location_image = loc;
    const Showcaseapi = new VideoShowCase();
    Showcaseapi.main_content_set(movied);
    document.getElementById("showcasevideo").style.display = "flex";
    document.getElementById("showcasevideo").innerHTML = ContentRetriveforvideoshowcase(Showcaseapi.set_content_for_video);
    window.scrollBy(0,document.getElementById("showcasevideo").offsetTop - 450);
    videocloser();
}
