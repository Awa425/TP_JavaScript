const APIURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c357
31a5ee918f014970082a0088b1&page=1`
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =  `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b
1&query=`


const main = document.querySelector('#main')
//API Donnees
fetchApiUrl(APIURL)

//API Recherche
const search = document.querySelector('.search')

search.addEventListener('input', ()=>{
    let valSearch = search.value;

    fetchApiUrl(SEARCHAPI+valSearch)
})


function fetchApiUrl(params) {
    fetch(params)
    .then(function(donneesBrute){
    // console.log(donnees.json())
    return donneesBrute.json();
    })
    .then(function(donneesJson){
        donneesJson.results.forEach(film => {
        console.log(film)
        let images = IMGPATH+film.backdrop_path;
        let titres = film.original_title;
        let votes = film.vote_average;
        let descript = film.overview;
        createFilm(images, titres, votes, descript)
    });
})
}




function createFilm(img, titles, vote, description) {

const film = document.createElement('div')
const image = document.createElement('img')
const film_info = document.createElement('div')
const title_film = document.createElement('h3')
const span = document.createElement('span')
const overview = document.createElement('div')
const p = document.createElement('p')
const titleOverview = document.createElement('h3')

//set attribut
film.setAttribute('class', 'film')
image.setAttribute('src', img)
film_info.setAttribute('class', 'film-info')
span.setAttribute('class', 'vote')
span.innerText=vote;
if (vote<6) {
    span.classList.add('red')
}
else if (vote>=6 && vote<8 ) {
    span.classList.add('orange')
}
else{
    span.classList.add('green')

}
overview.setAttribute('class', 'overview')
p.innerText=description;
title_film.innerText= titles
titleOverview.innerText='Overview'

//appen
overview.append(titleOverview, p)
film_info.append(title_film, span)
film.append(image, film_info, overview)
main.appendChild(film)

    
}