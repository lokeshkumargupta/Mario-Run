import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  obs1Height: null,
  obs1Left: null,
  obs1Top: null,
  obs1Width: null,
  obs2Height: null,
  obs2Left: null,
  obs2Top: null,
  obs2Width: null
};

export const obstacleSlice = createSlice({
  name: "obstacle",
  initialState,
  reducers: {
    obstacle1Height: (state, action) => {
      state.obs1Height = action.payload;
    },
    obstacle1Left: (state, action) => {
      state.obs1Left = action.payload;
    },
    obstacle1Top: (state, action) => {
      state.obs1Top = action.payload;
    },
    obstacle1Width: (state, action) => {
      state.obs1Width = action.payload;
    },
    obstacle2Height: (state, action) => {
      state.obs2Height = action.payload;
    },
    obstacle2Left: (state, action) => {
      state.obs2Left = action.payload;
    },
    obstacle2Top: (state, action) => {
      state.obs2Top = action.payload;
    },
    obstacle2Width: (state, action) => {
      state.obs2Width = action.payload;
    }
  },
});

export const {
  obstacle1Height,
  obstacle1Left,
  obstacle1Top,
  obstacle1Width,
  obstacle2Height,
  obstacle2Left,
  obstacle2Top,
  obstacle2Width
} = obstacleSlice.actions;
export default obstacleSlice.reducer;
