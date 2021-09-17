import { createSlice } from "@reduxjs/toolkit";

export const countElementsSlice = createSlice({
  name: "countElements",
  initialState: {
    value: "pag",
  },
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { change } = countElementsSlice.actions;

export default countElementsSlice.reducer;
