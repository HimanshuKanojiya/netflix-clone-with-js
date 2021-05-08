function headercontentretrieve(){
    return `
    <div id="imageslogo">
            <img src="./netflix images/netflix-logo.png" alt="Netflix Logo">
        </div>
        <div id="navigation">
            <nav>
                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                </ul>
            </nav>
        </div>
        <div id="otherheadersection">
            <nav>
            <ul>
                <li id="searchbar"><span><img id="imageofsearch" src="./netflix images/search-icon.png" alt="search-icon"><input id="searchwithimage" type="text"></span></li>
                <li id="kid">Children</li>
                <li id="gifticon"><img src="./netflix images/netflix gift box.png" alt="Gift Box"></li>
                <li id="bellicon"><img src="./netflix images/netflix-bell-icon.png" alt="Bell Icon"></li>
                <li>
                <div id="profile-icon">
                <img src="./netflix images/netflix-profile-icon.png" alt="Profile Icon">
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