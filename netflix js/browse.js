
let API_Mapping = {
    "Popular Movies":{
        "API":"https://api.themoviedb.org/3/movie/popular",
        "Current_Page":1,
        "Additional_Params":null,
        "Last_Page":null,
    },
    "Top Rated Movies":{
        "API":"https://api.themoviedb.org/3/movie/top_rated",
        "Current_Page":1,
        "Additional_Params":null,
        "Last_Page":null,
    },
    "Latest Movies":{
        "API":"https://api.themoviedb.org/3/movie/now_playing",
        "Current_Page":1,
        "Additional_Params":null,
        "Last_Page":null,
    },
    "Trending TV Series":{
        "API":"https://api.themoviedb.org/3/trending/tv/week",
        "Current_Page":1,
        "Additional_Params":null,
        "Last_Page":null,
    },
    "Action Movies":{
        "API":"https://api.themoviedb.org/3/discover/movie",
        "Current_Page":1,
        "Additional_Params":"&with_genres=12",
        "Last_Page":null,
    },
    "Science Fiction Movies":{
        "API":"https://api.themoviedb.org/3/discover/movie",
        "Current_Page":1,
        "Additional_Params":"&with_genres=878",
        "Last_Page":null,
    },
    "War Movies":{
        "API":"https://api.themoviedb.org/3/discover/movie",
        "Current_Page":1,
        "Additional_Params":"&with_genres=10752",
        "Last_Page":null,
    },
    "Thriller Movies":{
        "API":"https://api.themoviedb.org/3/discover/movie",
        "Current_Page":1,
        "Additional_Params":"&with_genres=53",
        "Last_Page":null,
    },
    "Horror Movies":{
        "API":"https://api.themoviedb.org/3/discover/movie",
        "Current_Page":1,
        "Additional_Params":"&with_genres=27",
        "Last_Page":null,
    },
    "All Movies":{
        "API":"https://api.themoviedb.org/3/discover/movie",
        "Current_Page":1,
        "Additional_Params":"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate",
        "Last_Page":null,
    },
    "My List":{
        "API":"https://api.themoviedb.org/3/trending/movie/day",
        "Current_Page":1,
        "Additional_Params":null,
        "Last_Page":null,
    },
    "Upcoming Movies":{
        "API":"https://api.themoviedb.org/3/movie/upcoming",
        "Current_Page":1,
        "Additional_Params":"&language=en-US",
        "Last_Page":null,
    },
    "search movie":{
        "API":"https://api.themoviedb.org/3/search/movie",
        "Current_Page":1,
        "Additional_Params":null,
        "Last_Page":null,
    },
    "Kids Movies":{
        "API":"https://api.themoviedb.org/3/discover/movie",
        "Current_Page":1,
        "Additional_Params":"&with_genres=16",
        "Last_Page":null,
    }
    
}

function populatecontainonpage(url, genres, portion){
    let req = new Popularonnetflix();
    req.set_url(url);
    if(genres != null){
        req.set_param_at_end(genres);

    }
    req.fetchpopular();
    req.convertojson();
    req.settopopulararray();
    req.set_popular_movie();
    let content = createimageportion(req.contentforpopular);
    contentputter(content, portion);
}

function loadContent(){
    let headofbrowse = document.getElementById("headers");
    if(decodeURIComponent(window.location.search.split("=")[0]) === "?type"){
        query = decodeURIComponent(window.location.search.split("=")[1]);
    }
    else{
        let urlparam = decodeURIComponent(window.location.search.split("=")[0].split("?")[1].split("_").join(" "));
        query = urlparam;
        API_Mapping[query].Additional_Params = `&language=en-US&include_adult=true&query=${decodeURIComponent(window.location.search.split("=")[1])}`;
    }
    
    
    headofbrowse.innerHTML = query;
    let Additional_Params = ""
    if(API_Mapping[query].Additional_Params === null){
        Additional_Params = `&page=${API_Mapping[query].Current_Page}`;
        
    }
    else{
        Additional_Params = `&${API_Mapping[query].Additional_Params}&page=${API_Mapping[query].Current_Page}`;
    }
    populatecontainonpage(API_Mapping[query].API, Additional_Params,"sectionimages");
    API_Mapping[query].Current_Page = API_Mapping[query].Current_Page + 1;
}

let showcasewindow = document.getElementById("showcasevideo");
window.addEventListener("scroll", function(){
    let mainsection = this.document.getElementById("maincontentsection");
    if(window.pageYOffset > mainsection.offsetHeight - 600 && 
        (showcasewindow.style.display === "" || showcasewindow.style.display === "none")){
        loadContent();
        

    }
});

loadContent();