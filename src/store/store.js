import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

// Slices
import mainSlice from "./slices/mainSlice";

// Sagas
import mainSaga from "./sagas/mainSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { mainSlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(mainSaga);

export default store;
