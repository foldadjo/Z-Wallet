const initialState = {
  isError: false,
  isLoading: false,
  data: [],
  pageInfo: {},
  msg: "",
};
const checkout = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_CHECKOUT_PENDING": {
      return { ...state, isLoading: true, isError: false };
    }

    case "GET_DATA_CHECKOUT_FULFILLED": {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }
    case "GET_DATA_CHECKOUT_REJECTED": {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
        pageInfo: [],
        msg: action.payload.data.msg,
      };
    }
    case "POST_CHECKOUT_PENDING": {
      return { ...state, isLoading: true, isError: false };
    }
    case "POST_CHECKOUT_FULFILLED": {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }
    case "POST_CHECKOUT_REJECTED": {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.data.msg,
      };
    }
    case "UPDATE_CHECKOUT_PENDING": {
      return { ...state, isLoading: true, isError: false };
    }
    case "UPDATE_CHECKOUT_FULFILLED": {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }
    case "UPDATE_CHECKOUT_REJECTED": {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.data.msg,
      };
    }
    default: {
      return state;
    }
  }
};

export default checkout;
