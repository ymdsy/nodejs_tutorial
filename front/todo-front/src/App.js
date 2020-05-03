import React from "react";
import { TodoCreateContainer } from "./TodoCreator/TodoCreateContainer.js";
import { TodoListPresenter } from "./TodoList/TodoListPresenter.js";

class App extends React.Component {
  constructor(props) {
    // extendsしたコンポーネントのコンストラクタを実行する（propsを渡して）
    super(props);
    this.state = {
      todoList: [],
    };

    this.updateTodoList = this.updateTodoList.bind(this);
  }

  /**
   * 各コンポーネントがマウントされたら、
   * TODOを取得して更新する。
   */
  componentDidMount() {
    this.fetchAllTodo().then((todoList) => this.updateTodoList(todoList));
  }

  /**
   * stateを引数のJSON形式のTODOリストで更新する。
   *
   * @param {TODOリスト} todoList
   */
  updateTodoList(todoList) {
    if (typeof todoList === "undefined") {
      return;
    }

    this.setState({
      todoList: todoList,
    });
  }

  /**
   * TODOリストをサーバから取得する。
   */
  async fetchAllTodo() {
    const url = "http://localhost:8888/todo";
    const response = await fetch(url);
    if (!response.ok) {
      console.log("Fail to receive responce.");
      return;
    }
    const json = await response.json();
    return json;
  }

  render() {
    return (
      <div className="App">
        {this.state.todoList.length > 0 ? (
          <TodoListPresenter
            todoList={this.state.todoList}
            updateTodoList={this.updateTodoList}
          />
        ) : (
          <div>Loding list...</div>
        )}
        <TodoCreateContainer updateTodoList={this.updateTodoList} />
      </div>
    );
  }
}

export default App;
