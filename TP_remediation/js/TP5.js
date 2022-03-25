const APIURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c357
31a5ee918f014970082a0088b1&page=`
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =  `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b
1&query=`
const main = document.querySelector('#main')

//Affichage de la premiere page
allMovies(APIURL)

//API Recherche
const search = document.querySelector('.search')
search.addEventListener('input', ()=>{
    let valSearch = search.value;
    if(valSearch!=""){
        main.innerHTML=""
        allMovies(SEARCHAPI+valSearch)
    }
    else allMovies(APIURL)
})

//scroll
let i = 0;
window.addEventListener('scroll', ()=>{
    const {scrollTop, clientHeight, scrollHeight} = document.documentElement;
    if (scrollTop+clientHeight>scrollHeight-80) {
        let pageVar = APIURL+(i+=1)
        allMovies(pageVar)
    }
})

//function All Movies Data
function allMovies(urlMovies) {
    let tableauFilm = fetchApiUrl(urlMovies);
    tableauFilm.then(function(donnees){
    donnees.forEach(films => {  
         createFilm(films)

    });
})
}

//Asyncronuous and wait fetch
async function fetchApiUrl(url){
    let response = await fetch(url)
    let donneesJson = await response.json();
    let tab_film = donneesJson.results;
    return tab_film
}

//Fonctio creation dfilm
function createFilm(movies) {
    let images = IMGPATH+movies.backdrop_path;
    let titres = movies.original_title;
    let votes = movies.vote_average;
    let descript = movies.overview;

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
    image.setAttribute('src', images)
    film_info.setAttribute('class', 'film-info')
    span.setAttribute('class', 'vote')
    span.innerText=votes;
    if (votes<6) {
        span.classList.add('red')
    }
    else if (votes>=6 && votes<8 ) {
        span.classList.add('orange')
    }
    else{
        span.classList.add('green')

    }
    overview.setAttribute('class', 'overview')
    p.innerText=descript;
    title_film.innerText= titres
    titleOverview.innerText='Overview'

    //appen
    overview.append(titleOverview, p)
    film_info.append(title_film, span)
    film.append(image, film_info, overview)
    main.appendChild(film)

    
}