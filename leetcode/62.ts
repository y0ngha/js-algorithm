/**
 * @Title: 62. Unique Paths
 * @Link: https://leetcode.com/problems/unique-paths/description/
 * @Solved: Jan 30, 2026 00:21
 */

function uniquePaths(m: number, n: number): number {
    let dp: number[][] = new Array<number[]>();

    for (let i = 0; i < m; i++) {
        const array = new Array<number>(n).fill(i === 0 ? 1 : 0);
        array[0] = 1;
        dp.push(array)
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }

    return dp[m - 1][n - 1]
}

console.log(uniquePaths(3, 7))