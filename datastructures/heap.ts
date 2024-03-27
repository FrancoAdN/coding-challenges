class MaxHeap {
  heap: number[] = [0];

  insert(num: number): void {
    // insert the number at the end of the heap
    this.heap.push(num);
    // rearranging the heap
    this.heapifyUp();
  }

  heapifyUp(): void {
    if (this.heap.length > 2) {
      // index of the last value from the heap
      let index = this.heap.length - 1;

      // while child is greater than parent
      while (this.heap[index] > this.parent(index)) {
        // if it is not the first element of the heap
        if (index >= 1) {
          // swap the recently inserted node with its parent
          this.swap(index, this.parentIndex(index));

          // if the parent node is not the root node
          if (this.parentIndex(index) > 1) {
            // continue with the loop
            index = this.parentIndex(index);
          } else {
            // break the loop, the heapifyUp is completed
            break;
          }
        }
      }
    }
  }

  parentIndex(childIndex: number): number {
    return Math.floor(childIndex / 2);
  }

  parent(childIndex: number): number {
    return this.heap[this.parentIndex(childIndex)];
  }

  remove(): number {
    // fist value of the heap
    let max = this.heap[1] ?? null;
    // rearranging the heap
    this.heapifyDown();
    return max;
  }

  heapifyDown(): void {
    if (this.heap.length > 2) {
      // set the max node equal to the last node of the heap
      this.heap[1] = this.heap[this.heap.length - 1];
      // remove the last node of the array (dup at the first node of the heap)
      this.heap.pop();

      // if there are just two numbers, we just have to check the first two values
      // from the heap and rearrange them if necessary
      if (this.heap.length === 3) {
        if (this.heap[1] < this.heap[2]) {
          this.swap(1, 2);
        }
        return;
      }

      let current = 1; // index of the root node

      // while current node is less or equal than left child or right child
      while (
        this.heap[current] <= this.left(current) ||
        this.heap[current] <= this.right(current)
      ) {
        // if left child is greater than right child
        if (this.left(current) > this.right(current)) {
          // swap current node and left node
          this.swap(current, this.leftIndex(current));
          // set current index to the left index
          current = this.leftIndex(current);
        } else {
          // swap current node and right node
          this.swap(current, this.rightIndex(current));
          // set current index to the right index
          current = this.rightIndex(current);
        }

        // if the left child or right child from the current index is not defined, break the loop
        if (
          this.left(current) == undefined ||
          this.right(current) == undefined
        ) {
          break;
        }
      }
    } else if (this.heap.length === 2) {
      // if there're just one number on the heap, remove the last number
      this.heap.pop();
    }
  }

  leftIndex(parentIndex: number): number {
    return parentIndex * 2;
  }

  left(parentIndex: number): number {
    return this.heap[this.leftIndex(parentIndex)];
  }

  rightIndex(parentIndex: number): number {
    return parentIndex * 2 + 1;
  }

  right(parentIndex: number): number {
    return this.heap[this.rightIndex(parentIndex)];
  }

  swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}
