/**
 * @Title: 1. Two Sum
 * @Link: https://leetcode.com/problems/two-sum/description/
 * @Solved: Jan 28, 2026 04:06
 */

function twoSum(nums: number[], target: number): number[] {
    let firstIndex = -1;
    let secondIndex = -1;
    for (let i = 0; i < nums.length; i++) {
        const firstNum = nums[i];
        firstIndex = i;
        let secondNum = 0;

        for (let j = i+1; j < nums.length; j++) {
            secondNum = nums[j];
            secondIndex = j;
            if (firstNum + secondNum === target) {
                break;
            }
        }

        if (firstNum + secondNum === target) {
            break;
        }
    }

    return [firstIndex, secondIndex]
}

console.log(twoSum([2,7,11,15], 9))