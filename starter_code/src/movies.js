/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const newMovies = [...movies];

  newMovies.sort((a, b) => {
    if (a.year - b.year) {
      return a.year - b.year;
    } else if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    } else return 0;
  });

  return newMovies;
  console.log(newMovies);
}

// orderByYear(movies);
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
  const filteredMovies = movies.filter(function(movie) {
    if (
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
    ) {
      return true;
    } else return false;
  });
  return filteredMovies.length;
};
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {

    var movieTitles = [...movies];
    
    movieTitles = movies.map(movie => {
        return movie.title;
    });

    movieTitles.sort((a, b) => {
        if (a.toLowerCase() > b.toLowerCase())
        return 1;
        if (a.toLowerCase() < b.toLowerCase())
        return -1;
        return 0;
    });

    console.log(movieTitles);

    const top20= movieTitles.slice(0,20);
    console.log(top20);
    return top20;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
  
  if (array.length === 0) {
    return 0;
  }

  let movieRates = 0;
  movieRates = array.map(array => array.rate);  

  function getSum(a, b) { 
    if (isNaN(b)) {
     return a;
    }

    return a + b;
  }

  let average = (movieRates.reduce(getSum, 0) / movieRates.length);
  average = Number(average.toFixed(2));

  return average;

// Franck's version:
//
// function ratesAverage(movies) {

//    if (!movies.length) return 0;

//    movies.reduce(acc,movie) => {
//    return (acc += movie.rate)
//     }, 0);

//    const avg = sum / movies.length;
//    const rounded = Number(avg.toFixed(2));

// }

}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
  let dramaRates = array.filter(array => array.genre.includes("Drama"));

  let dramaAverage = ratesAverage(dramaRates);

  return dramaAverage;
}

// Franck's version (same as mine!!) :

// function dramaMoviesRate(movies) {
//   const dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));
//   const average = ratesAverage(dramaMovies)
//   return average;
// }

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {

  let movieDuration = [...array];
  
  function convertTime(string) {

    let durationInMinutes = 0;
    let hoursDigits = 0;
    let minutesDigits = 0;
    let numberOfHours = 0;      
    let numberOfMinutes = 0;

    for (let i = 0 ; i < string.length ; i++) {

      if (string[i] === 'h') {
        hoursDigits = i;
        numberOfHours = string.substring(i-hoursDigits, i);
      }

      if (string[i] === 'm') {
        minutesDigits = i;
        numberOfMinutes = string.substring(i-minutesDigits, i);
        break;
      }
    }
    
    durationInMinutes = (numberOfHours * 60) + numberOfMinutes;

    return durationInMinutes;
  }

  movieDuration = movieDuration.map(convertTime(movieDuration.duration));

  return movieDuration;
}

//Franck's version:

// function turnHoursToMinutes(movies) {
//   const modifiedDuration = movies.map(movie => {
//     const copy = {...movie};
//     const time = movie.duration.split(" ");    //So we can split it between min/hrs;
//     let duration;
//     if(time.length > 1) {                       //check we have an array of length 2 so we are sure we have hours AND minutes;
//       duration = parseFloat(time[0]) * 60 + parseFloat(time[1]);
//     } else if (time[0].includes("h")) duration = parseFloat(time[0]) * 60;
//     else duration = parseFloat(time[0]);
//     movie.duration = duration;
//     return movie;
//   })
//   return modifiedDuration
// }

// BONUS Iteration: Best yearly rate average - Best yearly rate average
//
//Franck's version :
//function bestYearAvg(movies) {
//   if (!movies.length) return null;
//   const yeardObj = movies.reduce((acc, movie) => {
//     if (acc[movie.year]) acc[movie.year].push({ rate: movie.rate });
//     else acc[movie.year] = [{ rate: movie.rate }];
//     return acc;
//   }, {});
// ​
//   let best =  {bestYear: 0, avg: 0}
//   for(let key in yeardObj ){
//       let avg = ratesAverage(yeardObj[key]);
//       if(avg > best.avg) best = {bestYear: key, avg: avg}
//   }
//   return `The best year was ${best.bestYear} with an average rate of ${best.avg}`
// ​
// }