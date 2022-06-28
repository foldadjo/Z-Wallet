const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  msg: "",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_USER_PENDING":
      return {
        ...state,
        isError: false,
        isLoading: true,
      };

    case "GET_ALL_USER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };

    case "GET_ALL_USER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
        pageInfo: {},
        msg: action.payload.response.data,
      };

    case "GET_USER_BY_ID_PENDING":
      return {
        ...state,
        isError: false,
        isLoading: true,
      };

    case "GET_USER_BY_ID_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };

    case "GET_USER_BY_ID_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
        pageInfo: {},
        msg: action.payload.response.data,
      };

    case "GET_PIN_PENDING":
      return {
        ...state,
        isError: false,
        isLoading: true,
      };

    case "GET_PIN_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };

    case "GET_PIN_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
        pageInfo: {},
        msg: action.payload.response.data,
      };

    case "UPDATE_PROFILE_USER_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case "UPDATE_PROFILE_USER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };

    case "UPDATE_PROFILE_USER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data,
      };

    case "UPDATE_IMAGE_USER_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case "UPDATE_IMAGE_USER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };

    case "UPDATE_IMAGE_USER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data,
      };

    case "UPDATE_PIN_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case "UPDATE_PIN_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };

    case "UPDATE_PIN_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data,
      };

    case "UPDATE_PASSWORD_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case "UPDATE_PASSWORD_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };

    case "UPDATE_PASSWORD_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data,
      };

    case "DELETE_IMAGE_PENDING":
      return {
        ...state,
        isError: false,
        isLoading: true,
      };

    case "DELETE_IMAGE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };

    case "DELETE_IMAGE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data,
      };

    default:
      return state;
  }
};

export default user;
