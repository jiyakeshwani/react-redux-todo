import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../store/actions";
import Todos from "./Todos";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      checked: false,
    };
  }

  handleTodo = (event) => {
    this.setState({
      todo: event.target.value,
    });
  };
  handleChange = ({ target }) => {
    var { name, value } = target;
    this.setState({
      [name]: value,
    });
  };
  handleInput = (event) => {
    event.target.value = "";
  };

  handleSubmit = () => {};
  render() {
    return (
      <>
        <h1>Todos</h1>
        <input
          type="text"
          placeholder="What's need to be done?"
          name="todo"
          value={this.state.todo}
          onChange={this.handleChange}
          onKeyUp={(event) => this.handleTodo(event)}
          class="input"
        />
        <button
          onClick={() =>
            this.props.dispatch(addTodo(this.state.todo, this.state.checked))
          }
          class="button"
        >
          Add{" "}
        </button>
        <Todos {...this.state} />
        {/* {props.todoList
        ? props.todoList.map((todo, index) => {
            return (
              <>
                <div className="todo">
                  <input type="checkbox" value={todo.checked} />
                  <p>{todo}</p>
                </div>
              </>
            );
          })
        : ""} */}
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    todoList: state,
  };
}

export default connect(mapStateToProps)(App);
