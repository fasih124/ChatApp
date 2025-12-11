import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersList: [], // all users from backend
  conversations: [], // all chat rooms
  selectedConversation: null, // current chat room
  messages: [], // messages of selected chat
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setUsersList: (state, action) => {
      state.usersList = action.payload;
    },

    setConversations: (state, action) => {
      state.conversations = action.payload;
    },

    selectConversation: (state, action) => {
      state.selectedConversation = action.payload;
      state.messages = []; // clear old messages
    },

    setMessages: (state, action) => {
      state.messages = action.payload;
    },

    addMessage: (state, action) => {
      state.messages.push(action.payload); // new message
    },
  },
});

export const {
  setUsersList,
  setConversations,
  selectConversation,
  setMessages,
  addMessage,
} = chatSlice.actions;

export default chatSlice.reducer;
