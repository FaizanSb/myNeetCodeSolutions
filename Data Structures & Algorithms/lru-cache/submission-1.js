class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    _removeNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    _addToFront(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }

    get(key) {
        if (this.map.has(key)) {
            const node = this.map.get(key);
            this._removeNode(node);
            this._addToFront(node);
            return node.val;
        } else {
            return -1;
        }
    }

    put(key, value) {
        if (this.map.has(key)) {
            // Key exists: update value and move to front
            const node = this.map.get(key);
            node.val = value;  // Update the value
            this._removeNode(node);
            this._addToFront(node);
        } else {
            // New key
            if (this.map.size >= this.capacity) {
                // Remove LRU node
                const lru = this.tail.prev;
                this._removeNode(lru);
                this.map.delete(lru.key);  // REMEMBER TO DELETE FROM MAP TOO!
            }
            
            // Add new node
            const newNode = new Node(key, value);
            this._addToFront(newNode);
            this.map.set(key, newNode);
        }
    }
}