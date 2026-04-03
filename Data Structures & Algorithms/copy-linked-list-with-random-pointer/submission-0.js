// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }
// Apporach apni ha
class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if(head == null) {
            return null;
        }
        // 1. Phly ham original list ma new nodes insert kry gy
        let current = head;

        while(current != null) {
            let nextNode = current.next;
            let newNode = new Node(current.val);
            current.next = newNode;
            newNode.next = nextNode;
            current = nextNode;
        }

        // 2. Ab ma Random pointers ko set kro ga. 
        let newCurrent = head;
        while(newCurrent != null) {
            if(newCurrent.random == null ) {
                newCurrent.next.random = null;
            }else{
                newCurrent.next.random = newCurrent.random.next;
            }
            newCurrent = newCurrent.next.next;
        
        }

        // 3. At last we separate the new list from original list
        let newHead = head.next;
        newCurrent = newHead;
        current = head;
        while(current && newCurrent) {
            current.next = current.next == null ? null : current.next.next;
            newCurrent.next = newCurrent.next == null ? null : newCurrent.next.next;

            current = current.next;
            newCurrent = newCurrent.next;
        }

        return newHead;


    }
}
