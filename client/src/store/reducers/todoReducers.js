import {
  TODO_CREATE_REQUEST,
  TODO_CREATE_SUCCESS,
  TODO_CREATE_FAIL,
  TODO_LIST_REQUEST,
  TODO_LIST_SUCCESS,
  TODO_LIST_FAIL,
  TODO_DELETE_REQUEST,
  TODO_DELETE_SUCCESS,
  TODO_DELETE_FAIL,
  TODO_EDIT_REQUEST,
  TODO_EDIT_SUCCESS,
  TODO_EDIT_FAIL,
  TODO_EDIT_RESET,
  TODO_GETBYID_REQUEST,
  TODO_GETBYID_SUCCESS,
  TODO_GETBYID_FAIL,
} from "../constants/todoConstants";

export const todoCreateReducer = (
  state = { loading: false, success: false, todo: {}, errors: [] },
  action
) => {
  switch (action.type) {
    case TODO_CREATE_REQUEST:
      return { loading: true };
    case TODO_CREATE_SUCCESS:
      return { loading: false, success: true, todo: action.payload };
    case TODO_CREATE_FAIL:
      return { loading: false, todo: {}, errors: action.payload };
    default:
      return state;
  }
};

export const todoListReducer = (
  state = { loading: false, todos: [], errors: [] },
  action
) => {
  switch (action.type) {
    case TODO_LIST_REQUEST:
      return { loading: true };
    case TODO_LIST_SUCCESS:
      return { loading: false, todos: action.payload };
    case TODO_LIST_FAIL:
      return { loading: false, todos: [], errors: action.payload };
    default:
      return state;
  }
};

export const todoDeleteReducer = (
  state = { loading: false, todo: {}, errors: [] },
  action
) => {
  switch (action.type) {
    case TODO_DELETE_REQUEST:
      return { loading: true };
    case TODO_DELETE_SUCCESS:
      return { loading: false, message: "delete todo success" };
    case TODO_DELETE_FAIL:
      return {
        loading: false,
        message: "delete todo failed",
        errors: action.payload,
      };
    default:
      return state;
  }
};
