/**
 *  * @Title: 91. Decode Ways
 *  * @Link: https://leetcode.com/problems/decode-ways/description/
 *  * @Solved: Feb 03, 2026 02:43
 *  */
function numDecodings(s: string): number {
    const dp: number[] = new Array(s.length + 1).fill(0);

    if (s[0] === '0') {
        return 0;
    }

    dp[0] = 1;
    dp[1] = 1; // 첫 번째 문자열 해석 가능 수

    const isInRangeDoubleDigits = (n: number) => {
        return 10 <= n && n <= 26
    }

    const isInRangeSingleDigits = (n: number) => {
        return 1 <= n && n <= 9
    }

    for (let i = 2; i <= s.length; i++) {
        if (isInRangeSingleDigits(Number(s[i-1]))) {
            dp[i] += dp[i-1];
        }

        if (isInRangeDoubleDigits(Number(`${s[i-2]}${s[i-1]}`))) {
            dp[i] += dp[i-2];
        }
    }

    return dp[s.length]
}

console.log(numDecodings("10"))

