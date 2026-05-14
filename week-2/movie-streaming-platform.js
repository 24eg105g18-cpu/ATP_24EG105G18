// Assignment 4: Movie Streaming Platform
// This module provides reusable helpers for movie lists and recommendations.
const movies = [
  { id: 1, title: 'Inception', genre: 'Sci-Fi', rating: 8.8 },
  { id: 2, title: 'Joker', genre: 'Drama', rating: 8.4 },
  { id: 3, title: 'Avengers', genre: 'Action', rating: 8.0 },
  { id: 4, title: 'Interstellar', genre: 'Sci-Fi', rating: 8.6 }
];

export function getMoviesByGenre(movieList, genre) {
  return movieList.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
}

export function getMovieTitleRatings(movieList) {
  return movieList.map(movie => `${movie.title} (${movie.rating})`);
}

export function getAverageRating(movieList) {
  if (!movieList.length) return 0;
  const total = movieList.reduce((sum, movie) => sum + movie.rating, 0);
  return total / movieList.length;
}

export function findMovieByTitle(movieList, title) {
  return movieList.find(movie => movie.title.toLowerCase() === title.toLowerCase());
}

export function findMovieIndexByTitle(movieList, title) {
  return movieList.findIndex(movie => movie.title.toLowerCase() === title.toLowerCase());
}

console.log('Movie streaming results:');
console.log(getMoviesByGenre(movies, 'Sci-Fi'));
console.log(getMovieTitleRatings(movies));
console.log('Average rating:', getAverageRating(movies));
console.log(findMovieByTitle(movies, 'Joker'));
console.log('Index of Avengers:', findMovieIndexByTitle(movies, 'Avengers'));