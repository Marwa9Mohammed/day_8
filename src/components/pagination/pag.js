import React, { useState, useEffect } from 'react';

function MovieListPage() {
  const itemsPerPage = 10; // Number of movies per page
  const [movies, setAllMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch movies data from API or data source
  useEffect(() => {
    // Fetch movies data and update the 'movies' state
    // You can use your own API or data source here
    // Example: fetchMoviesData()
  }, []);

  // Calculate the total number of pages
  const totalPages = Math.ceil(movies.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the range of movies to display based on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedMovies = movies.slice(startIndex, endIndex);

  return (
    <div>
      {/* Render the displayed movies */}
      {displayedMovies.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}

      {/* Render the pagination navigation */}
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MovieListPage;