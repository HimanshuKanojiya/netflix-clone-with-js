const API_Key = "ce77aaeb83dc417f01169d443f16255a&language=en-US";

let responsetext = "";

class Popularonnetflix{
    constructor(){
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
        this.content = JSON.parse(responsetext);
    }
    settopopulararray(){
        for(let i = 0; i < this.content.results.length;i++){
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
        this.url = value;
    }
    set_param_at_end(value){
        this.additionalpararmatend = value;
    }
    set_popular_movie(){
        this.popularimageobjects = this.contentforpopular[Math.floor(Math.random() * this.contentforpopular.length)];
        this.popularimageobjects.movieposter = this.popularimageobjects.movieposter.replaceAll("w300","original");
    }
}