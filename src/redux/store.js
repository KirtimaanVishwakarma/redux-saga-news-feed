// import { createStore } from "redux";
// import rootReducer from "./rootReducer";
// const store = createStore(rootReducer);
// export default store;

// import { createStore } from "redux";

import { configureStore } from "@reduxjs/toolkit";
import newsSaga from "./newsSaga";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(newsSaga); //which middleware run when it called
export default store;
