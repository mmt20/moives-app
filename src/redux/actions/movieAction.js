import { AllMOVIES, MovieApi } from '../types/moviesType';
import axios from 'axios';

export const getAllMovie = () => {
  return async (dispatch) => {
    const res = await axios.get(MovieApi);
    dispatch({
      type: AllMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};
export const getMovieSearch = (word) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${word}&api_key=74e3d229bc3c0e5f8a72a59db3d1e204`
    );
    dispatch({
      type: AllMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};
export const getPage = (page) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=74e3d229bc3c0e5f8a72a59db3d1e204&language=en&page=${page}`
    );
    dispatch({
      type: AllMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};
