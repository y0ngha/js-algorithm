/**
 * @Title: 38. Count and Say
 * @Link: https://leetcode.com/problems/count-and-say/description/
 * @Solved: Jan 28, 2026 23:34
 */

function countAndSay(n: number): string {
    let str = '1';
    if (n === 1) {
        return str;
    }

    const recursive = (n: number) => {
        console.log('N ->>>>>>>>>>>>>', n)
        const array = [];
        let previousNumber = 0;
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            const c = str[i];
            const number = Number(c)
            console.log(i, number, previousNumber)
            if (number !== previousNumber) {
                if (previousNumber !== 0) {
                    array.push(`${count}${previousNumber}`)
                }
                count = 1;
                previousNumber = number;
            } else {
                count++;
            }
        }
        array.push(`${count}${previousNumber}`)
        str = array.join('')

        if (n !== 1) {
            recursive(n - 1);
        }
    }

    recursive(n-1)

    return str
}

console.log(countAndSay(1211))