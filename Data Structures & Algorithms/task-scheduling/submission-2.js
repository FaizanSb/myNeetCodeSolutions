class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        // Sab sa phly ham har word ka index increase kry gy
        let mp = new Array(26).fill(0);
        for(let t of tasks) {
            mp[t.charCodeAt(0) - 'A'.charCodeAt(0)]++;
        }

        // Ab ham ak priority queue bnay gy and us ma sary elements ki occurance ko dal day gy
        let pq = new MaxPriorityQueue();
        let time = 0;
        for(let i = 0; i<26; i++) {
            if(mp[i] > 0) {

                pq.enqueue(mp[i]);
            }
        }

        while(!pq.isEmpty()) {
            let temp = [];

            // Same task repeat hony sa phly n gap hona chyea is lea n+1 kea including specific charactor a+n
            for(let i = 1; i<= n+1; i++) {
                if(!pq.isEmpty()) {
                    let freq = pq.front();
                    pq.dequeue();
                    freq--;
                    temp.push(freq);
                }
            }

            for(let f of temp) {
                if(f>0) 
                pq.push(f);
            }

            if(pq.isEmpty()) {
                time += temp.length;

            }else {
                time += n+1;
            }
        }

        return time;




    }
}
