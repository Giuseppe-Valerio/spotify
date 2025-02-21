import { createSlice } from "@reduxjs/toolkit";

const PlayerSlice = createSlice({
  name: "player",
  initialState: {
    currentTrack: null,
  },
  reducers: {
    setCurrentTrack: (state, action) => {
      state.currentTrack = action.payload;
    },
  },
});

export const { setCurrentTrack } = PlayerSlice.actions;
export default PlayerSlice.reducer;
