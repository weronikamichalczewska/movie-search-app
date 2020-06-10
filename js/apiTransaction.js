// Initial Values
const API_KEY = '6766d60b1a9bdd8bac9fc269a74fcf52';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const url = 'http://api.themoviedb.org/3/search/movie?api_key=6766d60b1a9bdd8bac9fc269a74fcf52';


function generateUrl(path){
    const url = `http://api.themoviedb.org/3${path}?api_key=6766d60b1a9bdd8bac9fc269a74fcf52`;
    return url;
}

function requestMovies(url, onComplete, onError){
    fetch(url)
        .then((res) => res.json())
        .then(onComplete)
        .catch(onError);
}

function searchMovie(value){
    const path = '/search/movie'
    const url = generateUrl(path) + '&query=' + value;
    requestMovies(url, renderSearchMovies, handleError);
}

function getUpcomingMovies(){
    const path = '/movie/upcoming';
    const url = generateUrl(path);

    const render = renderMovies.bind({title: 'Upcoming Movies'});
    requestMovies(url, render, handleError);
}

function getTopRatedMovies(){
    const path = '/movie/top_rated';
    const url = generateUrl(path);

    const render = renderMovies.bind({title: `Top Rated Movies<i class='fas fa-star'></i>`});
    requestMovies(url, render, handleError);
}

function getPopularMovies(){
    const path = '/movie/popular';
    const url = generateUrl(path);

    const render = renderMovies.bind({title: `What's Popular<i class='fas fa-thumbs-up'></i>`});
    requestMovies(url, render, handleError);
}








