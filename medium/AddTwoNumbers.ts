class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let head: ListNode = null; // output
  let temp: ListNode = null; // head ptr
  let carryover: number = 0;
  while (l1 !== null || l2 !== null) {
    let sum: number = carryover; // from last iteration
    if (l1 != null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 != null) {
      sum += l2.val;
      l2 = l2.next;
    }
    let sumNode: ListNode = new ListNode(Math.floor(sum) % 10);
    carryover = Math.floor(sum / 10);
    if (temp === null) {
      // first node
      temp = head = sumNode;
    } else {
      temp.next = sumNode;
      temp = temp.next;
    }
  }
  if (carryover > 0) {
    temp.next = new ListNode(carryover);
  }

  return head;
}
