const BASE_URL = 'https://api.themoviedb.org/3/';
const popular_route = 'movie/popular'
const upcoming_route = 'movie/upcoming'
const api_key = '9075303a6c0299a1dc0e2d6eaa1cffed'
let popularBox = $('.popular');
let upComing = $('.up_coming');

function renderPopular() {
  fetch(BASE_URL + popular_route + '?&api_key=' + api_key)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      data.results.forEach((item) => {
        console.log(item.id)
        popularBox.append(`
            <div class="box-inner" id = ${item.id}>
                <img src="https://image.tmdb.org/t/p/w500${item.backdrop_path}"></img>         
                <p>${item.title}</p>
            </div>
            `);
      });
    });
}

function renderUpComing(){
  fetch(BASE_URL + upcoming_route + '?&api_key=' + api_key)
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    data.results.forEach((item) => {
      console.log(item.id)
      upComing.append(`
          <div class="box-upcomming" id = ${item.id}>
              <img src="https://image.tmdb.org/t/p/w500${item.backdrop_path}"></img>         
              <p>${item.title}</p>
          </div>
          `);
    });
  });
}

function render(){
  renderPopular()
  renderUpComing()
}

render();