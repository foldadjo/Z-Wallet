import axios from "../../utils/axios";

export const loginRedux = (form) => {
  return {
    type: "LOGIN",
    payload: axios.post(`/auth/login`, form),
  };
};

export const registerRedux = (form) => {
  return {
    type: "REGISTER",
    payload: axios.post(`/auth/register`, form),
  };
};

export const forgotPasswordRedux = (form) => {
  return {
    type: "FORGOT_PASSWORD",
    payload: axios.post(`/auth/forgot-password`, form),
  };
};

export const resetPasswordRedux = (form) => {
  return {
    type: "FORGOT_PASSWORD",
    payload: axios.patch(`/auth/reset-password`, form),
  };
};

export const logoutRedux = () => {
  return {
    type: "LOGOUT",
    payload: axios.post("/auth/logout"),
  };
};
