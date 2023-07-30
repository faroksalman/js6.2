function findTopRatedMovies(movies) {
    if (movies.length === 0) {
      return [];
    }
  
    let highestRating = -Infinity;
    let topRatedMovies = [];
  
    for (const movie of movies) {
      if (movie.rating > highestRating) {
        highestRating = movie.rating;
        topRatedMovies = [movie.title];
      } else if (movie.rating === highestRating) {
        topRatedMovies.push(movie.title);
      }
    }
  
    return topRatedMovies;
  }
  
  // Example usage:
  const movies = [
    { title: "Movie 1", rating: 8 },
    { title: "Movie 2", rating: 7 },
    { title: "Movie 3", rating: 9 }
  ];
  
  const topRatedMovies = findTopRatedMovies(movies);
  console.log(topRatedMovies); // Output: ["Movie 3"]
  
