import React, { useState } from "react";
import Node from "./Node";
import "./Grid.css";
import { useSelector, useDispatch } from "react-redux";
import { setStartNode, setEndNode, toggleWall, resetGrid } from "../slices/graph";

const Grid = () => {
  const grid = useSelector((state) => state.grid.grid);
  const dispatch = useDispatch();
  const [markingMode, setMarkingMode] = useState("start");
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleNodeClick = (row, col) => {
    if (markingMode === "start") {
      dispatch(setStartNode({ row, col }));
      setMarkingMode("end");
    } else if (markingMode === "end") {
      dispatch(setEndNode({ row, col }));
      setMarkingMode("wall");
    } else if (markingMode === "wall") {
      dispatch(toggleWall({ row, col }));
    }
  };

  const handleMouseDown = (row, col) => {
    if (markingMode === "wall") {
      setIsMouseDown(true);
      dispatch(toggleWall({ row, col }));
    }
  };

  const handleMouseEnter = (row, col) => {
    if (isMouseDown && markingMode === "wall") {
      dispatch(toggleWall({ row, col }));
    }
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  return (
    <div className="p-4" onMouseUp={handleMouseUp}>
      <h3 className="text-lg font-bold">
        Click to set: <b>{markingMode.toUpperCase()}</b>
      </h3>
      <div className="grid">
        {grid.map((row, rowIdx) => (
          <div key={`row-${rowIdx}`} className="row">
            {row.map((node, colIdx) => (
              <Node
                key={`node-${rowIdx}-${colIdx}`}
                {...node}
                onClick={() => handleNodeClick(rowIdx, colIdx)}
                onMouseDown={() => handleMouseDown(rowIdx, colIdx)}
                onMouseEnter={() => handleMouseEnter(rowIdx, colIdx)}
              />
            ))}
          </div>
        ))}
      </div>
      <button
        className="mt-4 p-2 bg-blue-500 text-white"
        onClick={() => {
          dispatch(resetGrid());
          setMarkingMode("start");
        }}
      >
        Reset Grid
      </button>
    </div>
  );
};

export default Grid;
