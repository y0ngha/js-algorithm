/**
 * @Title: 300. Longest Increasing Subsequence
 * @Link: https://leetcode.com/problems/longest-increasing-subsequence/description/
 * @Solved: Feb 03, 2026 23:56
 */

function lengthOfLIS(nums: number[]): number {
    let dp: number[] = new Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        const iNum = nums[i];
        for (let j = 0; j < i; j++) {
            const jNum = nums[j];
            if (iNum > jNum) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }

    return Math.max(...dp)
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))