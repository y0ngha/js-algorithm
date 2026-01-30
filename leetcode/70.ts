/**
 * @Title: 70. Climbing Stairs
 * @Link: https://leetcode.com/problems/climbing-stairs/description/
 * @Solved: Jan 29, 2026 03:54
 */

function climbStairs(n: number): number {

    if (n <= 2) return n;

    let first = 1;  // n-2의 값
    let second = 2; // n-1의 값

    for (let i = 3; i <= n; i++) {
        const current = first + second;
        first = second;
        second = current;
    }

    return second;
}

console.log(climbStairs(2))