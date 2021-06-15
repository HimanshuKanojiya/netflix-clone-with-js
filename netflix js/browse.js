//This script is for category based pages
//And User Search Pages


//Below Object contains API Related Information
//For Category Type Pages
//It stores API URL, Additional Parameters
//& Page Number
const API_Mapping = {
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
    "Cartoon Movies":{
        "API":"https://api.themoviedb.org/3/discover/movie",
        "Current_Page":1,
        "Additional_Params":"&with_genres=16",
        "Last_Page":null,
    },
    "Popular TV Series":{
        "API":"https://api.themoviedb.org/3/tv/popular",
        "Current_Page":1,
        "Additional_Params":null,
        "Last_Page":null,
    },
    "Top Rated TV Series":{
        "API":"https://api.themoviedb.org/3/tv/top_rated",
        "Current_Page":1,
        "Additional_Params":null,
        "Last_Page":null,
    },
    
}

const populatecontainonpage = (url, genres, portion) => {
    //This function is depended on "request.js" code
    //to load the content

    const req = new Popularonnetflix(); //initializing the class
    req.set_url(url); //set the API URL

    //if genres is not null
    //then it will set additional Params at the End
    //Using Class Member of Popularonnetflix
    if(genres != null){
        req.set_param_at_end(genres);

    }
    req.fetchpopular(); //Initiating the API Call
    req.convertojson(); //Converting response to JSON object
    req.settopopulararray(); //Arranging Response in desired way
    req.set_popular_movie(); //Randomly chooses the Movie for Top Movie Feature Section

    //Below Function is depended on the "popularcontentpopulate.js code"
    //It will create image HTML code using templating
    //and save to content variable
    //req.contentforpopular is class variable where
    //movies/tv data saved in the object
    const content = createimageportion(req.contentforpopular);
    
    //Below Function is depended on the "popularcontentpopulate.js code"
    //It will put the HTML content in the specific portion of the page
    //Content contains HTML Code
    //portion contains page section where data
    //will be saved
    contentputter(content, portion);
}

const loadContent = () => {
    //Function will Set API Parameter in Specific Manner to load
    //Correct Content

    //Saving Header Element for Edit
    const headofbrowse = document.getElementById("headers");

    //Condition For Category Based URL
    //Example: file:///C:/Users/Himanshu/Documents/Netflix%20Clone/browse.html?type=Popular%20Movies
    if(decodeURIComponent(window.location.search.split("=")[0]) === "?type"){
        query = decodeURIComponent(window.location.search.split("=")[1]);
    }
    
    //If Above Condition is False,
    //Then below condition is based on User Search
    //So it will set Parameters for Search Based API
    else{
        let urlparam = decodeURIComponent(window.location.search.split("=")[0].split("?")[1].split("_").join(" "));
        query = urlparam;

        //IMP: include_adult=false, will not fetch
        //adult movies for Search Based Queries
        API_Mapping[query].Additional_Params = `&language=en-US&include_adult=false&query=${decodeURIComponent(window.location.search.split("=")[1])}`;
    }
    
    //Replace the title based on Category or User Search
    headofbrowse.innerHTML = query;

    let Additional_Params = ""

    //IF Additional Parameters is null
    //then below condition will add page paramters at the 
    //End of URL and save it in the variable
    if(API_Mapping[query].Additional_Params === null){
        Additional_Params = `&page=${API_Mapping[query].Current_Page}`;
        
    }
    else{
        //If above condition fails then
        //Additional Params will be set along with Page Params
        Additional_Params = `&${API_Mapping[query].Additional_Params}&page=${API_Mapping[query].Current_Page}`;
    }
    
    //Call the API to load content
    populatecontainonpage(API_Mapping[query].API, Additional_Params,"sectionimages");
    
    //Will update page numbers, In each call, 
    //It will set Page number for next call
    API_Mapping[query].Current_Page = API_Mapping[query].Current_Page + 1;
}


//Load remaining pages content when we threshold the page scrolling limit
//Example: Suppose, we have scrolled to the bottom, then this
//function will load further pages contents
const showcasewindow = document.getElementById("showcasevideo");
window.addEventListener("scroll", function(){
    const mainsection = this.document.getElementById("maincontentsection");
    
    //If someone has clicked on the content and watching the trailer
    //then this condition will stop loading further pages contents
    //untill users close the trailer & infor window

    //Content will only load if showcasewindow is none or empty
    if(window.pageYOffset > mainsection.offsetHeight - 600 && 
        (showcasewindow.style.display === "" || showcasewindow.style.display === "none")){
        loadContent(); //Calling the content load Function
        

    }
});

//By Default First Page Content will be loaded
//Each time, we call this function, it will only load next pages
//not same page again & again
loadContent();
