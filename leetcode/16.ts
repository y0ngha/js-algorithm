/*
nums 길이가 인 정수 배열 n과 정수가 어떻게 생겼을 때 대상, 배열이 서로 다른 것과 에 있는 세 정수의 합이 에 nums가 장대 세 정수를 찾으십시오 대상.
세 정수를 반환합니다.
각 입력값에는 정확히 하나가 있다고 가정할 수 있습니다.

예시 1:
입력: nums = [-1,2,1,-4], 목표값 = 1
출력: 2
설명: 목표값에 가장 합은 2입니다. (-1 + 2 + 1 = 2).

예시 2:
입력: 숫자 = [0,0,0], 대상 = 1
출력: 0
설명: 목표값에 가장 합은 0입니다. (0 + 0 + 0 = 0).

비교 결과:

3 <= 숫자.길이 <= 500
-1000 <= 숫자[i] <= 1000
-104 <= 대상 <= 104
 */
/**
 * @Title: 16. 3Sum Closest
 * @Link: https://leetcode.com/problems/3sum-closest/
 * @Solved: Mar 01, 2026 17:51
 */

function threeSumClosest(nums: number[], target: number): number {
    if (nums.length === 3) {
        return nums[0] + nums[1] + nums[2];
    }

    const sortedNums = [...nums].sort((a, b) => a - b);

    // console.log(sortedNums)
    let approximation = sortedNums[0] + sortedNums[1] + sortedNums[2];
    let targetMinusApproximation = target - approximation;

    for (let i = 0; i < sortedNums.length; i++) {
        const num = sortedNums[i];

        let left = i + 1;
        let right = sortedNums.length - 1;

        while (left < right) {
            const leftNum = sortedNums[left];
            const rightNum = sortedNums[right];

            const sum = num + leftNum + rightNum;

            const targetMinusSum = target - sum;


            // console.log(`num=${num}, leftNum=${leftNum}, rightNum=${rightNum}, sum=${sum}, target=${target}, approximation=${approximation} Math.abs(target - sum)=${Math.abs(targetMinusSum)}/${targetMinusSum} Math.abs(target - approximation)=${Math.abs(targetMinusApproximation)}/${targetMinusApproximation}`)

            if (sum < target) {
                // target이 더 크다면, left를 늘려서 절대값을 늘려준다.
                left++;
            } else {
                // target이 더 작다면, right를 줄여서 절대값을 줄여준다.
                right--;
            }

            if (Math.abs(targetMinusSum) < Math.abs(targetMinusApproximation)) {
                // 신규 값이 더 근사값에 가깝다면... 저장한다.
                approximation = sum;
                targetMinusApproximation = target - approximation;
            }
        }
    }

    return approximation
}

console.log(threeSumClosest([-84, 92, 26, 19, -7, 9, 42, -51, 8, 30, -100, -13, -38]
    , 78))

/*
[-5, -5, -4, 0, 0, 3,  3, 4, 5]
-5 -5 -4
-5 -4 0
-4 0 0
0 0 3
0 3 3
3 3 4
3 4 5
*/

