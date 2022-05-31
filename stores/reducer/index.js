import { combineReducers } from "redux";
import product from "./product";
import register from "./register";
import cart from "./cart";
import user from "./user";
import checkout from "./checkout";
import transaction from "./transaction";
import history from "./history";

export default combineReducers({
  product,
  register,
  cart,
  user,
  checkout,
  transaction,
  history,
});
