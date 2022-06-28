import axios from "../../utils/axios";

export const getAllUser = (page, limit, search, sort) => {
  return {
    type: "GET_ALL_USER",
    payload: axios.get(
      `/user?page=${page}&limit=${limit}&search=${search}&sort=${sort}`
    ),
  };
};

export const getUserById = (id) => {
  return {
    type: "GET_USER_BY_ID",
    payload: axios.get(`/user/${id}`),
  };
};

export const checkPin = (pin) => {
  return {
    type: "GET_PIN",
    payload: axios.get(`/user/pin?pin=${pin}`),
  };
};

export const updateProfileUser = (id, form) => {
  return {
    type: "UPDATE_PROFILE_USER",
    payload: axios.patch(`/user/profile/${id}`, form),
  };
};

export const updateImageUser = (id, form) => {
  return {
    type: "UPDATE_IMAGE_USER",
    payload: axios.patch(`/user/image/${id}`, form),
  };
};

export const updatePin = (id, form) => {
  return {
    type: "UPDATE_PIN",
    payload: axios.patch(`/user/pin/${id}`, form),
  };
};

export const updatePassword = (id, form) => {
  return {
    type: "UPDATE_PASSWORD",
    payload: axios.patch(`/user/password/${id}`, form),
  };
};

export const deleteImage = (id) => {
  return {
    type: "DELETE_IMAGE",
    payload: axios.delete(`/user/image/${id}`),
  };
};
