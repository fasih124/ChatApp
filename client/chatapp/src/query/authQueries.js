import api from "../api/axios";

export const registerUser = async (formData) => {
  const res = await api.post("/auth/register", formData);
  return res.data;
};

export const loginUser = async (data) => {
  const res = await api.post("/auth/login", data);
  return res.data; // { token, user }
};
