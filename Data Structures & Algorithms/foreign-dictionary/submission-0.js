class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    // Solve using Topological sort using Khanans's algorithm
    foreignDictionary(words) {
        let graph = new Map();
        let indegree = new Map();

        // first check each character and agr har character ka lea map and indegree initialize kry gy
        for(let word of words) {
            for(let ch of word) {
                if(!graph.has(ch)) {
                    graph.set(ch,[]);
                    indegree.set(ch,0);
                }
            }
        }
        let n = words.length;
        // step 2: ab ham har word ko compare kar ka indegree ma increment kry gy and graph ma add kry gy
        for(let i = 0; i<n-1; i++) {
            let word1 = words[i];
            let word2 = words[i+1];
            let found = false;  // true agr koi disimilar words found
            let len = Math.min(word1.length,word2.length);

            for(let j = 0; j<len; j++) {
               if(word1[j] !== word2[j]) {
                  graph.get(word1[j]).push(word2[j]);  // Add as a adjecet
                  indegree.set(word2[j],indegree.get(word2[j])+1); // increment as a indegree 
                  found = true;
                  break;
               }

            }
            if(!found && word1.length > word2.length) {
                return '';
            }

        }
        // Now applying Khanna's algorithm
        let queue = [];
        for(let [ch,deg] of indegree) {
            if(deg === 0) {
                queue.push(ch);
            }
        }
        let res = '';
        while(queue.length > 0) {
            let ch = queue.shift();
            res += ch
            // Now explore all its neighbors
            for(let neig of graph.get(ch)) {
                indegree.set(neig,indegree.get(neig)-1);
                if(indegree.get(neig) === 0) {
                    queue.push(neig);
                }
            }
        }
        // Now at last check that is there is any cycle or not. 
        return res.length === indegree.size ? res : '';
    }
}
