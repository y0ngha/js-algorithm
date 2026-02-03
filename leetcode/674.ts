/**
 * @Title: 674. Longest Continuous Increasing Subsequence
 * @Link: https://leetcode.com/problems/longest-continuous-increasing-subsequence/description/
 * @Solved: Feb 04, 2026 00:02
 */

function findLengthOfLCIS(nums: number[]): number {
    let dp: number[] = new Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        if (num > nums[i-1]) {
            dp[i] += dp[i-1];
        }
    }

    return Math.max(...dp)
}

console.log(findLengthOfLCIS([1,3,5,4,7]))