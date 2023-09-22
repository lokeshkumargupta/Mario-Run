import { configureStore } from "@reduxjs/toolkit";
import EngineReducer from "./engineSlice";
import MarioReducer from "./marioSlice";
import ObstacleReducer from "./obstacleSlice";

export const store = configureStore({
  reducer: {
    engine: EngineReducer,
    mario: MarioReducer,
    obstacle: ObstacleReducer,
  },
});
