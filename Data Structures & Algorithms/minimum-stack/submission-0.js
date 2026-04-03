class MinStack {
    constructor() {
        this.minStack = [];
        this.minVal = 0;
    }

    push(val) {
        if (this.minStack.length === 0) {
            this.minVal = val;
            this.minStack.push(val);
        } else if (val < this.minVal) {
            this.minStack.push(2 * val - this.minVal);
            this.minVal = val;
        } else {
            this.minStack.push(val);
        }
    }

    pop() {
        if (this.minStack.length === 0) return;

        let top = this.minStack[this.minStack.length - 1];

        if (top < this.minVal) {
            this.minVal = 2 * this.minVal - top;
        }

        this.minStack.pop();
    }

    top() {
        let top = this.minStack[this.minStack.length - 1];
        return top < this.minVal ? this.minVal : top;
    }

    getMin() {
        return this.minVal;
    }
}
