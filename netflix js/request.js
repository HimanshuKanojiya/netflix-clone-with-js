//This is Script is used in All Pages
//And it is main Files, which should be placed at top in the header section

//API Key of TMDB
const API_Key = "ce77aaeb83dc417f01169d443f16255a&language=en-US";

//Global Variable for saving API call Data
let responsetext = "";


//Class which is responsible for fetching data from TMDB
class Popularonnetflix{
    constructor(){
        //class Variables
        this.url = "";
        this.content = "";
        this.contentforpopular = [];
        this.popularimageobjects = "";
        this.additionalpararmatend = "";
    }
    
    async fetchpopular(callback){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            responsetext = xhttp.responseText;
        }
        };
        xhttp.open("GET", `${this.url}?api_key=${API_Key}&language=en-US${this.additionalpararmatend}`, false);
        xhttp.setRequestHeader("Content-type", 'application/json');
        xhttp.send();
    }
    convertojson(){
        //For Converting response to JSON object
        this.content = JSON.parse(responsetext);
    }
    settopopulararray(){
        //For creating movie details objects and save it in an array
        for(let i = 0; i < this.content.results.length;i++){
            //If Movie does not have image then that
            //movie will not be saved
            if(this.content.results[i].backdrop_path !== null){
                let stucture = {
                    "movietitle":this.content.results[i].original_title,
                    "movieposter": `https://image.tmdb.org/t/p/w300/${this.content.results[i].backdrop_path}`,
                    "overview":this.content.results[i].overview,
                    "movieid":this.content.results[i].id,
                }
                this.contentforpopular.push(stucture);
            }
            
        }
    }
    working(){
        alert("Working");
    }
    set_url(value){
        //For setting API URL
        this.url = value;
    }
    set_param_at_end(value){
        //For Setting Additional Parameters for API
        this.additionalpararmatend = value;
    }
    set_popular_movie(){
        //For randomly taking movie from the movies/tv collections array
        //and saving it for Top feature show section
        this.popularimageobjects = this.contentforpopular[Math.floor(Math.random() * this.contentforpopular.length)];
        this.popularimageobjects.movieposter = this.popularimageobjects.movieposter.replaceAll("w300","original");
    }
}