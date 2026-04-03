class TreeNode {
        constructor() {
            this.children = {}
            this.isEnd = false;
        }
    }
class WordDictionary {
    constructor() {
        this.root = new TreeNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    
    addWord(words) {
        let current = this.root;
        for(let w of words) {
            if(!current.children[w]) {
                current.children[w] = new TreeNode();
            }
            current = current.children[w];
        }
        current.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(words) {
        return this.dfs(words,0,this.root);
    }
    dfs(words,idx,node) {
        if(idx === words.length) {
            return node.isEnd;
        }
        let ch = words[idx];
        if(ch !== '.') {
            if(!node.children[ch]) {
                return false;
            }
            return this.dfs(words,idx+1,node.children[ch]);
        }
        if(ch === '.') {
            for(let w in node.children) {
               if(this.dfs(words,idx+1,node.children[w])) {
                return true;
               }
            }
        }
        return false;
    }
}
