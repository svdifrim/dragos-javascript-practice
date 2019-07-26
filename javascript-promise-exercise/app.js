const getMovie = async () => {
  const url = "https://swapi.co/api/films";
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const results = jsonResponse.results;

  // dom elements
  const movieList = document.querySelector(".movie-list");

  results.sort((a, b) => {
    return a.episode_id - b.episode_id;
  });

  console.log(results);

  results.map(result => {
    // console.log(result);

    const movieListItem = document.createElement("li");
    movieListItem.classList.add("movie-item");
    const movieName = document.createElement("span");
    movieName.innerText = result.title;
    movieName.classList.add("movie-name");
    const movieLink = document.createElement("a");
    movieLink.innerText = "See movie detail";
    movieLink.setAttribute(
      "href",
      `./movieDetail.html?id=${result.episode_id}`
    );

    movieList.appendChild(movieListItem);
    movieListItem.appendChild(movieName);
    movieListItem.appendChild(movieLink);
  });
};

getMovie();

//   getMovie();
