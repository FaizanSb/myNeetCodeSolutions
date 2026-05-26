class Solution {
    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     */
    isMatch(s, p) {
        return this.solve(s, p);
    }
    solve(s, p) {
        // agr p === p.length && s === s.length then true;
        if (p.length === 0) {
            if (s.length === 0) return true;
            return false;
        }

        let isCharacterMatch = s.length > 0 && (s[0] === p[0] || p[0] === ".");

        // agr mera 2nd character * ky equal ho jay to
        if (p[1] === "*") {
            let notTakeAstric = this.solve(s, p.slice(2)); // p ko * ky bad sara string bhjy gy
            // phla s[0] to match ho gea and ab ham next character ko bhjy gy
            let TakeAstric = isCharacterMatch && this.solve(s.slice(1), p);

            return notTakeAstric || TakeAstric;
        } else {
            return isCharacterMatch && this.solve(s.slice(1), p.slice(1));
        }
    }
}
