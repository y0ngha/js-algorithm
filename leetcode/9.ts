/*
주어진 정수 x가 회문이면 true를, 그렇지 않으면 false를 반환합니다.

예시 1:
입력: x = 121
출력: true
설명: 121은 왼쪽에서 오른쪽으로 읽어도, 오른쪽에서 왼쪽으로 읽어도 121입니다.

예시 2:
입력: x = -121
출력: false
설명: 왼쪽에서 오른쪽으로 읽으면 -121이고, 오른쪽에서 왼쪽으로 읽으면 121-이 됩니다. 따라서 회문이 아닙니다.

예시 3:

입력: x = 10
출력: false
설명: 오른쪽에서 왼쪽으로 읽으면 01이 됩니다. 따라서 회문이 아닙니다.
 */

/**
 * @Title: 9. Palindrome Number
 * @Link: https://leetcode.com/problems/palindrome-number/submissions/1928423603/
 * @Solved: Feb 23, 2026 20:12
 */

function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false;
    }

    if (x < 10) {
        return true;
    }

    if (10 <= x && x < 100) {
        return x % 11 === 0;
    }

    const validPalindrome = (str: string): boolean => {
        let left = 0;
        let right = str.length - 1;

        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }

    return validPalindrome(x.toString())
}

console.log(isPalindrome(121), isPalindrome(-121), isPalindrome(10))