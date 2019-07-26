const getMovieDetail = async () => {
  const movieId = window.location.search;
  const splittedMovie = movieId.split("=");
  const id = splittedMovie[1];

  const url = `https://swapi.co/api/films/${id}`;
  const response = await fetch(url);
  const result = await response.json();

  console.log(result);

  //dom variables
  const movieDetailsList = document.querySelector(".movie-detail-list");

  const movieTitle = document.createElement("li");
  movieTitle.innerText = result.title;
  const movieReleaseDate = document.createElement("li");
  movieReleaseDate.innerText = result.release_date;
  const movieOpeningCrawl = document.createElement("li");
  movieOpeningCrawl.innerText = result.opening_crawl;

  movieDetailsList.appendChild(movieTitle);
  movieDetailsList.appendChild(movieReleaseDate);
  movieDetailsList.appendChild(movieOpeningCrawl);
};

getMovieDetail();
