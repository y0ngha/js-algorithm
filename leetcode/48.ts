/**
 * @Title: 48. Rotate Image
 * @Link: https://leetcode.com/problems/rotate-image/description/
 * @Solved: Jan 28, 2026 22:17
 */

/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    const snapshot = matrix.map(m => [...m])

    const getRotate90degLine = (index: number): number[] => {
        const array = [];
        for (const col of snapshot) {
            const number = col[index]!
            array.push(number)
        }

        return array.reverse();
    }

    for (let i = 0; i < matrix.length; i++) {
        const line = getRotate90degLine(i);
        for (let j = 0; j < line.length; j++) {
            matrix[i][j] = line[j];
        }
    }
}

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))