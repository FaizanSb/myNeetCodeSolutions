class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let adj = Array.from({length:numCourses},()=>[]);
        let indegree = Array(numCourses).fill(0);
        // let res = [];
        let que = [];
        let count = 0;
        
        // Phly ham sary nodes ka indegree count kr lay gy
        for(let [u,v] of prerequisites) {
            adj[v].push(u);
            indegree[u]++;

        }

        // wo node jis ka indegree 0 ha usko queue ma daly gy because that course is not dependant on any one

        for(let i = 0; i<numCourses; i++) {
            if(indegree[i]===0) {
                que.push(i);
            }
        }
        // Ab ham BFS lgay gy and traverse kr lay gy
        while(que.length !== 0) {
            let node = que.shift();
            count++;
            // res.push()
            for(let neighbour of adj[node]) {
                indegree[neighbour]--;
                if(indegree[neighbour]===0) {
                    que.push(neighbour);
                }
            }
        }
        
        return count === numCourses ? true : false;
    }
}
