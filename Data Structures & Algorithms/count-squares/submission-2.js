class CountSquares {
    constructor() {
        this.freq = new Map(); // to count frequency of particular number
        this.pts = []; // to store all points with unique fashion
    }

    // (x1,py) ------------ (px,py)
    // (x1,y1) ------------ (px,y1)

    /**
     * @param {number[]} point
     * @return {void}
     */
    add([x, y]) {
        const key = `${x},${y}`; // points ko string ma convert kro
        this.freq.set(key, (this.freq.get(key) || 0) + 1);
        if (!this.pts.some((point) => point[0] === x && point[1] === y)) {
            this.pts.push([x, y]); // agr point unique ha to push kro
        }
    }

    // (x1,py) ------------ (px,py)
    // (x1,y1) ------------ (px,y1)

    /**
     * @param {number[]} point
     * @return {number}
     */
    count([px, py]) {
        let total = 0;
        for (const [x1, y1] of this.pts) {
            // diagonal condition implement
            if (Math.abs(x1 - px) !== Math.abs(y1 - py)) {
                continue; // skip kr do agr diagonal shape wagera ban rhi to
            }
            if (x1 === px || y1 === py) {
                continue; // x1===px dono vertical same hn and y1===py dono horizontaly same ha to continue;
            }
            const c1 = this.freq.get(`${x1},${py}`) || 0; // diagonal waly ka x and query waly ka ye corner same row ma ho ga jis man query point ha
            const c2 = this.freq.get(`${px},${y1}`) || 0; // query wala x and diagonal wala y
            const c3 = this.freq.get(`${x1},${y1}`) || 0; // loop point ki freq
            total += c1 * c2 * c3;
        }
        return total;
    }
}
