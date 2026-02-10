/**
 * @Title: 33. Search in Rotated Sorted Array
 * @Link: https://leetcode.com/problems/search-in-rotated-sorted-array/description/
 * @Solved: Feb 10, 2026 20:49
 */

function search(nums: number[], target: number): number {
    if (nums.length === 1) {
        return nums[0] !== target ? -1 : 0
    }

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[left] <= nums[mid]) {
            // 왼쪽 정렬이 되어있다.
            if (nums[left] <= target && target <= nums[mid]) {
                // target이 왼쪽 정렬된 것 중에 있다면 왼쪽으로 좁힌다.
                right = mid - 1;
            } else {
                // target이 왼쪽 정렬된 것 중에 없다면 오른쪽으로 좁힌다.
                left = mid + 1;
            }
        } else {
            // 오른쪽 정렬이 되어있다.
            if (nums[mid] <= target && target <= nums[right]) {
                // target이 오른쪽 정렬된 것 중에 있다면, 오른쪽으로 좁힌다.
                left = mid + 1;
            } else {
                // target이 오른쪽 정렬된 것 중에 없다면 왼쪽으로 좁힌다.
                right = mid - 1;
            }
        }
    }

    return -1;
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 1))