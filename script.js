//mengambil film
function getMovies(keyword){
	let xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200){
			//ketika ajax siap
			console.log(xhr.response);
			let movies = JSON.parse(xhr.response);
			showMovies(movies.Search);
		}
	}
	xhr.open('get','http://www.omdbapi.com/?apikey=83a214fc&s='+ keyword);
	xhr.send();
}
//menalpilkan film

function showMovies(movies) {
	let cards = "";
	movies.forEach(function(movie){
		cards += ` <div class="col-4 my-3">
          <div class="card">
  <img src="${movie.Poster}" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">${movie.Title}</h5>
     <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
    <a href="detail.php?id=${movie.imdbID}" class="btn btn-primary">Show Details</a>
  </div>
  </div>
  </div>`;

	});
	movieList.innerHTML = cards;

}

let movieList = document.querySelector('.movie-list');
let inputKeyword = document.querySelector('.input-keyword');
let buttonSearch = document.querySelector('.buttonSearch');
getMovies('Monkey');