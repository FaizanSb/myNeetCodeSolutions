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
     * @return {void}
     */
    reorderList(head) {

        if(head == null || head.next == null) {
            // return head == null ? '' : head;
            return;
        }
    // Find the mid of list accoriding to slow
        let fast = head;
        let slow = head;
        let prev1 = null;
        while(fast != null && fast.next != null) {
            prev1 = slow;
            fast = fast.next.next;
            slow = slow.next;
        }
        // Divide the list in two parts
        prev1.next = null;
        let list1 = head;
        let list2 = this.reverse(slow);

        // Reverse the list 2
        
        this.reOrder(list1,list2);
        
        return head;

    }

    reverse(list) {
        let prev2 = null;
        let current = list;
        while(current != null) {
            let nextNode = current.next;
            current.next = prev2;
            prev2 = current;
            current = nextNode;
        }

        return prev2;
        
    }

    reOrder(list1,list2) {
        let first = list1;
        let second = list2;
        while(second != null && first != null) {
            let temp1 = first.next;
            let temp2 = second.next;

            first.next = second;
            second.next =  temp1;

            first = temp1;
            second = temp2;
        }
        
        if (second != null) {
        // find last node of reordered list
        let curr = list1;
        while (curr.next != null) {
            curr = curr.next;
        }
        curr.next = second;
    }
    }
    

}
