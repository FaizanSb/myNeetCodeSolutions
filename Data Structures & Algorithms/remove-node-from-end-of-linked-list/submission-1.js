/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
// Single Pass approach
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let fast = head;
        // Moves fast n times to check wether it is null or not
        for(let i=1;i<=n;i++) {
            fast = fast.next;
        }
        // if fast is null it means that n equal to length of list to simply delete head
        if(fast == null) {
            return head.next;
        }
    // Otherwise create slow pointer and moves untill fast or fast.next becomes null
        let slow = head;
        while(fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next;
        }
        slow.next = slow.next.next;
        return head;
    }
}
