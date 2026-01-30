/**
 * @Title: 125. Valid Palindrome
 * @Link: https://leetcode.com/problems/valid-palindrome/description/
 * @Solved: Jan 28, 2026 22:57
 */

function isPalindrome(s: string): boolean {
    const onlyEngInt = s.match(/[a-z0-9]+/gi)?.join('').toLowerCase()

    if (!onlyEngInt) {
        return true;
    }

    let start = 0;
    let end = (onlyEngInt?.length ?? 0) - 1

    while (start < end) {
        if (onlyEngInt?.[start] !== onlyEngInt?.[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))