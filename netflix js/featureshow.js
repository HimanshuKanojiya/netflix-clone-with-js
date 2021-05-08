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
loadfeaturesection("featuredshows");