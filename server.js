const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 4000;

// place holder for the data
const movies = [
  {
    moviesTitle: "La La Land",
    moviesGenre: "Romantic",
    moviesDirector: "Noah",
    moviesRelease: "2003"
  },
  {
    moviesTitle: "Rebel Moon",
    moviesGenre: "Sci-fi Action",
    moviesDirector: "Zack Snyder",
    moviesRelease: "2024"
  },
  {
    moviesTitle: "Reacher",
    moviesGenre: "Detective Action",
    moviesDirector: "Jack",
    moviesRelease: "2024"
  }
];

app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, '../my-app/build')));

//call movie api
app.get('/api/movies', (req, res) => {
  console.log('api/movies called!')
  res.json(movies);
});

//adding movie
app.post('/api/movie', (req, res) => {
  const movie = req.body.movie;
  console.log('Adding movie:::::', movie);
  movies.push(movie);
  res.json("movie addedd");
});

app.get('/', (req,res) => {
  // res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});