import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGridSize, setStartNode, setEndNode, toggleWall, resetGrid } from "../slices/graph";
import Node from "./Node";
import "./Grid.css";

const Grid = () => {
  const grid = useSelector((state) => state.grid.grid);
  const rows = useSelector((state) => state.grid.rows);
  const cols = useSelector((state) => state.grid.cols);
  const dispatch = useDispatch();
  
  const [markingMode, setMarkingMode] = useState("start");
  const [inputRows, setInputRows] = useState(rows);
  const [inputCols, setInputCols] = useState(cols);

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

  const handleGridSizeChange = () => {
    dispatch(setGridSize({ rows: inputRows, cols: inputCols }));
    setMarkingMode("start");
  };

  return (
    <div className="p-4">
      <h3 className="text-lg font-bold">Click to set: <b>{markingMode.toUpperCase()}</b></h3>

      <div className="mb-4">
        <label className="mr-2">Rows:</label>
        <input 
          type="number" 
          value={inputRows} 
          onChange={(e) => setInputRows(Number(e.target.value))} 
          className="border p-1 mr-4 w-16"
        />

        <label className="mr-2">Cols:</label>
        <input 
          type="number" 
          value={inputCols} 
          onChange={(e) => setInputCols(Number(e.target.value))} 
          className="border p-1 mr-4 w-16"
        />

        <button 
          className="p-2 bg-green-500 text-white"
          onClick={handleGridSizeChange}
        >
          Set Grid Size
        </button>
      </div>

      <div className="grid">
        {grid.map((row, rowIdx) => (
          <div key={`row-${rowIdx}`} className="row">
            {row.map((node, colIdx) => (
              <Node
                key={`node-${rowIdx}-${colIdx}`}
                {...node}
                onClick={() => handleNodeClick(rowIdx, colIdx)}
              />
            ))}
          </div>
        ))}
      </div>

      <button 
        className="mt-4 p-2 bg-blue-500 text-white" 
        onClick={() => { dispatch(resetGrid()); setMarkingMode("start"); }}
      >
        Reset Grid
      </button>
    </div>
  );
};

export default Grid;
