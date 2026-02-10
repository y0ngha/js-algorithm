/**
 * @Title: 153. Find Minimum in Rotated Sorted Array
 * @Link: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/
 * @Solved: Feb 10, 2026 20:07
 */

function findMin(nums: number[]): number {
    let min = nums[0];
    if (nums[0] < nums[nums.length - 1]) {
        return nums[0];
    }

    const half = Math.floor((nums.length) / 2)

    if (nums[half-1] > nums[half]) {
        return nums[half];
    }

    if (nums[half+1] < nums[half]) {
        return nums[half+1];
    }

    if (nums[0] < nums[half]) {
        min = nums[half];
        for (let i = half; i < nums.length; i++) {
            if (nums[i] < min) {
                min = nums[i];
            }
        }
    } else {
        min = nums[0];
        for (let i = 0; i < half; i++) {
            if (nums[i] < min) {
                min = nums[i];
            }
        }
    }
    return min
}

console.log(findMin([7, 1, 2, 3, 4, 5, 6]))