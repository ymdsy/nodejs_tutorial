import React from "react";
import { TodoItemPresenter } from "./TodoItemPresenter";

export class TodoItemContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeContent = this.onChangeContent.bind(this);
    this.changeTodo = this.changeTodo.bind(this);
  }

  onChangeContent(value) {
    // this.changeTodo().then((todoList) => {
    //   this.setState({
    //     todoList: todoList,
    //   });
    // });
    this.changeTodo("executed=0&content=" + value + "&id=3");
  }

  async changeTodo(data) {
    const url = "http://localhost:8888/todo";
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data,
    });
    if (!response.ok) {
      console.log("Fail to receive responce.", response);
      return {};
    }
    const json = await response.json();
    return json;
  }

  render() {
    return (
      <>
        <TodoItemPresenter
          todo={this.props.todo}
          id={this.props.todo.id}
          content={
            this.props.todo.content !== null ? this.props.todo.content : ""
          }
          checked={this.props.todo.executed !== 0 ? "checked" : ""}
          onChangeContent={this.onChangeContent}
        />
      </>
    );
  }
}
