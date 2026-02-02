/**
 * @Title: 931. Minimum Falling Path Sum
 * @Link: https://leetcode.com/problems/minimum-falling-path-sum/description
 * @Solved: Feb 03, 2026 02:52
 */

function minFallingPathSum(matrix: number[][]): number {
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (j === 0) { // 시작이면 왼쪽 위가 없다
                matrix[i][j] += Math.min(matrix[i-1][j], matrix[i-1][j+1])
            } else if (j === matrix[0].length - 1) { // 끝이면 오른쪽 위가 없고
                matrix[i][j] += Math.min(matrix[i-1][j-1], matrix[i-1][j])
            } else {
                matrix[i][j] += Math.min(Math.min(matrix[i-1][j-1], matrix[i-1][j]), matrix[i-1][j+1])
            }
        }
    }

    return Math.min(...matrix[matrix.length-1])
}

console.log(minFallingPathSum([[2, 1, 3], [6, 5, 4], [7, 8, 9]]))