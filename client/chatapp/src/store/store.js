import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import socketReducer from "./socketSlice";
import chatReducer from "./chatSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    socket: socketReducer,
    chat: chatReducer,
  },
});
