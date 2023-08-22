import {
    FETCH_MOVIE_DETAIL_SUCCESS,
    FETCH_MOVIE_DETAIL_REQUEST,
    FETCH_MOVIE_DETAIL_FAILURE
} from "../../Constants/actionConstants"

export const fetchMovieDetailRequest = payload => {
    return {
      type: FETCH_MOVIE_DETAIL_REQUEST,
      payload
    };
  };
  
  export const fetchMovieDetailSuccess = response => {
    return {
      type: FETCH_MOVIE_DETAIL_SUCCESS,
      response
    };
  };
  
  export const fetchMovieDetailFailure = error => {
    return {
      type: FETCH_MOVIE_DETAIL_FAILURE,
      error
    };
  };

