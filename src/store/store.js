import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

// Slices
import userSlice from "./slices/userSlice";

// Sagas
import userSaga from "./sagas/userSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { userSlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(userSaga);

export default store;
