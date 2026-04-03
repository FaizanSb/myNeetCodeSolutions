class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let pairs = position.map((val, idx) => ({ position: val, speed: speed[idx] }));
    pairs.sort((a, b) => b.position - a.position);

    position = pairs.map(p => p.position);
    speed = pairs.map(p => p.speed);

    let stack = [];

    for (let i = 0; i < position.length; i++) {

        let time = (target - position[i]) / speed[i];
        if (stack.length === 0 || time > stack[stack.length - 1]) {
            stack.push(time);
        }

    }
    let noofCarFleets = stack.length;
    return noofCarFleets;

    }
}
