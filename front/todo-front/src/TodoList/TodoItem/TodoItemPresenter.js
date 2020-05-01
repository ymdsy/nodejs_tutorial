import React from "react";

export function TodoItemPresenter(props) {
  return (
    <div>
      <form>
        {props.id}
        <input
          type="text"
          value={props.content}
          onChange={(e) =>
            props.onChangeContent(props.id, e.target.value, props.checked)
          }
        />
        <input
          type="checkbox"
          checked={props.checked}
          onChange={() =>
            props.onChangeContent(
              props.id,
              props.content,
              props.onChangeCheck(props.checked)
            )
          }
        />
      </form>
    </div>
  );
}
