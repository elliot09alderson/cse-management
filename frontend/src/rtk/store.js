import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice.js";
import authSlice from "./slices/authSlice.js";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
  },
});

export default store;
