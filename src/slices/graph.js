import { createSlice } from "@reduxjs/toolkit";

const createInitialGrid = (rows, cols) => {
  return Array.from({ length: rows }, (_, row) =>
    Array.from({ length: cols }, (_, col) => ({
      row,
      col,
      isStart: false,
      isEnd: false,
      isWall: false,
      previousNode: null,
    }))
  );
};

const initialState = {
  grid: createInitialGrid(10, 10), // Default size (can be changed)
  rows: 10,
  cols: 10,
};

const gridSlice = createSlice({
  name: "grid",
  initialState,
  reducers: {
    setGridSize: (state, action) => {
      const { rows, cols } = action.payload;
      state.rows = rows;
      state.cols = cols;
      state.grid = createInitialGrid(rows, cols);
    },
    setStartNode: (state, action) => {
      const { row, col } = action.payload;
      state.grid.forEach((rowArray) =>
        rowArray.forEach((node) => (node.isStart = false))
      );
      state.grid[row][col].isStart = true;
    },
    setEndNode: (state, action) => {
      const { row, col } = action.payload;
      state.grid.forEach((rowArray) =>
        rowArray.forEach((node) => (node.isEnd = false))
      );
      state.grid[row][col].isEnd = true;
    },
    toggleWall: (state, action) => {
      const { row, col } = action.payload;
      state.grid[row][col].isWall = !state.grid[row][col].isWall;
    },
    resetGrid: (state) => {
      state.grid = createInitialGrid(state.rows, state.cols);
    },
  },
});

export const { setGridSize, setStartNode, setEndNode, toggleWall, resetGrid } =
  gridSlice.actions;
export default gridSlice.reducer;
