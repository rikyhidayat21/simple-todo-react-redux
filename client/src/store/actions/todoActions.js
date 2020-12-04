import axios from "../../config/axios";
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

export const listTodo = () => async (dispatch) => {
  console.log("enter list todo");
  try {
    dispatch({
      type: TODO_LIST_REQUEST,
    });

    const { data } = await axios.get("/todos");

    dispatch({
      type: TODO_LIST_SUCCESS,
      payload: data,
    });

    console.log(data, "<=== list todo");
  } catch (error) {
    console.log(error, "<=== error list todo");
    dispatch({
      type: TODO_LIST_FAIL,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : ["error unknown"],
    });
  }
};

export const createTodo = (formData) => async (dispatch) => {
  console.log("masuk add todo di action");
  console.log(formData, "<=== form data di action");
  try {
    dispatch({
      type: TODO_CREATE_REQUEST,
    });
    const { data } = await axios.post("/todos", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch({
      type: TODO_CREATE_SUCCESS,
      payload: data,
    });
    console.log(data, "<=== data create todo");
  } catch (error) {
    console.log(error, "<==== error create todo at action");
    dispatch({
      type: TODO_CREATE_FAIL,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : ["error unknown"],
    });
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  console.log("masuk delete todo action");
  console.log(id, "<=== id todo at action");
  try {
    dispatch({
      type: TODO_DELETE_REQUEST,
    });

    const { data } = await axios.delete(`/todos/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(data, "<== data delete before dispatch success");

    dispatch({
      type: TODO_DELETE_SUCCESS,
    });

    dispatch(listTodo());
    console.log(data, "<=== deleted data todo");
  } catch (error) {
    console.log(error, "<=== error delete");
    dispatch({
      type: TODO_DELETE_FAIL,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : ["error unknown"],
    });
  }
};

export const getByIdTodo = (id) => async (dispatch) => {
  console.log("enter get by id at action");
  try {
    dispatch({
      type: TODO_GETBYID_REQUEST,
    });

    const { data } = await axios.get(`/todos/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch({
      type: TODO_GETBYID_SUCCESS,
      payload: data,
    });

    console.log(data, "<=== get by id contact at action");
  } catch (error) {
    console.log(error, "<=== error get by id contact");
    dispatch({
      type: TODO_GETBYID_FAIL,
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : ["error unknown"],
    });
  }
};
