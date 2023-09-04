import { all } from "redux-saga/effects";
import { watchMovieSearchSaga} from "../Store/Sagas/movieSearchSaga";
import { watchGetMovieByIDSaga } from "./Sagas/getMovieByIdSaga";

export default function* RootSaga() {
  yield all([
    watchMovieSearchSaga(),
    watchGetMovieByIDSaga(),
  ]);
}