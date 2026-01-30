/**
 * @Title: 198. House Robber
 * @Link: https://leetcode.com/problems/house-robber/description/
 * @Solved: Jan 29, 2026 23:22
 */

function rob(nums: number[]): number {

    if (nums.length <= 1) {
        return nums[0]!
    }

    let first = nums[0]!; // -2
    let second = Math.max(nums[0]!, nums[1]!) // -1

    for (let i = 2; i < nums.length; i++) {
        const current = Math.max(second, first + nums[i]!);

        first = second;
        second = current;
    }

    return second
}

console.log(rob([1,2,3,1]))