/*
'(', ')', '{', '}', '[', ']' 문자만으로 구성된 문자열 s가 주어졌을 때, 입력 문자열이 유효한지 판별하세요.
입력 문자열이 유효한 경우는 다음과 같습니다.
여는 괄호는 같은 종류의 괄호로 닫아야 합니다.
여는 괄호는 올바른 순서로 닫아야 합니다.
모든 닫는 괄호에는 같은 종류의 여는 괄호가 대응해야 합니다.

예시 1:
입력: s = "()"
출력: true

예시 2:
입력: s = "()[]{}"
출력: true

예시 3:
입력: s = "(]"
출력: false

예시 4:
입력: s = "([])"
출력: true

예시 5:
입력: s = "([)]"
출력: false

제약 조건:

1 <= s.length <= 104
s는 괄호 '()[]{}'로만 구성되어야 합니다.
 */
/**
 * @Title: 20. Valid Parentheses
 * @Link: https://leetcode.com/problems/valid-parentheses/description/
 * @Solved: Feb 17, 2026 19:30
 */

function isValid(s: string): boolean {
    const arr: string[] = [];

    const set = {
        '}': '{',
        ')': '(',
        ']': '['
    }

    if (s.length % 2 !== 0) return false

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char === '}' || char === ')' || char === ']') {
            const openedIndex = arr.lastIndexOf(set[char])
            if (openedIndex === -1) {
                return false;
            }

            if (arr.slice(openedIndex + 1, i).length > 0) {
                return false;
            }

            arr.splice(openedIndex, 1)
        } else {
            arr.push(char)
        }
    }

    return arr.length === 0
}

console.log(isValid('([)]'))