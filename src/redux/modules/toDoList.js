// src/modules/counter.js

//Action value add,delete, toggle, getTodoById

//Action Creator

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
// const GET_TODO_BY_ID = "GET_TODO_BY_ID";

export const addToDo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};
export const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
export const toggleToDo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};
// export const getToDoById = (id) => {
//   return {
//     type: GET_TODO_BY_ID,
//     payload: id,
//   };
// };

// Initial State
const initialState = [];

//Reducer
const todolist = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    // console.log(state);
    case "DELETE_TODO":
      return state.filter((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        } else {
          return;
        }
      });
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    // case "GET_TODO_BY_ID":
    //   return {
    //     ...state,
    //     todo: state.find((todo) => {
    //       return todo.id === action.payload;
    //     }),
    //   };
    default:
      return state;
  }
};
//export default redecer
export default todolist;
