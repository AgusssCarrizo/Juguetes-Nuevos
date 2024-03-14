import {combineReducers, configureStore} from "@reduxjs/toolkit";
import persistReducers from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
import storage from "redux-persist/lib/storage";
import categoriesSlice from "./categoriesSlice";
import productsSlice from "./products/productsSlice";

const reducers = combineReducers({
   categories: categoriesSlice,
   juguetes: productsSlice,
});

const persistConfig = {
   key: "root",
   storage,
   whiteList: [],
};
const persistedReducer = persistReducers(persistConfig, reducers);

export const store = configureStore({
   reducer: persistedReducer,
});

export const persistor = persistStore(store);
