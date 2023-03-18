import { link } from "fs";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "store";

// Define a type for the slice state
interface PlayingState {
  song: Array<{
    album: string;
    name: string;
    url: string;
    author: string;
    views: number;
    links: { images: Array<{ url: string }> };
  }>;
}

// Define the initial state using that type
const initialState: PlayingState = {
  song: [],
};

export const playingSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setPlayingSong: (state, action) => {
      state.song = action.payload;
    },
  },
});

export const { setPlayingSong } = playingSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPlaying = (state: RootState) => state.playing.song;

export default playingSlice.reducer;
