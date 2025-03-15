import { configureStore } from "@reduxjs/toolkit";
import card from "./card";
import likeReducer from "./like";

export const store = configureStore({
  reducer: {
    cart: card,
    like:likeReducer
  },
});
