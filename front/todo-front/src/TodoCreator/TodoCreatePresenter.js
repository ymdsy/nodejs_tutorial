import React from "react";

export function TodoCreatePresenter(props) {
  return (
    <div>
      <form>
        新しいTODO：
        <input
          type="text"
          value={props.content}
          onChange={(e) => props.onChangeContent(e.target.value)}
        />
        <button onClick={() => props.onCreateContent()}>作成する</button>
      </form>
    </div>
  );
}
