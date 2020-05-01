import React from "react";

export function TodoCreatePresenter(props) {
  return (
    <div>
      <form>
        新しいTODO：
        <input
          type="text"
          value={props.initialContent}
          onChange={(e) => props.onCreateContent(e.target.value)}
        />
      </form>
    </div>
  );
}
