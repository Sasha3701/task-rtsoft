import { createSlice } from "@reduxjs/toolkit";
import { filterCountries } from "../../utils";

export const regionsSlice = createSlice({
  name: "regions",
  initialState: {
    value: null,
  },
  reducers: {
    save: (state, action) => {
      state.value = filterCountries(action.payload);
    },
  },
});

export const { save } = regionsSlice.actions;

export default regionsSlice.reducer;
