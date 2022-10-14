const data = require("./data.js");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorsArr = moviesArray.map((element) => element.director);
  return directorsArr;
}
console.log(getAllDirectors(data));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergArray = moviesArray.filter(
    (element) =>
      element.director === "Steven Spielberg" && element.genre.includes("Drama")
  );
  return spielbergArray.length;
}
console.log(howManyMovies(data));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;
  else {
    const scoreArr = moviesArray.map((element) => element.score);
    const avgSum = scoreArr.reduce((a, b) => {
      if (b === undefined) {
        return a;
      }
      return a + b;
    });
    const avgScore = avgSum / scoreArr.length;
    return Number(avgScore.toFixed(2));
  }
}
console.log(scoresAverage(data));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramasArray = moviesArray.filter((element) =>
    element.genre.includes("Drama")
  );
  if (dramasArray.length === 0) return 0;
  else {
    const dramasScoreArray = dramasArray.map((element) => element.score);
    const avgSum = dramasScoreArray.reduce((a, b) => {
      if (b === undefined) {
        return a;
      }
      return a + b;
    });
    const avgScore = avgSum / dramasScoreArray.length;
    return Number(avgScore.toFixed(2));
  }
}
console.log(dramaMoviesScore(data));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const copyOfMoviesArray = [...moviesArray];
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
