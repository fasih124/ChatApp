import AuthApi from "../api/axiosAuth";

export const getMe = async () => {
  const res = await AuthApi.get("/user/me");
  return res.data;
};

export const getAllUsers = async () => {
  const res = await AuthApi.get("/user");
  return res.data;
};
