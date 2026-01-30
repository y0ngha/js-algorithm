/**
 * @Title: 387. First Unique Character in a String
 * @Link: https://leetcode.com/problems/first-unique-character-in-a-string/description/
 * @Solved: Jan 28, 2026 22:36
 */

function firstUniqChar(s: string): number {
    const map = new Map<string, number>() // key = 문자(char), value = 빈도수

    for (const c of s) {
        map.set(c, (map.get(c) ?? 0) + 1)
    }


    for (let i = 0; i < s.length; i++) {
        const c = s[i]!;

        if ((map.get(c) ?? 0) === 1) {
            return i;
        }
    }

    return -1;
}

console.log(firstUniqChar("leetcode"))