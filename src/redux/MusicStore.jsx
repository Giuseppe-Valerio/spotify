import { configureStore } from "@reduxjs/toolkit";
import Search from "./Search";
import PlayerSlice from "./PlayerSlice";

const MusicStore = configureStore({
  reducer: {
    search: Search,
    player: PlayerSlice,
  },
});

export default MusicStore;
