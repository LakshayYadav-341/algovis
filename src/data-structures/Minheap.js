/**
 * Comparator function for comparing two heap nodes based on their priority.
 * @param {Object} a - First heap node.
 * @param {Object} b - Second heap node.
 * @returns {boolean} `true` if the priority of `a` is greater than `b`, otherwise `false`.
 */
const heapNodeComparator = (a, b) => {
    return a.priority > b.priority;
};

/**
 * Represents a Min Heap data structure.
 */
class MinHeap {
    constructor(comparator) {
        this.heap = [];
        this.comparator = comparator;
    }

    /**
     * Checks if the heap is empty.
     * @returns {boolean} `true` if the heap is empty, otherwise `false`.
     */
    isEmpty() {
        return this.heap.length === 0;
    }

    /**
     * Retrieves the top element of the heap without removing it.
     * @returns {Object | null} The top element of the heap, or `null` if the heap is empty.
     */
    peek() {
        return this.heap.length === 0 ? null : this.heap[0];
    }

    /**
     * Removes and returns the top element of the heap.
     * @returns {[Object, number] | null} An array containing the removed element and the number of steps, or `null` if the heap is empty.
     */
    pop() {
        if (this.heap.length === 0) {
            return null;
        }
        const top = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        let steps = 7;

        steps += this.heapifyDown();
        return [top, steps];
    }

    /**
     * Inserts a new element into the heap.
     * @param {Object} item - The element to insert.
     * @returns {number} The number of steps taken to perform the operation.
     */
    push(item) {
        this.heap.push(item);
        return this.heapifyUp() + 1;
    }

    /**
     * Returns a list representation of the heap.
     * @returns {Object[]} An array containing the elements of the heap.
     */
    list() {
        return this.heap;
    }

    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }

    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }

    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.heap.length;
    }

    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.heap.length;
    }

    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }

    leftChild(index) {
        return this.heap[this.getLeftChildIndex(index)];
    }

    rightChild(index) {
        return this.heap[this.getRightChildIndex(index)];
    }

    parent(index) {
        return this.heap[this.getParentIndex(index)];
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        let steps = 2;

        while (this.hasParent(index) && this.comparator(this.parent(index), this.heap[index])) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
            steps += 13;
        }
        return steps;
    }

    heapifyDown() {
        let index = 0;
        let steps = 1;

        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            steps += 4;

            if (
                this.hasRightChild(index) &&
                this.comparator(this.leftChild(index), this.rightChild(index))
            ) {
                smallerChildIndex = this.getRightChildIndex(index);
                steps += 9;
            }

            if (this.comparator(this.heap[index], this.heap[smallerChildIndex])) {
                this.swap(index, smallerChildIndex);
                steps += 3;
            } else {
                break;
            }

            index = smallerChildIndex;
            steps += 4;
        }
        return steps;
    }
}

export { MinHeap, heapNodeComparator };
