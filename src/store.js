import { configureStore } from "@reduxjs/toolkit";
import gridReducer from "./slices/graph";

export const store = configureStore({
  reducer: {
    grid: gridReducer,
  },
});
