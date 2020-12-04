import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  todoCreateReducer,
  todoListReducer,
  todoDeleteReducer,
  todoGetByIdReducer,
} from "./reducers/todoReducers";

const reducer = combineReducers({
  todoCreateReducer,
  todoListReducer,
  todoDeleteReducer,
  todoGetByIdReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
