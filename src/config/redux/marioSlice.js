import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jumping: false,
  height: null,
  left: null,
  top: null,
  width: null
};

export const marioSlice = createSlice({
  name: "mario",
  initialState,
  reducers: {
    marioJumping: (state, action) => {
      state.jumping = action.payload;
    },
    marioHeight: (state, action) => {
      state.height = action.payload;
    },
    marioLeft: (state, action) => {
      state.left = action.payload;
    },
    marioTop: (state, action) => {
      state.top = action.payload;
    },
    marioWidth: (state, action) => {
      state.width = action.payload;
    }
  },
});

export const {
  marioJumping,
  marioHeight,
  marioLeft,
  marioTop,
  marioWidth
} = marioSlice.actions;
export default marioSlice.reducer;
