import { MinHeap } from "../data-structures/Minheap"; // Import MinHeap for better efficiency

export function dijkstra(grid, startNode, endNode) {
    const visitedNodesInOrder = [];
    const unvisitedNodes = new MinHeap((a, b) => a.distance - b.distance); // MinHeap for efficiency

    startNode.distance = 0;
    unvisitedNodes.push(startNode);

    while (!unvisitedNodes.isEmpty()) {
        const closestNode = unvisitedNodes.pop();

        if (closestNode.isWall) continue; // Skip walls
        if (closestNode.distance === Infinity) break; // Stop if unreachable

        closestNode.isVisited = true;
        visitedNodesInOrder.push(closestNode);

        if (closestNode === endNode) break; // Stop when reaching the end

        updateUnvisitedNeighbors(closestNode, grid, unvisitedNodes);
    }
    return visitedNodesInOrder;
}

function updateUnvisitedNeighbors(node, grid, unvisitedNodes) {
    const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
    for (const neighbor of unvisitedNeighbors) {
        const newDistance = node.distance + 1;
        if (newDistance < neighbor.distance) { // Update only if a shorter path is found
            neighbor.distance = newDistance;
            neighbor.previousNode = node;
            unvisitedNodes.push(neighbor);
        }
    }
}

function getUnvisitedNeighbors(node, grid) {
    const neighbors = [];
    const { row, col } = node;
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    return neighbors.filter((neighbor) => !neighbor.isVisited);
}
