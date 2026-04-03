class Twitter {
    constructor() {
        this.time = 0;
        this.tweetsMap = new Map();
        this.followMap = new Map();
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        // Phly ma dakho ga ka kia ye wla user exist krta ha
        if(!this.tweetsMap.has(userId)) {
            this.tweetsMap.set(userId,[]);
        }
        
        this.tweetsMap.get(userId).push({
            id:tweetId,
            time: this.time++
        });
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        let result = [];
        let allUsers = new Set();


        allUsers.add(userId);
       
        
       if(this.followMap.has(userId)) {
            for(let f of this.followMap.get(userId)) {
                    allUsers.add(f);
            }
       }

       for(let user of allUsers) {
           if(this.tweetsMap.has(user)) {
                result.push(...this.tweetsMap.get(user));
           }
       }
        result.sort((a,b)=>b.time - a.time);
        return result.slice(0,10).map(p => p.id);


    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if(!this.followMap.get(followerId)) {
            this.followMap.set(followerId,new Set());
        }
        this.followMap.get(followerId).add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if(this.followMap.get(followerId)) {
            this.followMap.get(followerId).delete(followeeId);
        }
    }
}
