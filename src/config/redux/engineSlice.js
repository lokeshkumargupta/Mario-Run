import { createSlice } from "@reduxjs/toolkit";

export const engineSlice = createSlice({
  name: "engine",
  initialState: {
    play: false,
    die: false,
    speed: 0,
    score: 0,
    lastScore: 0,
    loadingScreen: true,
  },
  reducers: {
    setReady: (state, action) => {
      state.play = action.payload;
    },
    setDie: (state, action) => {
      state.die = action.payload;
    },
    setSpeed: (state, action) => {
      state.speed += action.payload;
    },
    setScore: (state, action) => {
      state.score = action.payload;
    },
    setLastScore: (state, action) => {
      state.lastScore = action.payload;
    },
    setLoadingScreen: (state, action) => {
      state.loadingScreen = action.payload;
    },
  },
});

export const {
  setReady,
  setDie,
  setSpeed,
  setScore,
  setLastScore,
  setLoadingScreen,
} = engineSlice.actions;
export default engineSlice.reducer;
