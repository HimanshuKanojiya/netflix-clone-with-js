//
PopularContentData = null;


function sectionheaderload(title, id){
    let content = `
    <a href="./browse.html?type=${title}"><h2 id="headers">${title} <span><div id="fulltext">Explore All</div> > </span></h2></a>
    <div id=${id}></div>

    `
    let section = document.getElementById("maincontentsection");
    section.innerHTML += content;
}


function populatecontainonpage(url, genres, portion, title,featurevideo){
    let req = new Popularonnetflix();
    req.set_url(url);
    if(genres != null){
        req.set_param_at_end(genres);

    }
    req.fetchpopular();
    req.convertojson();
    req.settopopulararray();
    if(featurevideo === true){
        req.set_popular_movie();
        PopularContentData = req.popularimageobjects;
        
    }
    let content = createimageportion(req.contentforpopular);
    sectionheaderload(title,portion);
    contentputter(content, portion);
}

populatecontainonpage("https://api.themoviedb.org/3/movie/popular",null,"Mainsection","Popular Movies",true);
populatecontainonpage("https://api.themoviedb.org/3/movie/top_rated",null,"Mainsectiontoprated","Top Rated Movies");
populatecontainonpage("https://api.themoviedb.org/3/movie/now_playing",null,"Mainsectionlatest","Latest Movies");
// populatecontainonpage("https://api.themoviedb.org/3/trending/tv/week",null,"Mainsectiontvseries","Trending TV Series");
populatecontainonpage("https://api.themoviedb.org/3/discover/movie","&with_genres=12","Mainsectionactionmovies","Action Movies");
populatecontainonpage("https://api.themoviedb.org/3/discover/movie","&with_genres=878","Mainsectionsciencefictionmovies","Science Fiction Movies");
populatecontainonpage("https://api.themoviedb.org/3/discover/movie","&with_genres=10752","Mainsectionwarmovies","War Movies");
populatecontainonpage("https://api.themoviedb.org/3/discover/movie","&with_genres=53","Mainsectionthrillermovies","Thriller Movies");
populatecontainonpage("https://api.themoviedb.org/3/discover/movie","&with_genres=27","Mainsectionhorrormovies","Horror Movies");