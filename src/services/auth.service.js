import axios from "axios";

export const login = async (credentials) => {
  const response = await axios.post("/api/authentication/sign-in", credentials);
  const { token } = response.data;
  localStorage.setItem("jwt", token);
  return token;
};

export const logout = () => {
  localStorage.removeItem("jwt");
};
