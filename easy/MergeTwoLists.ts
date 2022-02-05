//Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let output: ListNode = new ListNode();
  let ptr: ListNode = output;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      ptr.next = list1; // this is next item
      list1 = list1.next; // iterate list
    } else {
      ptr.next = list2;
      list2 = list2.next;
    }
    ptr = ptr.next; // iterate pointer
  }
  if (list1 == null) {
    ptr.next = list2;
  } else if (list2 == null) {
    ptr.next = list1;
  }

  // don't output the dummy node
  return output.next;
}
