/**
 * @Title: 1480. Running Sum of 1d Array
 * @Link: https://leetcode.com/problems/running-sum-of-1d-array/description/
 * @Solved: Jan 28, 2026 02:29
 */

function runningSum(nums: number[]): number[] {
    const returnNums = [];
    for (let i = 0; i < nums.length; i++) {
        let previousNum = 0;
        for (let j = i; j >= 0; j--) {
            const _num = nums[j];
            if (_num !== undefined) {
                previousNum += _num;
            }
        }
        returnNums.push(previousNum)
    }
    return returnNums;
}

console.log(runningSum([1,2,3,4]))