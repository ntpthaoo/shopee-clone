import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userLoginReducer, userRegisterReducer } from "../reducers/userReducer";
import { cartReducer, removeCartReducer } from "../reducers/cartReducer";

const reducers = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  cart: cartReducer,
  removeCart: removeCartReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo")!)
  : null;

const cartInfoFromStorage = localStorage.getItem("cartInfo")
  ? JSON.parse(localStorage.getItem("cartInfo")!)
  : null;

const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage,
  },
  cart: {
    cartInfo: cartInfoFromStorage,
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
