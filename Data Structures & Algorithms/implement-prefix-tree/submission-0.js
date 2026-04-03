class TreeNode {
    constructor() {
        this.children = {},
        this.isEnd = false;   
    }
}
class PrefixTree {
    constructor() {
        this.root = new TreeNode();   
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(words) {
        let current = this.root
        for(let word of words) {
            if(!current.children[word]) {
                current.children[word] = new TreeNode();
            }
            current = current.children[word];
        }
        current.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(words) {
        let current = this.root
        for(let word of words) {
            if(!current.children[word]) {
               return false;
            }
            current = current.children[word];
        }
       return current.isEnd;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let current = this.root
        for(let word of prefix) {
            if(!current.children[word]) {
                return false;
            }
            current = current.children[word];
        }
        return true;
    }
}
