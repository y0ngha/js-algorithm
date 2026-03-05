/*
주어진 정수 배열에서 nums다음 조건을 만족하는 모든 고유한 네 쌍의 정수 를n 배열로 반환하세요 . [nums[a], nums[b], nums[c], nums[d]]

0 <= a, b, c, d < n
a, b, c, 는 d서로 다릅니다 .
nums[a] + nums[b] + nums[c] + nums[d] == target
답변은 어떤 순서 로든 제출하셔도 됩니다 .



예시 1:

입력: nums = [1,0,-1,0,-2,2], 목표값 = 0
 출력: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
예시 2:

입력: nums = [2,2,2,2,2], 목표값 = 8
 출력: [[2,2,2,2]]
 */

/**
 * @Title: 18. 4Sum
 * @Link: https://leetcode.com/problems/4sum/
 * @Solved: Mar 05, 2026 18:48
 */

function fourSum(nums: number[], target: number): number[][] {
    if (nums.length < 4) {
        return [];
    }

    const answers = [];
    const sortedNums = [...nums].sort((a, b) => a - b)
    const visited = new Map<string, boolean>();

    // console.log(sortedNums)
    for (let i = 0; i < sortedNums.length - 3; i++) {
        const iNum = sortedNums[i];

        if (0 < i && sortedNums[i - 1] == iNum) {
            continue
        }

        // console.log(`iNum=${iNum}`)
        for (let j = i + 1; j < sortedNums.length - 2; j++) {
            const jNum = sortedNums[j];
            // console.log(`jNum=${jNum}`)
            if (i + 1 < j && sortedNums[j - 1] == jNum) {
                continue
            }
            // console.log('Continue')
            let left = j + 1;
            let right = sortedNums.length - 1;

            while (left < right) {
                const leftNum = sortedNums[left]
                const rightNum = sortedNums[right]
                // console.log(`iNum=${iNum} jNum=${jNum} ---> leftNum=${leftNum} rightNum=${rightNum}`)
                const sum = iNum + jNum + leftNum + rightNum;
                const key = `${iNum}${jNum}${leftNum}${rightNum}`
                // console.log(`sum=${sum} visited.has(key)=${visited.has(key)}`)

                if (sum === target) {
                    if (!visited.has(key)) {
                        visited.set(key, true)
                        answers.push([iNum, jNum, leftNum, rightNum])
                    }
                    left++;
                } else if (sum < target) {
                    // target이 더 크다면, left를 늘려본다.
                    // console.log('left++;')
                    left++;
                } else if (target < sum) {
                    // target이 더 작다면, right를 줄여본다.
                    // console.log('right--;')
                    right--;
                }
            }
        }
    }

    return answers;
}

console.log(fourSum([-2, -1, -1, 1, 1, 2, 2], 0))
