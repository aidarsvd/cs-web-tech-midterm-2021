const BASE_URL = 'https://api.themoviedb.org/3/';
const popular_route = 'movie/popular'
const upcoming_route = 'movie/upcoming'
const top_rated_route = 'movie/top_rated'
const api_key = '9075303a6c0299a1dc0e2d6eaa1cffed'
let movieBox = $('.box');
let mainTitle = $('.main_title')

function renderPopular() {
  fetch(BASE_URL + popular_route + '?&api_key=' + api_key)
    .then((res) => res.json())
    .then((data) => {
      movieBox.html('')
      data.results.forEach((item) => {
        movieBox.append(movieCard(item));
      });
    });
}

function renderUpComing(){
  fetch(BASE_URL + upcoming_route + '?&api_key=' + api_key)
  .then((res) => res.json())
  .then((data) => {
    movieBox.html('')
    console.log(data)
    data.results.forEach((item) => {
      movieBox.append(movieCard(item));
    });
  });
}

function renderTopRated() {
  fetch(BASE_URL + top_rated_route + '?&api_key=' + api_key)
  .then((res) => res.json())
  .then((data) => {
    movieBox.html('')
    console.log(data)
    data.results.forEach((item) => {
      movieBox.append(movieCard(item));
    });
  });
}


$('#popular').click(() => {
  mainTitle.html('Popular movies:')
  renderPopular()
});

$('#up_coming').click(() => {
  mainTitle.html('Upcoming movies:')
  renderUpComing()
});

$('#top_rated').click(() => {
  mainTitle.html('Top rated movies:')
  renderTopRated()
});

function render(){
  renderPopular()
}

render();

function movieCard(item){
  return `
  <div class="movie_card" id = ${item.id}>
  <div class="poster_container">
    <img src="https://image.tmdb.org/t/p/w500/${item.backdrop_path}"></img>         
    <div class="rate" style="background-color:${returnRateColor(item.vote_average)};">
      <div class="rate_int">${item.vote_average}</div>
    </div>
  </div>
  <div class="movie_title">${item.title}</div>
  <div class="release_date">Release date: ${item.release_date}</div>
  `
}

function returnRateColor(rate){
  if(rate >= 7)
  return '#09EA3A'
  else if(rate <= 7 && rate >= 4)
  return '#e69138'
  else return 'red'
}