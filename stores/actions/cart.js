import axios from "axios";

export const getCheckoutById = (page, limit, searchUserId) => {
  return {
    type: "GET_DATA_CART",
    payload: axios.get(
      `checkout?page=${page}&limit=${limit}&searchUserId=${searchUserId}&statusCart=active`
    ),
  };
};

export const updateCheckout = (id, form) => {
  return {
    type: "UPDATE_DATA_CART",
    payload: axios.patch(`checkout/${id}`, form),
  };
};

export const deleteCheckout = (id) => {
  return {
    type: "DELETE_DATA_CART",
    payload: axios.delete(`checkout/${id}`),
  };
};

export const createTransaction = (dataTransaction) => {
  return {
    type: "CREATE_TRANSACTION",
    payload: axios.post(`transaction`, dataTransaction),
  };
};
