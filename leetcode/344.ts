/**
 * @Title: 344. Reverse String
 * @Link: https://leetcode.com/problems/reverse-string/description/
 * @Solved: Jan 28, 2026 22:19
 */

/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let start = 0;
    let end = s.length - 1;

    while (start < end) {
        [s[start], s[end]] = [s[end], s[start]]
        start++;
        end--;
    }
}

console.log(reverseString(["h","e","l","l","o"]))