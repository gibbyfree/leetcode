class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev_ptr: ListNode = null;
  let current: ListNode = head;
  let next_ptr: ListNode = null;
  while (current !== null) {
    next_ptr = current.next;
    current.next = prev_ptr;
    prev_ptr = current;
    current = next_ptr;
  }
  return prev_ptr;
}
