class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
//     Always take smallest possible flight,
//     and when stuck, add airport to answer.
//     Finally reverse the answer.
    findItinerary(tickets) {
        let graph = {};
        // Creating Adjcency List
        for(let [s,v] of tickets) {
            if(!graph[s]) {
                graph[s] = [];
            }
            graph[s].push(v)
        } 
        // Now sort according to lexicographical order
        for(let key in graph) {
            graph[key].sort();
        }
        let result = []; // storing airports 
        this.dfs("JFK",graph,result);
        result.reverse();
        return result;
    }
    dfs(startAirPort,graph,res) {

        while(graph[startAirPort] && graph[startAirPort].length > 0) {
            let nextAirPort = graph[startAirPort].shift(); // Explores next airport
            this.dfs(nextAirPort,graph,res);
        }
        res.push(startAirPort);     // If startAirPort ka next ma koi be na ho
        return res;
    }
}
