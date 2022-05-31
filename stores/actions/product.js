import axios from "axios";

export const getDataProductId = (id) => {
  return {
    type: "GET_DATA_PRODUCT_ID",
    payload: axios.get(`product/${id}`),
  };
};
export const getDataProduct = (page, limit, searchType, searchName, sort) => {
  return {
    type: "GET_DATA_PRODUCT",
    payload: axios.get(
      `/product?page=${page}&limit=${limit}&searchType=${searchType}&searchName=${searchName}&sort=${sort}`
    ),
  };
};

export const postProduct = (form) => {
  return {
    type: "POST_PRODUCT",
    payload: axios.post("product/", form),
  };
};

export const updateProduct = (id, form) => {
  return {
    type: "UPDATE_PRODUCT",
    payload: axios.patch(`product/${id}`, form),
  };
};

export const deleteProduct = (id) => {
  return {
    type: "DELETE_PRODUCT",
    payload: axios.delete(`product/${id}`),
  };
};
