document.getElementById("movie-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const genre = document.getElementById("genre").value;
  const mood = document.getElementById("mood").value;
  const container = document.getElementById("results-container");

  const dummyMovies = {
  "sci-fi": [
    { title: "Interstellar", description: "A journey beyond the stars.", img: "https://image.tmdb.org/t/p/w500/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg", imdb: "https://www.imdb.com/title/tt0816692/" },
    { title: "The Martian", description: "Survive on Mars.", img: "https://image.tmdb.org/t/p/w500/5aGhaIHYuQbqlHWvWYqMCnj40y2.jpg", imdb: "https://www.imdb.com/title/tt3659388/" }
  ],
  "comedy": [
    { title: "The Mask", description: "A wild ride of laughter.", img: "https://image.tmdb.org/t/p/w500/6K3J7Y5E9OeZTgLwS91fFpEqh0e.jpg", imdb: "https://www.imdb.com/title/tt0110475/" },
    { title: "Superbad", description: "Teenage chaos.", img: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg", imdb: "https://www.imdb.com/title/tt0829482/" }
  ],
  "drama": [
    { title: "The Pursuit of Happyness", description: "A touching story of resilience.", img: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg", imdb: "https://www.imdb.com/title/tt0454921/" },
    { title: "Forrest Gump", description: "Life is like a box of chocolates.", img: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg", imdb: "https://www.imdb.com/title/tt0109830/" }
  ],
  "romance": [
    { title: "La La Land", description: "Love and dreams in L.A.", img: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg", imdb: "https://www.imdb.com/title/tt3783958/" },
    { title: "Pride and Prejudice", description: "Classic love tale.", img: "https://image.tmdb.org/t/p/w500/6zDEYk3LZC2kaeYN3pfkH9cP7fT.jpg", imdb: "https://www.imdb.com/title/tt0414387/" }
  ],
  "horror": [
    { title: "The Conjuring", description: "Based on true events.", img: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg", imdb: "https://www.imdb.com/title/tt1457767/" },
    { title: "A Quiet Place", description: "Silence is survival.", img: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg", imdb: "https://www.imdb.com/title/tt6644200/" }
  ],
  "animation": [
    { title: "Inside Out", description: "Meet the voices in your head.", img: "https://image.tmdb.org/t/p/w500/lRHE0vzf3oYJrhbsHXjIkF4Tl5A.jpg", imdb: "https://www.imdb.com/title/tt2096673/" },
    { title: "Coco", description: "Music, family, and memories.", img: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg", imdb: "https://www.imdb.com/title/tt2380307/" }
  ],
  "action": [
    { title: "Mad Max: Fury Road", description: "Chaos on wheels.", img: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg", imdb: "https://www.imdb.com/title/tt1392190/" },
    { title: "John Wick", description: "Revenge has a name.", img: "https://image.tmdb.org/t/p/w500/5vHssUeVe25bMrof1HyaPyWgaP.jpg", imdb: "https://www.imdb.com/title/tt2911666/" }
  ]
};

  container.innerHTML = "";
  const movies = dummyMovies[genre] || [];
  if (movies.length === 0) {
    container.innerHTML = '<p class="toast">No recommendations found for this selection.</p>';
    return;
  }

  movies.forEach(movie => {
    const card = document.createElement("div");
    card.className = "card reveal";
    card.innerHTML = `<h2>${movie.title}</h2>
      <img src="${movie.img}" alt="${movie.title}" />
      <p>${movie.description}</p>
      <a href="${movie.imdb}" target="_blank">View on IMDb</a>`;
    container.appendChild(card);
  });
});