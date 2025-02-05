import React, { useState } from "react";
import Grid from "./components/Grid";
import Controls from "./components/Controls";
import { dijkstra } from "./algorithms/dijkstra";
import "./App.css";

const App = () => {

  const visualizeAlgorithm = () => {
    // if (!startNode || !endNode) {
    //   alert("Please select a start and end node!");
    //   return;
    // }

    // const visitedNodesInOrder = dijkstra(grid, startNode, endNode);
    // animateAlgorithm(visitedNodesInOrder);
  };

  const animateAlgorithm = (visitedNodesInOrder) => {
    // for (let i = 0; i <= visitedNodesInOrder.length; i++) {
    //   if (i === visitedNodesInOrder.length) {
    //     setTimeout(() => animateShortestPath(visitedNodesInOrder), 10 * i);
    //     return;
    //   }
    //   setTimeout(() => {
    //     const node = visitedNodesInOrder[i];
    //     if (node && !node.isWall) {
    //       document.getElementById(`node-${node.row}-${node.col}`)?.classList.add("node-visited");
    //     }
    //   }, 10 * i);
    // }
  };

  const animateShortestPath = (visitedNodesInOrder) => {
    // const shortestPath = getShortestPath(visitedNodesInOrder[visitedNodesInOrder.length - 1]);
    // for (let i = 0; i < shortestPath.length; i++) {
    //   setTimeout(() => {
    //     const node = shortestPath[i];
    //     if (node && !node.isWall) {
    //       document.getElementById(`node-${node.row}-${node.col}`)?.classList.add("node-shortest-path");
    //     }
    //   }, 50 * i);
    // }
  };

  const getShortestPath = (endNode) => {
    // const shortestPath = [];
    // let currentNode = endNode;
    // while (currentNode !== null) {
    //   shortestPath.unshift(currentNode);
    //   currentNode = currentNode.previousNode;
    // }
    // return shortestPath;
  };

  const resetGrid = () => {
    // setGrid(createInitialGrid());
    // setStartNode(null);
    // setEndNode(null);
    // document.querySelectorAll(".node-visited, .node-shortest-path").forEach((node) => {
    //   node.classList.remove("node-visited", "node-shortest-path");
    // });
  };

  return (
    <div className="App">
      <Controls onVisualize={visualizeAlgorithm} onReset={resetGrid} />
      <Grid />
    </div>
  );
};

export default App;
