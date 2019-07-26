const getMovieDetail = async () => {
  const movieId = window.location.search;
  const splittedMovie = movieId.split("=");
  const id = splittedMovie[1];

  //   console.log(id);

  const url = `https://swapi.co/api/films/`;
  const response = await fetch(url);
  const responseJson = await response.json();

  const movieDetailsList = document.querySelector(".movie-detail-list");

  responseJson.results.map(result => {
    if (result.episode_id === parseInt(id)) {
      const movieTitle = document.createElement("li");
      movieTitle.innerText = result.title;
      const movieReleaseDate = document.createElement("li");
      movieReleaseDate.innerText = result.release_date;
      const movieOpeningCrawl = document.createElement("li");
      movieOpeningCrawl.innerText = result.opening_crawl;

      movieDetailsList.appendChild(movieTitle);
      movieDetailsList.appendChild(movieReleaseDate);
      movieDetailsList.appendChild(movieOpeningCrawl);
    }
  });

  // dom variables
};

getMovieDetail();
