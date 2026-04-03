class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // hasDuplicate(arr) {
    //      for(let i=0;i<arr.length;i++){
    //     for(let j=i+1;j<arr.length;j++){
    //         if(arr[i]===arr[j]){
    //             return true;
    //         }
    //     }
    // }
    // return false;
    // }
    hasDuplicate(arr) {
        let mySet = new Set();
        for(let i=0;i<arr.length;i++){
            if(mySet.has(arr[i])){
                return true;
            }else{
                mySet.add(arr[i])
            }
        }
        return false;
    }
}
