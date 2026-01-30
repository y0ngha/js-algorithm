/**
 * @Title: 8. String to Integer (atoi)
 * @Link: https://leetcode.com/problems/string-to-integer-atoi/description/
 * @Solved: Jan 28, 2026 23:11
 */

function myAtoi(s: string): number {
    const array: string[] = [];
    const trimmed = s.trim();

    const isInt32 = (n: number) => {
        return Number.isInteger(n) && n >= -2147483648 && n <= 2147483647;

    }


    for (let i = 0; i < trimmed.length; i++) {
        const c = trimmed[i]!;

        if (c === '-' || c === '+' || c === ' ') {
            if (i === 0) {
                if (c === '-') {
                    array.push('-');
                }
                continue;
            } else {
                break;
            }
        }

        const number = Number(c);

        if (isNaN(number) || !isFinite(number)) {
            break;
        }

        array.push(c);
    }

    if (array.length === 0) {
        return 0;
    }

    const result = Number(array.join(''));

    if (isNaN(result)) {
        return 0
    }

    if (!isInt32(result)) {
        if (result < 0) {
            return -2147483648;
        } else {
            return 2147483647
        }
    }

    return result;
}

console.log(myAtoi("42"))