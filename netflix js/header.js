function headercontentretrieve(){
    return `
    <div id="imageslogo">
            <a href = "./index.html"><img src="./netflix images/netflix-logo.png" alt="Netflix Logo"></a>
        </div>
        <div id="navigation">
            <nav>
                <ul>
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="./browse.html?type=Upcoming Movies">Upcoming Movies</a></li>
                    <li><a href="./browse.html?type=All Movies">Movies</a></li>
                    <li><a href="./browse.html?type=Popular Movies">New & Popular</a></li>
                    <li><a href="./browse.html?type=My List">My List</a></li>
                </ul>
            </nav>
        </div>
        <div id="otherheadersection">
            <nav>
            <ul>
                <li id="searchbar"><span><img id="imageofsearch" src="./netflix images/search-icon.png" alt="search-icon"><input id="searchwithimage" type="text"></span></li>
                <li id="kid"><a href="./browse.html?type=Kids Movies">Children</a></li>
                <li id="gifticon"><img src="./netflix images/netflix gift box.png" alt="Gift Box"></li>
                <li id="bellicon"><img src="./netflix images/netflix-bell-icon.png" alt="Bell Icon"></li>
                <li>
                <div id="profile-icon">
                <img src="./netflix images/profile-blue-icon.png" alt="Profile Icon">
                </div>
                </li>
            </ul>
            </nav>
        </div>
    `
}
function loadheaderinpage(portion){
    let section = document.getElementById(portion);
    section.innerHTML = headercontentretrieve();
}
loadheaderinpage("headersection");

/*
Search Bar Expander
*/
let searchclickimage = document.getElementById("imageofsearch");
let searchbarinput = document.getElementById("searchwithimage");
searchclickimage.onclick = function(){
    if(searchbarinput.style.getPropertyValue("display") === ""){
        searchbarinput.style.display = "inline";
        searchclickimage.style.display = "none";
        }

}


//HeaderBackground Changer
window.addEventListener("scroll",function(){
    let docxx = document.getElementById("maincontentsection");
    if(window.pageYOffset > docxx.offsetTop){
        document.getElementById("headersection").style.background = "black";
    }
    else{
        document.getElementById("headersection").style.background = "transparent";
    }
});


function searchbarscript(){
    let search = document.getElementById("searchwithimage");
    search.onchange = function(){
        if(search.value.length >= 3){
            window.location.href = `./browse.html?search_movie=${search.value}`;
        }

    }

}

searchbarscript();