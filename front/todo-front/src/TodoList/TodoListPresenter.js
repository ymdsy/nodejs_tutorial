import React from "react";
import { TodoItemContainer } from "./TodoItem/TodoItemContainer";

export function TodoListPresenter(props) {
  return (
    <>
      <div>id/content/done</div>
      {props.todoList.map((todo) => (
        <TodoItemContainer todo={todo} key={todo.id} />
      ))}
    </>
  );
}
