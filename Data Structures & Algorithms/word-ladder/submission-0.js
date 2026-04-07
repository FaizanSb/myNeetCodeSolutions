class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        // phly ham sary chars ko set ma daly gy fast look up ka lea and visited ka set bnay gy jis ma jo visit ho gea us ko daly gy

        
        const length = beginWord.length; // As length of all chars are same so we can use same length
        let wordSet = new Set(wordList);
        let que = [[beginWord,1]];
        let visited = new Set([beginWord]);
        // All posible chars check kry gy and loop lga ka ky replace kry gy
        let allChars = 'abcdefghijklmnopqrstuvwxyz'.split('');

        if(!wordSet.has(endWord)) return 0;
        
        while(que.length > 0) {
            let [word,step] = que.shift();

            for(let i = 0; i<length; i++) {
                for(let c of allChars) {
                    if(word[i] === c) continue;
                    let arr = word.split('');
                    arr[i] = c;
                    const newWord = arr.join('');
                   
                    if(newWord === endWord) {
                        return step+1;
                    }

                    if(wordSet.has(newWord) && !visited.has(newWord)) {
                        visited.add(newWord);
                        que.push([newWord,step+1])
                    }

                }

            }
            
        }
        return 0;
       
    }
}
