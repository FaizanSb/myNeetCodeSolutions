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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    // 2 sorted lists ko merge kry ga or return kry ga
    mergedSortedLists(l1,l2) {

        if(!l1) {
            return l2;
        }
        if(!l2) {
            return l1;
        }

        if(l1.val <= l2.val) {
            l1.next = this.mergedSortedLists(l1.next,l2);
    
            return l1;
        }else {
            l2.next = this.mergedSortedLists(l1,l2.next);
            return l2;
        }

        // return null;
    }

// Ye function divide kry ga 2 parts ma or new List return kry ga or ham un lists ko merge Krwa len gy
    divideList(start,end,lists) {
        if(start > end) {
            return null;
        }
        if(start == end) {
            return lists[start];
        }

        const mid = Math.floor((start+end)/2);
        let L1 = this.divideList(start,mid,lists);
        let L2 = this.divideList(mid+1,end,lists);

        return this.mergedSortedLists(L1,L2);
    }
    // Pass kry gy complete lists array ko taky divide ho jay
    mergeKLists(lists) {
        let size = lists.length;

        return this.divideList(0,size-1,lists);
    }
}
