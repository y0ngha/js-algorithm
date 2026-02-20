/*
주어진 문자열 s에서 앞뒤로 읽어도 같은 회문 부분 문자열의 개수를 반환합니다.

문자열은 앞뒤로 읽어도 같은 문자열입니다.

부분 문자열은 문자열 내에서 연속된 문자들의 순서입니다.

예시 1:

입력: s = "abc"
출력: 3
설명: 세 개의 회문 문자열: "a", "b", "c"

예시 2:

입력: s = "aaa"
출력: 6
설명: 여섯 개의 회문 문자열: "a", "a", "a", "aa", "aa", "aaa"

제약 조건:

1 <= s.length <= 1000
s는 소문자 영문자로만 이루어져 있습니다.
 */

/**
 * @Title: 647. Palindromic Substrings
 * @Link: https://leetcode.com/problems/palindromic-substrings/description/
 * @Solved: Feb 20, 2026 20:24
 */

function countSubstrings(s: string): number {
    if (s.length === 1) {
        return 1;
    }

    if (s.length === 2) {
        return s[0] === s[1] ? 3 : 2;
    }

    let dp = Array.from({length: s.length}, () => new Array<boolean>(s.length).fill(false))
    let count = 0;

    for (let i = 0; i < dp.length; i++) {
        dp[i][i] = true;
        count++;
    }

    for (let i = dp.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < dp.length; j++) {
            const len = j - i + 1
            dp[i][j] = len === 2 ? s[i] === s[j] : s[i] === s[j] && dp[i + 1][j - 1]
            if (dp[i][j]) {
                count++;
            }
        }
    }

    return count;
}

console.log(countSubstrings('abc'));