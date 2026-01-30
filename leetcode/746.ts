/**
 * @Title: 746. Min Cost Climbing Stairs
 * @Link: https://leetcode.com/problems/min-cost-climbing-stairs/description/
 * @Solved: Jan 29, 2026 23:45
 */

function minCostClimbingStairs(cost: number[]): number {
    let prev2 = cost[0]!; // -2
    let prev1 = cost[1]!; // -1

    if (cost.length <= 2) {
        return Math.min(prev2, prev1);
    }

    for (let i = 2; i < cost.length; i++) {
        const current = Math.min(i === cost.length - 1 ? prev1 : prev1 + cost[i]!, prev2 + cost[i]!)
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
}

console.log(minCostClimbingStairs([10,15,20]))