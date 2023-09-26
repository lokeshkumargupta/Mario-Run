import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  obstacle1: {
    height: null,
    left: null,
    top: null,
    width: null,
  },
  obstacle2: {
    height: null,
    left: null,
    top: null,
    width: null,
  },
};

export const obstacleSlice = createSlice({
  name: "obstacle",
  initialState,
  reducers: {
    obstacle1: (state, action) => {
      state.obstacle1.height = action.payload.height;
      state.obstacle1.left = action.payload.left;
      state.obstacle1.top = action.payload.top;
      state.obstacle1.width = action.payload.width;
    },
    obstacle2: (state, action) => {
      state.obstacle2.height = action.payload.height;
      state.obstacle2.left = action.payload.left;
      state.obstacle2.top = action.payload.top;
      state.obstacle2.width = action.payload.width;
    },
  },
});

export const { obstacle1, obstacle2 } = obstacleSlice.actions;
export default obstacleSlice.reducer;
