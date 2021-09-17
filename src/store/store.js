import { configureStore } from "@reduxjs/toolkit";
import regionsReducer from "./regions/regionsSlice"
import countReducer from "./countElements/countElementsSlice"

export default configureStore({
  reducer: {
      regions: regionsReducer,
      countElements: countReducer
  },
});
