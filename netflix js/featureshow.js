const contentretrive = (PopularContentData) => {
    return `
    <div id="abovetext">
            <h2>${PopularContentData.movietitle}</h2>
            <p>${PopularContentData.overview}</p>
            <div id="buttonclass">
                <button id="playbutton">
                <div id="playbuttonlogo">
                    <img src="./netflix images/play-icon.png" alt="playicons"/>
                </div>
                <span id="playbuttontext">
                    Play
                </span>
                </button>

                <button id="moreinfobutton">
                <div id="infobuttonlogo">
                    <img src="./netflix images/info.png" alt="infoicon">
                </div>
                <span id="infobuttontext">
                    More Info
                </span>
                </button>
            </div>
        </div>
        <div id="featureimage">
            <!-- <img src="https://image.tmdb.org/t/p/w500//9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg" alt="Mortal Kombat">
            <!-- <img src="https://i.ytimg.com/vi/jBa_aHwCbC4/maxresdefault.jpg" alt="Mortal Kombat"> -->
        </div>
    
    `
}



const loadmovie = (videourl) => {
    htmlPortion = `
    <iframe width="600" height="315" src="https://www.youtube.com/embed/${videourl}?modestbranding=1&controls=0&rel=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    const featureimage = document.getElementById("featureimage");
    featureimage.innerHTML = htmlPortion;
}
const playandpause = (videourl) => {
    const play = document.getElementById("playbutton");
    play.onclick = () => {
        if(document.getElementById("featureimage").childElementCount === 0){
            loadmovie(videourl);
            document.getElementById("playbuttontext").innerHTML = "Pause";
            document.getElementById("playbuttonlogo").firstElementChild.src = "./netflix images/pause-button.png";
        }
        else{
            document.getElementById("playbuttonlogo").firstElementChild.src = "./netflix images/play-icon.png";
            document.getElementById("featureimage").innerHTML = "";
            document.getElementById("playbuttontext").innerHTML = "Play";
            
        }
    }
}

const loadfeaturesection = (portion) => {
    const VideoFetchAPI = new VideoShowCase();
    VideoFetchAPI.set_url_for_video(PopularContentData.movieid);
    VideoFetchAPI.fetchvideourl();
    VideoFetchAPI.convertojson();
    videourl = VideoFetchAPI.videocontent.results[0].key;

    const section = document.getElementById(portion);
    section.innerHTML = contentretrive(PopularContentData);
    document.getElementById("featureimage").style.cssText = `background-image:url(${PopularContentData.movieposter})`;
    playandpause(videourl);
}

loadfeaturesection("featuredshows");


