import axios from "axios";

export const getDataCheckout = (userId, page, limit) => {
  return {
    type: "GET_DATA_CHECKOUT_HISTORY",
    payload: axios.get(
      `checkout?searchUserId=${userId}&statusCart=notActive&searchProductId=&page=${page}&limit=${limit}`
    ),
  };
};
