class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  if (head == null) {
    return false;
  }
  let ptr: ListNode = head;
  let ptr_next: ListNode = head;

  while (ptr !== null && ptr_next !== null) {
    ptr = ptr.next;

    if (ptr == null || ptr_next.next == null) {
      // give up trying to avoid this dumb part
      return false;
    }
    ptr_next = ptr_next.next.next;

    if (ptr == ptr_next) {
      return true;
    }
  }

  return false; // found end of list
}
