/**
 * @Title: 213. House Robber II
 * @Link: https://leetcode.com/problems/house-robber-ii/description/
 * @Solved: Feb 02, 2026 23:31
 */

function rob(nums: number[]): number {
    let s1: number[] = [...nums]; // 첫 번째 집을 털고 마지막 집을 안털래
    let s2: number[] = [...nums]; // 두 번째 집을 털고, 마지막 집을 털래

    let prev2 = s1[0];
    let prev1 = Math.max(s1[1], prev2)

    for (let i = 2; i < s1.length - 1; i++) {
        s1[i] = Math.max(prev2 + s1[i], prev1)
        prev2 = prev1;
        prev1 = s1[i];
    }

    prev2 = s2[1];
    prev1 = Math.max(s2[2], prev2);

    for (let i = 3; i < s2.length; i++) {
        s2[i] = Math.max(prev2 + s2[i], prev1)

        prev2 = prev1;
        prev1 = s2[i];
    }


    return Math.max(...[...s1, ...s2])
}

console.log(rob([1, 2, 3, 1]))