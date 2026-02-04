/**
 * @Title: 416. Partition Equal Subset Sum
 * @Link: https://leetcode.com/problems/partition-equal-subset-sum/description/
 * @Solved: Feb 05, 2026 04:00
 */
function canPartition(nums: number[]): boolean {
    // 홀수면 무조건 실패임
    const sum = nums.reduce((prev, curr) => prev + curr, 0);
    if (sum % 2 !== 0) {
        return false;
    }

    const target = sum / 2;
    let dp: boolean[] = new Array(target + 1).fill(false)
    dp[0] = true;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        for (let k = target; k >= num; k--) {
            if (dp[k - num]) {
                dp[k] = true;
            }
        }
    }

    return dp[target];
}

console.log(canPartition([1, 5, 11, 5]))