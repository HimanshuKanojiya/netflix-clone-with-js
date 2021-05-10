function contentretrive(){
    return `
    <div id="abovetext">
            <h2>Mortal Kombat</h2>
            <p>Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's</p>
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

function loadfeaturesection(portion){
    let section = document.getElementById(portion);
    section.innerHTML = contentretrive();
}

function loadmovie(){
    htmlPortion = `
    <iframe width="600" height="315" src="https://www.youtube.com/embed/NYH2sLid0Zc?modestbranding=1&controls=0&rel=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    let featureimage = document.getElementById("featureimage");
    featureimage.innerHTML = htmlPortion;
}
function playandpause(){
    let play = document.getElementById("playbutton");
    play.onclick = function(){
        if(document.getElementById("featureimage").childElementCount === 0){
            loadmovie();
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
loadfeaturesection("featuredshows");
playandpause();

