import React from "react";
import { TodoItemContainer } from "./TodoItem/TodoItemContainer";

export function TodoListPresenter(props) {
  return (
    <>
      {props.todoList.map((todo) => (
        <TodoItemContainer
          todo={todo}
          key={todo.id}
          updateTodoList={props.updateTodoList}
        />
      ))}
    </>
  );
}
