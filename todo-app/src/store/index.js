import { createStore } from "redux";

function reducer(state = [], action) {
  switch (action.type) {
    case "add-todo":
      return [...state, { todo: action.payload, checked: action.checked }];
    case "checked":
      state[action.payload].checked = !state[action.payload].checked;
      return [...state];
    case "delete-todo":
      state.splice(action.payload, 1);
      return [...state];
    default:
      return state;
  }
}

var store = createStore(reducer);
console.log(store);
export default store;
