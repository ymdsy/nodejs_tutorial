import React from "react";

export function TodoItemPresenter(props) {
  return (
    <div>
      <form>
        {props.id}
        <input
          type="text"
          value={props.content}
          onChange={() => props.onChangeContent(this.value)}
        />
        <input type="checkbox" checked={props.checked} />
      </form>
    </div>
  );
}
