/**
 * @Title: 1046. Last Stone Weight
 * @Link: https://leetcode.com/problems/last-stone-weight/description/
 * @Solved: Feb 09, 2026 04:11
 */

function lastStoneWeight(stones: number[]): number {
    while (stones.length > 1) {
        stones.sort((a, b) => a - b);
        const y = stones[stones.length - 1]
        const x = stones[stones.length - 2]

        if (y === x) {
            stones.splice(stones.length - 2, 2)
        } else if (y > x) {
            stones[stones.length - 1] = y - x;
            stones.splice(stones.length - 2, 1)
        }
    }

    return stones.length === 0 ? 0 : stones[0]
}

console.log(lastStoneWeight([1]))