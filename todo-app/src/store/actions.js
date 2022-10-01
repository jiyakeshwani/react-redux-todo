export function addTodo(todo, isCheck) {
  return {
    type: "add-todo",
    payload: todo,
    checked: isCheck,
  };
}
export function deleteTodo(i) {
  return {
    type: "delete-todo",
    payload: i,
  };
}

export function handleCheckbox(i) {
  return {
    type: "checked",
    payload: i,
  };
}
