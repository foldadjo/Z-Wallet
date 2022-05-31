// const initialState = {
//     isError: false,
//     isLoading: false,
//     data: [],
//     pageInfo: {},
//     msg: "",
//   };
//   const payment = (state = initialState, action) => {
//     switch (action.type) {
//       case "GET_DATA_PRODUCT_ID_PENDING": {
//         return { ...state, isLoading: true, isError: false };
//       }
//       case "GET_DATA_PRODUCT_ID_FULFILLED": {
//         console.log(action.payload);
//         return {
//           ...state,
//           isLoading: false,
//           isError: false,
//           data: action.payload.data.data,
//           pageInfo: action.payload.data.pagination,
//           msg: action.payload.data.msg,
//         };
//       }
//       case "GET_DATA_PRODUCT_ID_REJECTED": {
//         console.log(action.payload);
//         return {
//           ...state,
//           isLoading: false,
//           isError: true,
//           data: [],
//           pageInfo: [],
//           msg: action.payload.data.msg,
//         };
//       }
//       default: {
//         return state;
//       }
//     }
//   };

//   export default product;
