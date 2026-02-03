/**
 * @Title: 1143. Longest Common Subsequence
 * @Link: https://leetcode.com/problems/longest-common-subsequence/description/
 * @Solved: Feb 04, 2026 02:55
 */

function longestCommonSubsequence(text1: string, text2: string): number {
    let dp: number[][] = []

    for (let i = 0; i < text2.length + 1; i++) {
        dp.push(new Array(text1.length + 1).fill(0))
    }

    for (let col = 1; col <= text2.length; col++) {
        for (let row = 1; row <= text1.length; row++) {
            if (text1[row-1] === text2[col-1]) {
                dp[col][row] = dp[col - 1][row - 1] + 1;
            } else {
                dp[col][row] = Math.max(dp[col - 1][row], dp[col][row - 1])
            }
        }
    }

    return dp[text2.length][text1.length]
}

console.log(longestCommonSubsequence("bl", "yby"))
