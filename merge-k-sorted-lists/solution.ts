/**
 * Definition for singly-linked list.
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function getNextLowest(lists: Array<ListNode | null>): number | null {
  const n = lists.length;
  let index = 0;
  let lowest = Infinity;
  let indexTaken: number | null = null;

  while (index < n) {
    const current = lists[index];
    if (current && current.val < lowest) {
      lowest = current.val;
      indexTaken = index;
    }
    index++;
  }

  if (indexTaken !== null) {
    lists[indexTaken] = lists[indexTaken].next;
    return lowest;
  }

  return null;
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const dummy = new ListNode();
  let tail = dummy;

  let lowest = getNextLowest(lists);
  while (lowest !== null) {
    tail.next = new ListNode(lowest);
    tail = tail.next;
    lowest = getNextLowest(lists);
  }

  return dummy.next;
}
