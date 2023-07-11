import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { transactionsReducer } from "./transactions/slice";
import { combineReducers } from "redux";

const persistConfig = {
  key: "transaction",
  version: 1,
  storage,
};

const reducer = combineReducers({
  transactions: transactionsReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
