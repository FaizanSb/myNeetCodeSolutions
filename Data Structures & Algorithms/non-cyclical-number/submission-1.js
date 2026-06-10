class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    // I use slow fast pointer technique to solve this problem

    getNext(n) {
        let sum = 0;
        while(n>0) {
            let digit = n % 10;
            sum += digit * digit;
            n = Math.floor(n/10);
        }
        return sum;
    }
    isHappy(n) {
        let slow = n;
        let fast = this.getNext(n);

        while(fast !== 1 && fast !== slow) {
            slow = this.getNext(slow);
            fast = this.getNext(this.getNext(fast));
        }
        return fast === 1 ? true : false;
    }
}
