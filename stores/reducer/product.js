const initialState = {
  isError: false,
  isLoading: false,
  data: [],
  pageInfo: {},
  msg: "",
};
const product = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_PRODUCT_ID_PENDING": {
      return { ...state, isLoading: true, isError: false };
    }
    case "GET_DATA_PRODUCT_ID_FULFILLED": {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }
    case "GET_DATA_PRODUCT_ID_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
        pageInfo: {},
        msg: action.payload.response.data.msg,
      };
    }
    case "GET_DATA_PRODUCT_PENDING": {
      return {
        ...state,
        isLoading: true,
      };
    }

    case "GET_DATA_PRODUCT_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.data,
        pageInfo: action.payload.data.pagination,
        msg: action.payload.data.msg,
      };
    }

    case "GET_DATA_PRODUCT_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
        pageInfo: {},
        msg: action.payload.response.data.msg,
      };
    }
    case "POST_PRODUCT_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case "POST_PRODUCT_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };
    }
    case "POST_PRODUCT_REJECTED": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        data: [],
        msg: action.payload,
      };
    }
    case "UPDATE_PRODUCT_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case "UPDATE_PRODUCT_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };
    }
    case "UPDATE_PRODUCT_REJECTED": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: action.payload.response.data.msg,
      };
    }
    default: {
      return state;
    }
  }
};

export default product;
