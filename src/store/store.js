import { configureStore } from "@reduxjs/toolkit";
import card from "./card";

export const store = configureStore({
  reducer: {
    cart: card,
  },
});
