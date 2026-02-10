/*
서로 다른 정수 nums와 목표 정수 target이 주어졌을 때, 합이 target이 되는 가능한 조합의 개수를 반환합니다.
테스트 케이스는 32비트 정수로 표현될 수 있도록 생성됩니다.

예시 1:
입력: nums = [1, 2, 3], target = 4
출력: 7
설명:
가능한 조합은 다음과 같습니다.
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)
서로 다른 순서로 된 조합도 서로 다른 조합으로 간주됩니다.

예제 2:
입력: nums = [9], target = 3
출력: 0

제약 조건:
1 <= nums.length <= 200
1 <= nums[i] <= 1000
nums의 모든 요소는 고유해야 합니다.

1 <= target <= 1000

1. 합이 target이 되는 가능한 조합의 개수 (nums array, 1차원 배열)
2. 배열의 길이는 target만큼 있으면 됨.
3. 무한히 써도 되고 요소를 다 안써도 됨.
4. dp[i]는 i를 만들 수 있는 조합의 수.
5. 점화식:

 */

/**
 * @Title: 377. Combination Sum IV
 * @Link: https://leetcode.com/problems/combination-sum-iv/description/
 * @Solved: Feb 11, 2026 03:15
 */

function combinationSum4(nums: number[], target: number): number {
    let dp: number[] = Array.from<number>({ length: target+1 }).fill(0)

    dp[0] = 1;

    for (let i = 1; i <= target; i++) {
        for (let j = 0; j < nums.length; j++) {
            const num = nums[j];
            if (num > i) {
                continue;
            }

            console.log('target: %d, num: %d, dp[i-num]: %d', i, num, dp[i-num])
            dp[i] += dp[i-num]
        }
        console.log('-----------%d-----------', i, dp)
    }

    console.log(dp, dp[target])
    return dp[target];
}

console.log(combinationSum4([1, 2, 3], 4))