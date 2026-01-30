/**
 * @Title: 53. Maximum Subarray
 * @Link: https://leetcode.com/problems/maximum-subarray/description/
 * @Solved: Jan 29, 2026 22:40
 */

function maxSubArray(nums: number[]): number {
    let maxSum = nums[0]!;
    let sum = nums[0]!;
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i]!;

        if (sum < 0) {
            sum = num;
        } else {
            sum += num;
        }

        if (maxSum < sum) {
            maxSum = sum;
        }
    }

    return maxSum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))