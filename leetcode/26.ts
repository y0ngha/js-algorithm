/**
 * @Title: 26. Remove Duplicates from Sorted Array
 * @Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
 * @Solved: submitted at Jan 30, 2026 21:33
 */

function removeDuplicates(nums: number[]): number {
    let count = 0;
    let unique = 1;

    let prev = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const curr = nums[i];
        prev = nums[i-1];
        if (prev === curr) {
            nums[i-1] = 101;
            count++;
        } else {
            unique++;
        }
    }
    nums.sort((a, b) => a - b);
    console.log(nums);

    return unique;
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))