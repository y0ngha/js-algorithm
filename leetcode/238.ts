/**
 * @Title: 238. Product of Array Except Self
 * @Link: https://leetcode.com/problems/product-of-array-except-self/description/
 * @Solved: Feb 10, 2026 18:44
 */

function productExceptSelf(nums: number[]): number[] {
    let dp: number[] = Array.from<number>({length: nums.length}).fill(1)
    let dp2: number[] = Array.from<number>({length: nums.length}).fill(1)
    let answer: number[] = Array.from<number>({length: nums.length}).fill(1)
    for (let i = 1; i < nums.length; i++) {
        dp[i] = dp[i - 1] * nums[i - 1]
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        dp2[i] = dp2[i + 1] * nums[i + 1]
    }

    for (let i = 0; i < nums.length; i++) {
        answer[i] = dp[i] * dp2[i]
    }
    return answer
}

console.log(productExceptSelf([1, 2, 3, 4]));