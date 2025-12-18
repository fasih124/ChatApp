import api from "../api/axiosAuth";

export const getMessages = async (conversationId) => {
  const res = await api.get(`/message/${conversationId}`);
  return res.data.messages;
};

export const sendMessage = async ({ conversationId, text }) => {
  const res = await api.post("/message", {
    conversationId,
    text,
  });
  return res.data.message;
};
