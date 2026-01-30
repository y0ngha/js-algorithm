/**
 * @Title: 7. Reverse Integer
 * @Link: https://leetcode.com/problems/reverse-integer/description/
 * @Solved: Jan 28, 2026 22:24
 */

function reverse(x: number): number {
    const array = [];
    for (const n of x.toString()) {
        if (n !== '-') {
            array.push(n);
        }
    }

    const isInt32 = (n: number) => {
        return Number.isInteger(n) && n >= -2147483648 && n <= 2147483647;
    }

    array.reverse();

    if (x < 0) {
        array.unshift('-')
    }

    const result =  Number(array.join(''))

    return isInt32(result) ? result : 0
}

console.log(reverse(123))