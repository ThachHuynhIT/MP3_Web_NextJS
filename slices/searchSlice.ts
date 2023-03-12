import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "store";

// Define a type for the slice state
interface SearchState {
  value: string;
}

// Define the initial state using that type
const initialState: SearchState = {
  value: "",
};

export const searchSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setKeySearch: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setKeySearch } = searchSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSearch = (state: RootState) => state.search.value;

export default searchSlice.reducer;
