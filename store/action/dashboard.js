import axios from "../../utils/axios";

export const getDashboard = (id) => {
  return {
    type: "GET_DASHBOARD",
    payload: axios.get(`/dashboard/${id}`),
  };
};

export const historyTransaction = (page, limit, filter) => {
  return {
    type: "GET_HISTORY_TRANSACTION",
    payload: axios.get(
      `/transaction/history?page=${page}&limit=${limit}&filter=${filter}`
    ),
  };
};

export const getTransaction = (bookingId) => {
  return {
    type: "GET_TRANSACTION",
    payload: axios.get(`/export/transaction/${bookingId}`),
  };
};

export const transferBalance = (form) => {
  return {
    type: "TRANSFER_BALANCE",
    payload: axios.post(`/transaction/transfer`, form),
  };
};

export const topUp = (form) => {
  return {
    type: "TOPUP",
    payload: axios.post(`/transaction/top-up`, form),
  };
};
