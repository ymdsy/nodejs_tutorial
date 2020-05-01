import React from "react";
import { TodoListPresenter } from "./TodoListPresenter";

export class TodoListContainer extends React.Component {
  constructor(props) {
    //     //     // extendsしたコンポーネントのコンストラクタを実行する（propsを渡して）
    super(props);
    //     //     // this.state = {
    //     //     // };
  }

  render() {
    return (
      <>
        TodoListContainer
        {this.props.todoList.map((todo) => todo.content)}
        <TodoListPresenter />
      </>
    );
  }
}
