import axios from "axios";
import { useEffect, useState } from "react";
import { PageItem } from "react-bootstrap";
import { Link } from "react-router-dom";

function Movies() {
  const api = "8c8b6dadf0fae88b9b1b8cd4232dc825";
  const imagePath = "https://image.tmdb.org/t/p/w500";
  const [allMovies, setAllMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(6);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/tv/popular", {
        params: {
          api_key: api,
          page:currentPage,
        },
      })
      .then((response) => {
        console.log(response.data.results);
        setAllMovies(response.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [currentPage]);

  

  return (
    <div className="row">
      {allMovies.map((movie) => (
        <div
          key={movie.id}
          className="col-md-6 col-lg-4 col-xl-4"
          style={{ color: "red" }}
        >
          <Link to={`/details/${movie.id}`}>
            <div className="card text-black" style={{height:'50%'}}>
              <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
              <img
                src={`${imagePath}${movie.poster_path}`}
                className="card-img-top cardImg"
                alt="Movie"
              />
              <div className="card-body">
                <div className="text-center">
                  <h5
                    className="card-title"
                    style={{ fontFamily: "fantasy", color: "#C44987" }}
                  >
                    {movie.name}
                  </h5>
                  <p
                    className="mb-4"
                    style={{ fontFamily: "Georgia", color: "#693193" }}
                  >
                    {movie.overview}
                  </p>
                </div>
                <div>
                  <div
                    className="d-flex justify-content-between"
                    style={{ fontFamily: "fantasy", color: "#C44987" }}
                  >
                    <span>{movie.first_air_date}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
       <button
            
            style={{ fontFamily: "fantasy", color: "#C44987",backgroundColor:"#693193",fontSize:'20px' }}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
            
          </button>
          <button
            
             style={{ fontFamily: "fantasy", color: "#C44987", fontSize:'20px' }}
            onClick={() => setCurrentPage(currentPage+ 1)}
          >
            Next
          </button>
      {/* <div className="pagination"> */}
        {/* {Array.from({ length: Math.ceil(allMovies.length / moviesPerPage) }, (_, index) => ( */}
          {/* <button
            key={index + 1}
            className={`${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button> */}
        {/* ))} */}
      {/* </div> */}
    </div>
  );
}

export default Movies;