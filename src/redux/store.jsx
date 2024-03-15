import {combineReducers, configureStore} from "@reduxjs/toolkit";
import persistReducers from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
import storage from "redux-persist/lib/storage";
import categoriesSlice from "./categoriesSlice";
import productsSlice from "./products/productsSlice";

//Cart
import cartSlice from "../redux/Cart/cartSlice";

const reducers = combineReducers({
   categories: categoriesSlice,
   juguetes: productsSlice,
   cart: cartSlice,
});

const persistConfig = {
   key: "root",
   storage,
   whiteList: ["cart"],
};
const persistedReducer = persistReducers(persistConfig, reducers);

export const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({serializableCheck: false}),
});

export const persistor = persistStore(store);
