/*
이진 배열 nums와 정수 k가 주어졌을 때, 최대 k개의 0을 1로 바꿀 수 있는 경우, 연속된 1의 최대 개수를 반환합니다.

예시 1:

입력: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
출력: 6
설명: [1,1,1,0,0,1,1,1,1,1,1]
굵게 표시된 숫자는 0에서 1로 바뀐 숫자입니다. 가장 긴 부분 배열은 밑줄로 표시되어 있습니다.

예제 2:

입력: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
출력: 10
설명: [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
굵게 표시된 숫자는 0에서 1로 뒤집혔습니다. 가장 긴 부분 배열은 밑줄이 그어져 있습니다.

제약 조건:

1 <= nums.length <= 105
nums[i]는 0 또는 1입니다.
0 <= k <= nums.length
 */

/**
 * @Title: 424. Longest Repeating Character Replacement
 * @Link: https://leetcode.com/problems/max-consecutive-ones-iii/description/
 * @Solved: Feb 15, 2026 19:12
 */

function longestOnes(nums: number[], k: number): number {
    let left = 0;
    let max = 0;
    let zeroIndexes: number[] = [];

    const renewMax = (right: number) => {
        max = Math.max(max, right - left + 1)
    }

    const getZeroCount  = (left: number, right: number) => {
        return nums.slice(left, right+1).filter(num => num === 0).length;
    }

    const isPossibleChange = (zeroCount: number) => {
        return zeroCount <= k;
    }

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            zeroIndexes.push(right);
        }

        // console.log(zeroIndexes)

        while (!isPossibleChange(zeroIndexes.length)) {
            left = zeroIndexes.shift() + 1;
            // console.log('!', zeroIndexes)
        }

        renewMax(right)
    }

    return max;
}

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2))