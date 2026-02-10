/*
정수 배열 nums가 주어졌을 때, 곱이 가장 큰 부분 배열을 찾고 그 곱을 반환합니다.
*부분배열은 배열 내에서 연속된 비어 있지 않은 요소들의 순서입니다.

테스트 케이스는 답이 32비트 정수에 맞도록 생성됩니다.
단일 요소로 이루어진 배열의 곱은 해당 요소의 값입니다.

예시 1:
입력: nums = [2,3,-2,4]
출력: 6
설명: [2,3]의 곱이 가장 큽니다(6).

예시 2:
입력: nums = [-2,0,-1]
출력: 0
설명: [-2,-1]은 부분 배열이 아니므로 결과는 2가 될 수 없습니다.

제약 조건:
1 <= nums.length <= 2 * 10⁴
-10 <= nums[i] <= 10
nums의 모든 부분 배열의 곱은 32비트 정수에 맞도록 보장됩니다.
 */

/**
 * @Title: 152. Maximum Product Subarray
 * @Link: https://leetcode.com/problems/maximum-product-subarray/description/
 * @Solved: Jan 28, 2026 02:46
 */

function maxProduct(nums: number[]): number {
    let max = nums[0]; // 최대값 -> 양수 저장소
    let min = nums[0]; // 최소값 -> 음수 저장소
    let result = nums[0];

    if (nums.length === 1) {
        return nums[0];
    }

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0) { // nums가 음수일 때
            [max, min] = [min, max]
        }

        max = Math.max(nums[i], nums[i] * max)
        min = Math.min(nums[i], nums[i] * min)

        result = Math.max(result, max)
    }

    return result;
}

console.log(maxProduct([0, 2]))