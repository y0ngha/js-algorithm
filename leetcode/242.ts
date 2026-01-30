/**
 * @Title: 242. Valid Anagram
 * @Link: https://leetcode.com/problems/valid-anagram/description/
 * @Solved: Jan 28, 2026 22:42
 */

function isAnagram(s: string, t: string): boolean {
    const map = new Map<string, number>();

    if (s.length !== t.length) {
        return false;
    }

    for (const c of s) {
        map.set(c, (map.get(c) ?? 0) + 1)
    }

    for (const c of t) {
        const count = map.get(c);

        if (!count) { // 다 소모하거나 없다면
            return false;
        }

        map.set(c, count - 1);
    }

    return true;
}

console.log(isAnagram("anagram", "nagaram"))