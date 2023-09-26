import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jumping: false,
  position: {
    height: null,
    left: null,
    top: null,
    width: null,
  },
};

export const marioSlice = createSlice({
  name: "mario",
  initialState,
  reducers: {
    marioJumping: (state, action) => {
      state.jumping = action.payload;
    },
    marioPosition: (state, action) => {
      state.position.height = action.payload.height;
      state.position.left = action.payload.left;
      state.position.top = action.payload.top;
      state.position.width = action.payload.width;
    },
  },
});

export const { marioJumping, marioPosition } = marioSlice.actions;
export default marioSlice.reducer;
