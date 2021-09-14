import { configureStore } from "@reduxjs/toolkit";
import regionsReducer from "./regions/regionsSlice"

export default configureStore({
  reducer: {
      regions: regionsReducer
  },
});
