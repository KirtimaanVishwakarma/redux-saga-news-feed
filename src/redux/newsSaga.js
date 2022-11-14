import { put, takeEvery } from "redux-saga/effects";

function* fetchNews() {
  //   const res = yield fetch(
  //     "https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc"
  //   );

  const res = yield fetch("https://jsonplaceholder.typicode.com/photos");
  const result = yield res.json();
  //   console.warn("newsSaga result", result);
  yield put({ type: "SET_NEWS_FEED", result });
}
function* newsSaga() {
  yield takeEvery("SHOW_NEWS_FEED", fetchNews);

  //take effect use
}

export default newsSaga;
