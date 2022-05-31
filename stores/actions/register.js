import axios from "axios";

export const register = (data) => {
  return {
    type: "REGISTER",
    payload: axios.post(`/auth/register/`, data),
  };
};
