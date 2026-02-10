/*
주어진 문자열 s와 문자열 사전 wordDict가 주어졌을 때, s를 하나 이상의 사전 단어로 이루어진 공백으로 구분된 시퀀스로 분할할 수 있다면 true를 반환합니다.
사전에 있는 동일한 단어는 분할 과정에서 여러 번 재사용될 수 있습니다.

예시 1:
입력: s = "leetcode", wordDict = ["leet","code"]
출력: true
설명: "leetcode"는 "leet code"로 분할될 수 있으므로 true를 반환합니다.

예시 2:
입력: s = "applepenapple", wordDict = ["apple","pen"]
출력: true
설명: "applepenapple"은 "apple pen apple"로 분할될 수 있으므로 true를 반환합니다.
사전 단어를 재사용할 수 있습니다.

예제 3:
입력: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
출력: false

제약 조건:

1 <= s.length <= 300
1 <= wordDict.length <= 1000
1 <= wordDict[i].length <= 20
s와 wordDict[i]는 모두 소문자 영문자로만 구성됩니다.
wordDict의 모든 문자열은 고유해야 합니다.

1. 가능한지, 불가능한지를 반환해라. Boolean
2. 입력은 s와 wordDict가 있고, wordDict는 string[]이다.
3. 배열은 s.length + 1 만큼 선언되어야하고, dp[i]는 s[i]번째까지를 wordDict에 있는 것으로 구성할 수 있는가를 의미한다.
4. dp[i]는 문자열 s의 앞에서부터 i개의 글자(s.substring(0, i))를 사전에 있는 단어들로 쪼갤 수 있는가? (True/False)
4. 사전에 있는 단어는 무한히 재사용 가능하다.
5. 점화식: dp[i] = dp[j] === true && wordDict.includes(s.substring(j, i))
6. i = 1 ~ s.length까지 돌고, j는 0부터 i까지 돌린다.
 */

/**
 * @Title: 139. Word Break
 * @Link: https://leetcode.com/problems/word-break/description/
 * @Solved: Feb 10, 2026 21:50
 */

function wordBreak(s: string, wordDict: string[]): boolean {
    let dp: boolean[] = Array.from<boolean>({length: s.length + 1}).fill(false);
    dp[0] = true;

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            console.log(j, i, s.substring(j, i), wordDict.includes(s.substring(j, i)), dp[j])
            if (dp[j] && wordDict.includes(s.substring(j, i))) {
                dp[i] = true
                break;
            }
        }
    }

    console.log(dp)
    return dp[s.length]
}

console.log(wordBreak('aaaaaaa', ["aaaa", "aaa"]))