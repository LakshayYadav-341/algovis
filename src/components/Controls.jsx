import React from "react";

const Controls = ({ onVisualize, onReset }) => {
  return (
    <div className="controls">
      <button onClick={onVisualize}>Visualize Dijkstra</button>
      <button onClick={onReset}>Reset Grid</button>
    </div>
  );
};

export default Controls;
