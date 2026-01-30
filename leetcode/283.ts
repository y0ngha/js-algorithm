/**
 * @Title: 283. Move Zeroes
 * @Link: https://leetcode.com/problems/move-zeroes/description/
 * @Solved: Jan 28, 2026 04:02
 */

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {

    let deleteCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1)
            deleteCount++;
            i--;
        }
    }

    for (let i = 0; i < deleteCount; i++) {
        nums.push(0)
    }
}

console.log(moveZeroes([0,1,0,3,12]))