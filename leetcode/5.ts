/*
주어진 문자열 s에서 가장 긴 회문 부분 문자열을 반환합니다.

예시 1:

입력: s = "babad"
출력: "bab"
설명: "aba"도 유효한 답입니다.

예시 2:

입력: s = "cbbd"
출력: "bb"

제약 조건:

1 <= s.length <= 1000
s는 숫자와 영문자로만 구성되어야 합니다.
 */

/**
 * @Title: 5. Longest Palindromic Substring
 * @Link: https://leetcode.com/problems/longest-palindromic-substring/
 * @Solved: Feb 18, 2026 03:34, Feb 18, 2026 18:41
 */

function longestPalindrome(s: string): string {
    if (s.length < 2) {
        return s;
    }

    let answer: string = '';
    let max = 0;
    const validPalindrome = (s: string) => {
        let start = 0;
        let end = s.length - 1

        while (start < end) {
            if (s[start] !== s[end]) {
                return false;
            }
            start++;
            end--;
        }

        return true;
    }

    for (let i = 0; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            const str = s.slice(j, i)
            console.log(str, i, j, validPalindrome(str))
            if (validPalindrome(str)) {
                if (i - j > max) {
                    answer = str
                    max = i - j
                }
                break;
            }
        }
    }

    return answer;
}

/*
do[i][j] = i...j 까지 회문인지 여부
점화식 = dp[i][j] = s[i] === s[j] && dp[i+1][j-1]
회문 조건
- 양 끝 글자가 같고, 그 사이가 회문이어야 한다.
- 길이가 2라면 양 옆 글자만 맞으면 됨.

i=0, j=2 -> 0(a) ~ (b) ~ 2(a) = aba로 양 끝 글자가 같고, [1...1](b)이 T니까 True.
(ababa)
i/j  0  1  2  3  4
0    T  F  T  F  T
1       T  F  T  F
2          T  F  T
3             T  F
4                T

 */
function longestPalindromeDP(s: string): string {
    if (s.length < 1) {
        return s;
    }

    if (s.length === 2) {
        return s[0] === s[1] ? s : s[0];
    }

    let dp = Array.from({length: s.length}, () => new Array<boolean>(s.length).fill(false))
    let start = 0;
    let end = 0;
    let maxLen = 0;

    for (let i = 0; i < dp.length; i++) {
        dp[i][i] = true;
    }


    console.log(dp.length, dp.length - 1, '--')
    for (let i = dp.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < dp.length; j++) {
            const len = j - i + 1
            dp[i][j] = len === 2 ? s[i] === s[j] : s[i] === s[j] && dp[i + 1][j - 1]
            console.log(i, j, len === 2, s[i] === s[j], len, maxLen, dp[i][j])
            if (dp[i][j]) {
                if (len > maxLen) {
                    console.log('변경변경~!', i, j, len)
                    maxLen = len;
                    start = i;
                    end = j;
                }
            }
        }
    }
    console.log(dp)
    console.log(start, end, s.substring(start, end+1))
    return s.substring(start, end+1);
}

console.log(longestPalindromeDP('cbbd'));