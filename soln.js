class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
  let fast = head;
  while (fast && fast.next) {
    head = head.next;
    fast = fast.next.next;
    if (head === fast) return true;
  }
  return false;
};

// Test cases
const head1 = new ListNode(3);
head1.next = new ListNode(2);
head1.next.next = new ListNode(0);
head1.next.next.next = new ListNode(-4);
head1.next.next.next.next = head1.next; // Creating a cycle at index 1

console.log("h1", hasCycle(head1)); // Output: true

const head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = head2; // Creating a cycle at index 0

console.log("h2", hasCycle(head2)); // Output: true

const head3 = new ListNode(1);

console.log("h3", hasCycle(head3)); // Output: false
