/**
 * @Title: 66. Plus One
 * @Link: https://leetcode.com/problems/plus-one/description/
 * @Solved: Jan 28, 2026 03:48
 */

function plusOne(digits: number[]): number[] {
    const sum = (array: number[], index: number) => {
        array[index] += 1;

        if (array[index] === 10) {
            array[index] = 0;
            // 이전이 9였다면
            if (index !== 0) {
                sum(array, index - 1) // 이전꺼도 1을 더해준다.
            } else {
                array.unshift(1)
            }
        }
    }

    sum(digits, digits.length - 1);

    return digits;
}

console.log(plusOne([1,2,3]))