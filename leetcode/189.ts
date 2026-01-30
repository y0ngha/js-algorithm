/**
 * @Title: 189. Rotate Array
 * @Link: https://leetcode.com/problems/rotate-array/description/
 * @Solved: Jan 28, 2026 03:05
 */

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const n = nums.length;
    k %= n;

    const reverse = (start: number, end: number) => {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]]; // Swap
            start++;
            end--;
        }
    }

    reverse(0, n - 1);
    reverse(0, k - 1);
    reverse(k, n - 1);
}

console.log(rotate([1,2,3,4,5,6,7], 3))