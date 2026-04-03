/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */

    /* Reverse karte waqt, PrevNode hamesha
     current reversed list ka HEAD hota hai */
     
    reverseKGroup(head, k) {

        if(head === null) {
            return null;
        }

        // firstly we check that is k nodes exist
        let count = 0;
        let curr = head;

        while(curr !=null && count < k) {

            curr = curr.next;
            count++;
        }
        if(count < k) return head;

        // Now Repaet same and get the previous node
        let PrevNode = this.reverseKGroup(curr,k);

        // Now reverse the nodes according to k
        count = 0;
        let temp = head;
        while(count < k) {
            let nextNode = temp.next;
            temp.next = PrevNode;
            PrevNode = temp;
            temp = nextNode;
            count++;
        }

        return PrevNode;
    }
}
