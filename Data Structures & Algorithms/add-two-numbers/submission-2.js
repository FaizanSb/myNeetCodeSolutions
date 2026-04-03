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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let sum = 0;
        let carry = 0;
        let ansNode = new ListNode(0);
        let current = ansNode;

        while(l1 != null || l2 != null) {
            if(l1 != null) {
                sum += l1.val;
                l1 = l1.next;
            }

            if(l2 != null) {
                sum += l2.val;
                l2 = l2.next;
            }

            current.val = Math.floor(sum % 10);
            carry = Math.floor(sum / 10);
            let newNode = new ListNode(carry);
            current.next = newNode;
            current = newNode;
            sum = carry;
        }
        
        if(current.val == 0) {
            let skippedLast = this.skipLastNode(ansNode);
            return skippedLast
        }else {
            return ansNode;
        }
    }
    
    skipLastNode(head) {
        if(!head) return null;
        let prev = null;
        let curr = head;
        while(curr.next != null) {
            prev = curr;
            curr = curr.next;
        }
        if(curr.val === 0) {
           prev.next = null;
        }

        return head;
    }
}
