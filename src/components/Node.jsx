import React from "react";
import "./Node.css";

const Node = ({ row, col, isStart, isEnd, isWall, onClick }) => {
  const extraClassName = isStart
    ? "node-start"
    : isEnd
    ? "node-end"
    : isWall
    ? "node-wall"
    : "";

  return (
    <div
      id={`node-${row}-${col}`}
      className={`node ${extraClassName}`}
      onClick={onClick}
    ></div>
  );
};

export default Node;
