import React from "react";
// import { TodoListContainer } from "./TodoList/TodoListContainer.js";
import { TodoListPresenter } from "./TodoList/TodoListPresenter.js";

class App extends React.Component {
  constructor(props) {
    // extendsしたコンポーネントのコンストラクタを実行する（propsを渡して）
    super(props);
    this.state = {
      todoList: {},
    };
  }

  componentDidMount() {
    this.getAllTodo().then((todoList) => {
      this.setState({
        todoList: todoList,
      });
    });
  }

  async getAllTodo() {
    const url = "http://localhost:8888/todo";
    const response = await fetch(url);
    if (!response.ok) {
      return console.log("Fail to receive responce.");
    }
    const json = await response.json();
    return json;
  }

  render() {
    return (
      <div className="App">
        {this.state.todoList.length > 0 ? (
          <TodoListPresenter todoList={this.state.todoList} />
        ) : (
          <div>Loding list...</div>
        )}
      </div>
    );
  }
}

export default App;
