class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let ans = 0; // 0 is lea kea because kisi be number ka 0 sa xor wo num he hota ha
        for (let num of nums) {
            ans ^= num; // jo be be different ho ga wo khud he return ho jay ga
        }
        return ans;
    }
}
