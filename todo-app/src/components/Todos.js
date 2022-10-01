import React from "react";
import { connect } from "react-redux";
import { handleCheckbox, deleteTodo } from "../store/actions";

function Todos(props) {
  return (
    <>
      {props.todoList.map((todo, i) => {
        return (
          <>
            <input
              type="checkbox"
              onClick={() => props.dispatch(handleCheckbox(i))}
              value={todo.checked}
            />
            <p>{todo.todo}</p>
            <button onClick={() => props.dispatch(deleteTodo(i))}>
              Delete
            </button>
          </>
        );
      })}
    </>
  );
}

function mapStateToProps(state) {
  return {
    todoList: state,
  };
}

export default connect(mapStateToProps)(Todos);
