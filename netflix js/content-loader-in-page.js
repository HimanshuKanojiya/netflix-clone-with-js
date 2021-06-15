//This script is responsible for Setting content in the Homepage "index.html"


PopularContentData = null; //This variable is used by Sectonheaderload to set top feature show data object

const sectionheaderload = (title, id) => {
    //This function will load Category/Page Title and container
    //where related category movies and tv show will be loaded
    //Title will be set with LINK and header
    //id is the name of the container where images will be saved
    let content = `
    <a href="./browse.html?type=${title}"><h2 id="headers">${title} <span><div id="fulltext">Explore All</div> > </span></h2></a>
    <div id=${id}></div>

    `
    const section = document.getElementById("maincontentsection");
    section.innerHTML += content;
}


const populatecontainonpage = (url, genres, portion, title,featurevideo) => {
    //This Function is depended on "request.js code"
    //It will load content in the homepage slider sections
    //URL: For API
    //genres: For additional Parameters of API
    //portion: id of container where content will be saved
    //title: Title of the Page
    //featurevideo: option but should be call at least once

    const req = new Popularonnetflix(); //Initialize the class
    req.set_url(url); //Setting API URL
    
    //If genres is not null, then it will be added at the end of API
    if(genres != null){
        req.set_param_at_end(genres);

    }
    
    req.fetchpopular(); //Initiate the Call
    req.convertojson(); //Convert the API response to JSON object
    req.settopopulararray(); //Setting content in desired way to use
    
    //If featurevideo is with TRUE while calling the specific category
    //then below code will set top feature video section
    //based on that specific category
    //Example: if it is true for Horror, then it
    //set top feature video section for Horror Movie
    if(featurevideo === true){
        req.set_popular_movie();
        PopularContentData = req.popularimageobjects;
        
    }

    const content = createimageportion(req.contentforpopular); //For Creating images HTML codes in BULK

    //below two functions are depended on the "popularcontentpopulate.js code"
    sectionheaderload(title,portion); //It will load the header and container where images will be saved
    contentputter(content, portion); //It will save the content in the page
}

/*Will Load in First Sequence - Default*/
populatecontainonpage("https://api.themoviedb.org/3/movie/popular",null,"Mainsection","Popular Movies",true);
populatecontainonpage("https://api.themoviedb.org/3/movie/top_rated",null,"Mainsectiontoprated","Top Rated Movies");
populatecontainonpage("https://api.themoviedb.org/3/movie/now_playing",null,"Mainsectionlatest","Latest Movies");
populatecontainonpage("https://api.themoviedb.org/3/discover/movie","&with_genres=12","Mainsectionactionmovies","Action Movies");
/*End of First Sequence */


//Below array is container for saving further movie/tv section API & parameters
const arrayofremainingcontent = [
    {"API":"https://api.themoviedb.org/3/discover/movie",
    "Additional_Params":"&with_genres=878",
    "Portion":"Mainsectionsciencefictionmovies",
    "Title":"Science Fiction Movies",},

    {"API":"https://api.themoviedb.org/3/discover/movie",
    "Additional_Params":"&with_genres=10752",
    "Portion":"Mainsectionwarmovies",
    "Title":"War Movies",},

    {"API":"https://api.themoviedb.org/3/discover/movie",
    "Additional_Params":"&with_genres=53",
    "Portion":"Mainsectionthrillermovies",
    "Title":"Thriller Movies",
    },

    {
        "API":"https://api.themoviedb.org/3/discover/movie",
        "Additional_Params":"&with_genres=27",
        "Portion":"Mainsectionhorrormovies",
        "Title":"Horror Movies",
    },

    {
        "API":"https://api.themoviedb.org/3/trending/tv/week",
        "Additional_Params":null,
        "Portion":"Mainsectiontvseries",
        "Title":"Trending TV Series",
    },

    {
        "API":"https://api.themoviedb.org/3/tv/popular",
        "Additional_Params":null,
        "Portion":"Mainsectiontvpopularseries",
        "Title":"Popular TV Series",
    },

    {
        "API":"https://api.themoviedb.org/3/tv/top_rated",
        "Additional_Params":null,
        "Portion":"Mainsectiontvtopratedseries",
        "Title":"Top Rated TV Series",

    }
    


]


//Below Codes will be responsible for loading remaining categories section
//while scrolling the page, once scroll crossed the threshold it will load the category
//Once all "arrayofremainingcontent" loaded then run variable will be set to true
//for stopping the below function

let run = false;
let track = 0;
const showcasewindow = document.getElementById("showcasevideo");
window.addEventListener("scroll", function(){
    const mainsection = this.document.getElementById("maincontentsection");
    if(window.pageYOffset > mainsection.offsetHeight - 200 && 
        (showcasewindow.style.display === "" || showcasewindow.style.display === "none") && run === false){
            if(track < arrayofremainingcontent.length){
                populatecontainonpage(arrayofremainingcontent[track].API,arrayofremainingcontent[track].Additional_Params,
                    arrayofremainingcontent[track].Portion,arrayofremainingcontent[track].Title);
                    track+=1;

            }
            else{
                console.log("All Content Loaded")
                run = true;
            }
        
    }
});
