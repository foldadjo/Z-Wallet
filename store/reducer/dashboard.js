const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  msg: "",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DASHBOARD_PENDING":
      return {
        ...state,
        isError: false,
        isLoading: true,
      };

    case "GET_DASHBOARD_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };

    case "GET_DASHBOARD_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
        pageInfo: {},
        msg: action.payload.response.data,
      };

    case "GET_HISTORY_TRANSACTION_PENDING":
      return {
        ...state,
        isError: false,
        isLoading: true,
      };

    case "GET_HISTORY_TRANSACTION_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };

    case "GET_HISTORY_TRANSACTION_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
        pageInfo: {},
        msg: action.payload.response.data,
      };

    case "GET_TRANSACTION_PENDING":
      return {
        ...state,
        isError: false,
        isLoading: true,
      };

    case "GET_TRANSACTION_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };

    case "GET_TRANSACTION_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
        pageInfo: {},
        msg: action.payload.response.data,
      };

    case "TRANSFER_BALANCE_PENDING":
      return {
        ...state,
        isError: false,
        isLoading: true,
      };

    case "TRANSFER_BALANCE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: { ...action.payload.data.data },
        msg: action.payload.data.msg,
      };

    case "TRANSFER_BALANCE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg,
      };

    case "TOPUP_PENDING":
      return {
        ...state,
        isError: false,
        isLoading: true,
      };

    case "TOPUP_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: { ...action.payload.data.data },
        msg: action.payload.data.msg,
      };

    case "TOPUP_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg,
      };

    default:
      return state;
  }
};

export default user;
