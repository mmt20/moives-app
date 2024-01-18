import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import CardMovie from './CardMovie';
import PaginationComponent from './Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { getAllMovie } from '../redux/actions/movieAction';

const MoviesList = ({ getPage, pageCount }) => {
  const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMovie());
  }, []);

  const dataMovies = useSelector((state) => state.movies);

  useEffect(() => {
    setMovies(dataMovies);
  }, [dataMovies]);

  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((movie) => {
          return <CardMovie key={movie.id} movie={movie} />;
        })
      ) : (
        <h3 className="text-center p-5">No Moives... </h3>
      )}
      {movies.length >= 1 ? <PaginationComponent /> : null}
    </Row>
  );
};

export default MoviesList;
