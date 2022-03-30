function swapPairs(head: ListNode | null): ListNode | null {
  const output: ListNode = new ListNode(0);
  output.next = head;
  let ptr: ListNode = output;

  while (
    ptr.next !== null &&
    ptr.next !== undefined &&
    ptr.next.next !== null
  ) {
    let first: ListNode = ptr.next;
    let second: ListNode = ptr.next.next;

    first.next = second.next;
    ptr.next = second;
    ptr.next.next = first; // swap
    ptr = ptr.next.next; // iterate
  }

  return output.next; // don't output dummy 0
}
