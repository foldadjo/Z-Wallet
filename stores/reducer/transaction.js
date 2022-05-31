const initialState = {
  isError: false,
  isLoading: false,
  data: [],
  pageInfo: {},
  msg: "",
};

const transaction = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_PENDING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "GET_ALL_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.data,
        pageInfo: action.payload.data.pagination,
        msg: action.payload.data.msg,
      };
    }
    case "GET_ALL_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
        pageInfo: {},
        msg: action.payload.response.data.msg,
      };
    }
    case "DELIVERY_PENDING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "DELIVERY_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.data,
        pageInfo: action.payload.data.pagination,
        msg: action.payload.data.msg,
      };
    }
    case "DELIVERY_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
        pageInfo: {},
        msg: action.payload.response.data.msg,
      };
    }
    case "CREATE_TRANSACTION_PENDING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "CREATE_TRANSACTION_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.data,
        pageInfo: action.payload.data.pagination,
        msg: action.payload.data.msg,
      };
    }
    case "CREATE_TRANSACTION_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
        pageInfo: {},
        msg: action.payload.response.data.msg,
      };
    }
    default: {
      return state;
    }
  }
};

export default transaction;
