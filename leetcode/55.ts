/*
정수 배열 `nums`가 주어집니다. 초기 위치는 배열의 첫 번째 인덱스이며, 배열의 각 요소는 해당 위치에서 이동할 수 있는 최대 거리를 나타냅니다.
마지막 인덱스에 도달할 수 있으면 `true`를, 그렇지 않으면 `false`를 반환합니다.

예시 1:
입력: `nums = [2,3,1,1,4]`
출력: `true`
설명: 0번 인덱스에서 1번 인덱스로 1칸 이동한 후, 3칸 이동하여 마지막 인덱스에 도달합니다.

예시 2:
입력: `nums = [3,2,1,0,4]`
출력: `false`
설명: 어떤 경우에도 항상 3번 인덱스에 도달합니다. 3번 인덱스의 최대 이동 거리는 0이므로 마지막 인덱스에 도달하는 것은 불가능합니다.

1. true, false를 나타낸다. Boolean Array. 배열의 길이는 nums.length + 1 만큼으로 잡는다.
2. dp[i]의 정의는 i번째 칸을 올 수 있는가를 의미한다.
3. nums[i]는 최대 도약 거리다. for문 2개가 필요할 것 같다. i는 nums를 순회하며 i까지 가는 것을 목표로 하는 것이고,
내부 j는 0 ~ i - 1까지 돌며 i를 도착할 수 있는지 검사하는 장치다.
dp[j]로 j까지 온 적이 있고, nums[j](위치에서 뛸 수 있는 거리)와 j(위치)를 더했을 때 i 이상이라면 true가 된다.
4. dp[0]은 true다. 0칸에는 기본적으로 있기 때문이다.
 */

/**
 * @Title: 55. Jump Game
 * @Link: https://leetcode.com/problems/jump-game/description/
 * @Solved: Feb 11, 2026 04:08
 */

function canJump(nums: number[]): boolean {
    let dp: boolean[] = Array.from<boolean>({length: nums.length}).fill(false);
    dp[0] = true;

    if (nums.length <= 1) {
        return true;
    }

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && j + nums[j] >= i) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[nums.length-1]
}

console.log(canJump([2, 3, 1, 1, 4]))