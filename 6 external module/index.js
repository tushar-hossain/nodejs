const getRandomFruitsName = require("random-fruits-name");

// console.log(getRandomFruitsName("en"));
// console.log(getRandomFruitsName("es"));
// console.log(getRandomFruitsName("ja"));
// console.log(getRandomFruitsName());

const randomMovieNames = require("random-movie-names");

// console.log(randomMovieNames());
// console.log(randomMovieNames(5));
console.log(randomMovieNames({ min: 5, max: 10 }));
