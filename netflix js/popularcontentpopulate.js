function createimagearray(title, image, movieid){
    return `
    <img src="${image}" alt="${title}" onclick="showcasetrailer(${movieid}, window.pageYOffset)">
    `
}
function createimageportion(images){
    let htmlportion = "";
    for(let i = 0;i < images.length;i++){
        htmlportion = htmlportion + createimagearray(images[i].movietitle, images[i].movieposter, images[i].movieid);
    }
    return htmlportion;

}
function contentputter(htmlportion, section_id){
    let Mainsection = document.getElementById(section_id);
    Mainsection.innerHTML += htmlportion;
}
function featuredshow(data){
    return createimagearray(data.movietitle, data.movieposter)

}