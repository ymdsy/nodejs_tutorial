import React from "react";

export function TodoItemPresenter(props) {
  return (
    <div>
      <form>
        {props.id}
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
        <input
          type="text"
          value={props.content}
          onChange={(e) =>
            props.onChangeContent(props.id, e.target.value, props.checked)
          }
        />
        <button onClick={() => props.onDeleteContent(props.id)}>
          削除する
        </button>
      </form>
    </div>
  );
}
