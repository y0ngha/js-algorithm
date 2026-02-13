/*
주어진 문자열 s에서 중복 문자가 없는 가장 긴 부분 문자열의 길이를 찾으세요.

예시 1:

입력: s = "abcabcbb"
출력: 3
설명: 정답은 "abc"이며 길이는 3입니다. "bca"와 "cab"도 정답입니다.

예시 2:
입력: s = "bbbbb"
출력: 1
설명: 정답은 "b"이며 길이는 1입니다.

예시 3:
입력: s = "pwwkew"
출력: 3
설명: 정답은 "wke"이며 길이는 3입니다.

정답은 반드시 부분 문자열이어야 합니다. "pwke"는 부분 문자열이 아니라 부분 시퀀스입니다.

제약 조건:
0 <= s.length <= 5 * 10⁴
s는 영문자, 숫자, 기호 및 공백으로 구성됩니다.


Greedy 실패, DP 실패,
 */

/**
 * @Title: 3. Longest Substring Without Repeating Characters
 * @Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 * @Solved: Feb 13, 2026 19:08
 */

function lengthOfLongestSubstring(s: string): number {
    if (s.length < 2) {
        return s.length;
    }

    const map = new Map<string, number>() // char: index
    let max = 0;
    let left = 0;

    const isDuplicateChar = (char: string): boolean => {
        return map.has(char)
    }

    const isInWindow = (duplicatedCharIndex: number, left: number) => {
        return duplicatedCharIndex >= left;
    }

    const getCharIndex = (char: string): number => {
        return map.get(char)
    }

    const renewMax = (left: number, right: number) => {
        max = Math.max(max, right - left + 1)
    }

    const add = (char: string, index: number) => {
        map.set(char, index)
    }

    const increseLeft = (index: number) => {
        left = index + 1;
    }


    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        if (isDuplicateChar(char)) {
            const index = getCharIndex(char);
            if (isInWindow(index, left)) {
                increseLeft(index);
            }
        }
        add(char, right)
        renewMax(left, right)
    }

    return max;
}

console.log(lengthOfLongestSubstring('dvafvade'))