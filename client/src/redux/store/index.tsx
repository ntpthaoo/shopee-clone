import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  userLoginReducer,
  userRegisterReducer,
  userAddressReducer,
} from "../reducers/userReducer";
import {
  brandReducer,
  detailProductReducer,
  listFilterProductReducer,
  listProductReducer,
  listProTypeReducer,
} from "../reducers/productReducer";
import {
  createCartReducer,
  getCartReducer,
  removeCartReducer,
  updateQtyCartReducer,
} from "../reducers/cartReducer";
import { orderItemsReducer } from "../reducers/orderReducer";
import { listCategoryReducer } from "../reducers/categoryReducer";

const reducers = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userAddress: userAddressReducer,
  createCart: createCartReducer,
  cart: getCartReducer,
  removeCart: removeCartReducer,
  updateQtyCart: updateQtyCartReducer,
  brand: brandReducer,
  orderItems: orderItemsReducer,
  listProduct: listProductReducer,
  detailProduct: detailProductReducer,
  listCategory: listCategoryReducer,
  listProType: listProTypeReducer,
  listFilterProduct: listFilterProductReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo")!)
  : null;

const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage,
  },
} as {};

const middleware = [thunk];

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
