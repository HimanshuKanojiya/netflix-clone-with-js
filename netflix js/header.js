//This Script is for loading header section in all pages
//This script is not depended on other scripts

const headercontentretrieve = () => {
    //This function will return header HTML Codes
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
                <li id="kid"><a href="./browse.html?type=Cartoon Movies">Cartoon Movies</a></li>
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
const loadheaderinpage = (portion) => {
    //This function is for putting content in the targeted container
    //sectionname variable is container ID
    const section = document.getElementById(portion);
    section.innerHTML = headercontentretrieve();
}
//Calling function to load Header
loadheaderinpage("headersection");

/*
Search Bar Expander
*/
const searchbarexpander = () => {
    const searchclickimage = document.getElementById("imageofsearch");
    const searchbarinput = document.getElementById("searchwithimage");
    searchclickimage.onclick = () => {
        if(searchbarinput.style.getPropertyValue("display") === "" || searchbarinput.style.getPropertyValue("display") === "none"){
            searchbarinput.style.display = "inline";
            searchclickimage.style.display = "none";
            }

    }
    searchbarinput.onmouseout = () => {
        if(searchclickimage.style.getPropertyValue("display") === "none"){
            searchbarinput.style.display = "none";
            searchclickimage.style.display = "inline";
        }
    }
}
searchbarexpander();
//End of Search Bar Expander


const headerbackgroundchanger = () => {
    //HeaderBackground Changer
    //These codes will change header background color
    //This will happen if we threshold the scrolling limit
    window.addEventListener("scroll",function(){
        const docxx = document.getElementById("maincontentsection");
        if(window.pageYOffset > docxx.offsetTop){
            document.getElementById("headersection").style.background = "black";
        }
        else{
            document.getElementById("headersection").style.background = "transparent";
        }
    });
}
headerbackgroundchanger();


const searchbarscript = () => {
    //This function is launch the search query, if user passes 
    //more than 3 characters in the search bar
    const search = document.getElementById("searchwithimage");
    search.onchange = () => {
        if(search.value.length >= 3){
            window.location.href = `./browse.html?search_movie=${search.value}`;
        }

    }

}
//Load the searchbarscript
searchbarscript();
