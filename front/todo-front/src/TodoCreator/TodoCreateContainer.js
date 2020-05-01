import React from "react";
import { TodoCreatePresenter } from "./TodoCreatePresenter";

export class TodoCreateContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { content: "" };

    this.onCreateContent = this.onCreateContent.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
  }

  /**
   * コンテンツを作成し、TODOリストを登録する。
   *
   * @param {コンテンツ} content
   */
  onCreateContent() {
    this.createTodo(this.state.content).then((todoList) =>
      this.props.updateTodoList(todoList)
    );

    this.setState({
      content: "",
    });
  }

  onChangeContent(content) {
    this.setState({
      content: content,
    });
  }

  /**
   * TODOリストの登録要求を送信する。
   *
   * @param {コンテンツ} content
   */
  async createTodo(content) {
    // 特殊文字をエスケープ
    content = escape(content);

    const data = "content=" + content;

    const url = "http://localhost:8888/todo";
    const response = await fetch(url, {
      method: "POST",
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
      <TodoCreatePresenter
        content={this.state.content}
        onCreateContent={this.onCreateContent}
        onChangeContent={this.onChangeContent}
      />
    );
  }
}