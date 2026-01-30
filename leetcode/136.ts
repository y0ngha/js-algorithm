/**
 * @Title: 136. Single Number
 * @Link: https://leetcode.com/problems/single-number/description/
 * @Solved: Jan 28, 2026 03:15
 */

function singleNumber(nums: number[]): number {
    const checkObj = new Map<number, number>();

    nums.forEach(num => {
        const value = checkObj.get(num);
        if (value == null)
            checkObj.set(num, 1)
        else
            checkObj.set(num, value + 1)
    })

    for (const [num, count] of checkObj) {
        if (count === 1)
            return num;
    }

    return -1;
}

console.log(singleNumber([2,2,1]))