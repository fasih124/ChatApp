import AuthApi from "../api/axiosAuth";

export const registerUser = async (formData) => {
  const res = await AuthApi.post("/auth/register", formData);
  return res.data;
};

export const loginUser = async (data) => {
  const res = await AuthApi.post("/auth/login", data);
  return res.data; // { token, user }
};
