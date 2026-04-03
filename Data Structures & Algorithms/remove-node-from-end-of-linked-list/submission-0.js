/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// Two Pass Approach

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    findLength(head) {
        let length = 0;
        let current = head;
        while(current!=null) {
            length++;
            current = current.next;
        }
        return length;
    }
    
    removeNthFromEnd(head, n) {
        let L = this.findLength(head);

        if(L == n) {
            head = head.next;
            return head;
        }

        let noOfIt = L-n;
        let count = 0;
        let current = head;
        let prev = null;
        while(count < noOfIt) {
            prev = current;
            current = current.next;
            count++;
        }
        prev.next = current.next;

        return head;
    }
}
