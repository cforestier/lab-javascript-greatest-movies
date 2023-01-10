// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((movie) => movie.director);
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielberg = moviesArray.filter(function dramaSpielberg(
    exempleSpielberg
  ) {
    return exempleSpielberg.director.includes("Steven Spielberg");
  });
  // filters all movies from Spielberg

  const drama = spielberg.filter(function dramaMovie(exempleDrama) {
    return exempleDrama.genre.includes("Drama");
  });
  // const drama filters all movies that are dramas from the const spielberg
  return drama.length;
  // return the number of object in the drama object
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray == 0) {
    return 0;
  }
  const sumOfScores = moviesArray.reduce(function sum(
    accumulator,
    currentValue
  ) {
    if (currentValue.hasOwnProperty("score")) {
      return accumulator + currentValue.score;
    }
    return accumulator;
  },
  0);
  // reduce to the sum of all scores
  const averageScores = sumOfScores / moviesArray.length;
  // creates a new constant that is the sum of all scores divided by the length of the array
  return Math.round(averageScores * 100) / 100;
  // rounds up to 2 decimals
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
  // create a const allDramas = that filters all dramas from the parameter
  const allDramas = moviesArray.filter(function dramaMovie(exempleDrama) {
    return exempleDrama.genre.includes("Drama");
  });
  // console.log (allDramas)
  if (allDramas == 0) {
    return 0;
  } // validates that allDramas is not empty
  // create a const that sums all score of the prefiltered const allDramas
  const sumOfScores = allDramas.reduce(function sum(accumulator, currentValue) {
    if (currentValue.hasOwnProperty("score")) {
      // validates that the movie we are taking have the score if not we continue
      return accumulator + currentValue.score;
    }
    return accumulator;
  }, 0);
  // console.log (sumOfScores)
  const averageScores = sumOfScores / allDramas.length; // create a new const that is the average of scores
  // console.log (averageScores)
  return Math.round(averageScores * 100) / 100; // rounds up to 2 decimals
}
// fucking did it

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newArray = [...moviesArray];
  newArray.sort(function (a, b) {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let newTop20 = [];
  moviesArray.sort(function (firstMovie, secondMovie) {
    return firstMovie.title.localeCompare(secondMovie.title);
  });

  for (let i = 0; i < moviesArray.length; i++) {
    if (i >= 20) {
      break;
    }
    newTop20.push(moviesArray[i].title);
  }
  return newTop20;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
