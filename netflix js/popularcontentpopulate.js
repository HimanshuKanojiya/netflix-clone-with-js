//This script is used in all pages

const createimagearray = (title, image, movieid) => {
    //This function will create image HTML using
    //Templating and placeholder
    return `
    <img src="${image}" alt="${title}" onclick="showcasetrailer(${movieid}, window.pageYOffset)">
    `
}

const createimageportion = (images) => {
    //This function will create HTML images in Bulk 
    //and return the HTML codes
    let htmlportion = "";
    for(let i = 0;i < images.length;i++){
        htmlportion = htmlportion + createimagearray(images[i].movietitle, images[i].movieposter, images[i].movieid);
    }
    return htmlportion;

}

const contentputter = (htmlportion, section_id) => {
    //This function is responsible for putting content
    //in the specific section
    //htmlportion variable is for HTML Codes
    //section_id variable is the container id
    const Mainsection = document.getElementById(section_id);
    Mainsection.innerHTML += htmlportion;
}

const featuredshow = (data) => {
    //This function is responsible for creating single image HTML Code
    return createimagearray(data.movietitle, data.movieposter)

}
