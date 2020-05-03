import React from "react";
import { TodoItemPresenter } from "./TodoItemPresenter";

export class TodoItemContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeContent = this.onChangeContent.bind(this);
    this.onChangeCheck = this.onChangeCheck.bind(this);
    this.changeTodo = this.changeTodo.bind(this);
    this.onDeleteContent = this.onDeleteContent.bind(this);
  }

  /**
   * フォームから変更を受け取り、
   * TODOリストを変更するリクエストをサーバに送って画面を更新する。
   *
   * @param {id} id
   * @param {コンテンツ} content
   * @param {チェックフラグ} checked
   */
  onChangeContent(id, content, checked) {
    console.log(content);

    this.changeTodo(id, content, checked).then((todoList) =>
      this.props.updateTodoList(todoList)
    );
  }

  /**
   * formの値から、チェックフラグを確認する。
   *
   * @param {チェックフラグ}} checked
   */
  onChangeCheck(id, content, checked) {
    this.changeTodo(id, content, checked === 1 ? 0 : 1).then((todoList) =>
      this.props.updateTodoList(todoList)
    );
  }

  /**
   * 引数から受け取ったIDのTODOを削除する。
   *
   * @param {id} id
   */
  onDeleteContent(id) {
    this.deleteTodo(id).then((todoList) => this.props.updateTodoList(todoList));
  }

  /**
   * TODOリストの更新要求を送信する。
   *
   * @param {id} id
   * @param {コンテンツ} content
   * @param {チェックフラグ} checked
   */
  async changeTodo(id, content, checked) {
    if (!this.isValid(id, checked)) {
      return;
    }

    const formData = new FormData();
    formData.append("id", id);
    formData.append("content", content);
    formData.append("executed", checked);
    const formDataEncoded = new URLSearchParams(formData);

    const url = "http://localhost:8888/todo";
    const response = await fetch(url, {
      method: "PUT",
      body: formDataEncoded,
    });
    if (!response.ok) {
      console.log("Fail to receive responce.", response);
      return {};
    }
    const json = await response.json();
    return json;
  }

  /**
   * TODOリストの削除要求を送信する。
   *
   * @param {削除したいTODOのid}} id
   */
  async deleteTodo(id) {
    if (!this.isValid(id, 0)) {
      return;
    }

    const formData = new FormData();
    formData.append("id", id);
    const formDataEncoded = new URLSearchParams(formData);

    const url = "http://localhost:8888/todo";
    const response = await fetch(url, {
      method: "DELETE",
      body: formDataEncoded,
    });
    if (!response.ok) {
      console.log("Fail to receive responce.", response);
      return {};
    }
    const json = await response.json();
    return json;
  }

  /**
   * 正しい値であることを確認する。
   * @param {id} id
   * @param {チェックフラグ} checked
   */
  isValid(id, checked) {
    if (!Number.isInteger(id)) {
      console.log("Illeagal id was expected.");
      return false;
    }

    if (checked !== 0 && checked !== 1) {
      console.log("Illeagal checked was expected. checked=[" + checked + "]");
      return false;
    }

    return true;
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
          checked={this.props.todo.executed}
          onChangeContent={this.onChangeContent}
          onChangeCheck={this.onChangeCheck}
          onDeleteContent={this.onDeleteContent}
        />
      </>
    );
  }
}
