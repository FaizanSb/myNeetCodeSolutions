class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        //  ab ma is problem ko khan's algoritm sa solve kron ga
        let res = [];
        let que = [];
        let count = 0;
        let adj = Array.from({length:numCourses},()=>[]);
        let indegree = new Array(numCourses).fill(0);
        
       for(let [u,v] of prerequisites) {
            adj[v].push(u);
            indegree[u]++;
            
       }

       for(let i=0; i<numCourses; i++) {
            if(indegree[i]===0) {
               
                que.push(i);
              
            }
        }

        while(que.length !== 0) {
            let node = que.shift();
            res.push(node);
            count++;
            for(let neighbour of adj[node]) {
              indegree[neighbour]--;
              if(indegree[neighbour]===0) {
                que.push(neighbour);
                
              }
            }
        }
        
        return count === numCourses ? res : [];
     
    }

}
