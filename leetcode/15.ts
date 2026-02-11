/*
정수 배열 nums가 주어졌을 때,
i != j, i != k, j != k이고,
nums[i] + nums[j] + nums[k] == 0인
모든 세 쌍 [nums[i], nums[j], nums[k]]을 반환하세요.

반복되는 세 쌍이 없어야 합니다.

예시 1:
입력: nums = [-1,0,1,2,-1,-4]
출력: [[-1,-1,2],[-1,0,1]]
설명:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
서로 다른 세 쌍은 [-1,0,1]과 [-1,-1,2]입니다.
출력 순서와 세 쌍의 순서는 중요하지 않습니다.

예제 2:
입력: nums = [0,1,1]
출력: []
설명: 가능한 세 숫자의 합이 0이 아닌 경우만 가능합니다.

예제 3:
입력: nums = [0,0,0]
출력: [[0,0,0]]
설명: 가능한 세 숫자의 합이 0인 경우만 가능합니다.

1. 숫자는 반복해서 사용해도 된다. 다만, 한 배열 안에 i, j, k는 서로 달라야한다.(배열에서 똑같은 위치의 요소를 두 번 이상 뽑으면 안 된다)
2. 세 쌍이 만들어졌다면, 이는 반복되어선 안된다.
3. [x, y, z] 라고 명칭읇 변경했을 때 x를 고정한다면, 결국 y+z의 합을 구해 x와 더했을 때 0이 되는걸 찾아야한다.
 */

/**
 * @Title: 15. 3Sum
 * @Link: https://leetcode.com/problems/3sum/description/
 * @Solved: Feb 11, 2026 18:56
 */

function threeSum(nums: number[]): number[][] {
    let answers: number[][] = [];
    const answersMap: Map<string, boolean> = new Map()

    const sortedNums = nums.sort((a, b) => a - b)

    for (let i = 0; i < sortedNums.length; i++) {
        const num = sortedNums[i];

        if (i > 0 && num === sortedNums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = sortedNums.length - 1;
        while (left < right) {
            const leftNum = sortedNums[left];
            const rightNum = sortedNums[right];
            const threeSum = num + leftNum + rightNum;

            if (threeSum === 0) {
                const key = `${num}${leftNum}${rightNum}`;
                if (answersMap.get(key) !== true) {
                    answers.push([num, leftNum, rightNum]);
                    answersMap.set(key, true)
                }
                left += 1;
                right -= 1;
            } else if (threeSum > 0) {
                right -= 1;
            } else {
                left += 1;
            }
        }
    }

    return answers
}

console.log(threeSum([1, 2, 0, 1, 0, 0, 0, 0]))

