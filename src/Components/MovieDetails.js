import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const param = useParams();
  const [movie, setMovie] = useState([]);
  // get get movie details by id
  const getMovieDetails = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${param.id}?api_key=74e3d229bc3c0e5f8a72a59db3d1e204&language=en`
      )
      .then((res) => {
        setMovie(res.data);
      });
  };
  useEffect(() => {
    getMovieDetails();
  });
  return (
    <div>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4">
          <div className="card-detalis d-flex align-items-center">
            <img
              className="img-movie  w-30"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="justify-content-center center-text mx-auto">
              <p className="card-text-details border-bottom">
                Movie Name: {movie.original_title}
              </p>
              <p className="card-text-details border-bottom">
                Release Date: {movie.release_date}
              </p>
              <p className="card-text-details border-bottom">
                Vote Count: {movie.vote_count}
              </p>
              <p className="card-text-details border-bottom">
                Rating: {movie.vote_average}
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1 ">
          <div className="card-story  d-flex flex-column align-items-start">
            <div className="text-end p-4 ">
              <p className="card-text-title border-bottom">Story:</p>
            </div>
            <div className="text-start px-2">
              <p className="card-text-story">{movie.overview}</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md="12" xs="12" className="mt-1 d-flex justify-content-center">
          <Link to="/">
            <button
              style={{ backgroundColor: '#db3e00', border: 'none' }}
              className="btn btn-primary mx-2"
            >
              Home
            </button>
          </Link>

          <a href={movie.homepage}>
            <button
              style={{ backgroundColor: '#db3e00', border: 'none' }}
              className="btn btn-primary mx-2"
            >
              Show Movie
            </button>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetails;
