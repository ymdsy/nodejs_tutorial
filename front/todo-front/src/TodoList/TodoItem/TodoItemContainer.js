import React from "react";
import { TodoItemPresenter } from "./TodoItemPresenter";

export class TodoItemContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeContent = this.onChangeContent.bind(this);
    this.onChangeCheck = this.onChangeCheck.bind(this);
    this.changeTodo = this.changeTodo.bind(this);
  }

  onChangeContent(id, value, checked) {
    console.log(id, value, checked);
    this.changeTodo("executed=" + checked + "&content=" + value + "&id=" + id);
  }

  onChangeCheck(checked) {
    return checked === "checked" ? 0 : 1;
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
          onChangeCheck={this.onChangeCheck}
        />
      </>
    );
  }
}
