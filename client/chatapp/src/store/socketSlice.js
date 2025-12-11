import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  socket: null, // socket.io client instance
  onlineUsers: [], // array of userIds
  connected: false, // is socket connected?
};

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    setSocket: (state, action) => {
      state.socket = action.payload;
    },

    setConnected: (state, action) => {
      state.connected = action.payload;
    },

    updateOnlineUsers: (state, action) => {
      state.onlineUsers = action.payload;
    },
  },
});

export const { setSocket, setConnected, updateOnlineUsers } =
  socketSlice.actions;
export default socketSlice.reducer;
