const initialState = {
  isError: false,
  isLoading: false,
  data: [],
  pageInfo: {},
  msg: "",
};

const register = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_PENDING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "REGISTER_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };
    }
    case "REGISTER_REJECTED": {
      return {
        ...state,
        isError: true,
        isLoading: false,
        data: [],
        msg: action.payload.response.data.msg,
      };
    }
    default: {
      return state;
    }
  }
};

export default register;
