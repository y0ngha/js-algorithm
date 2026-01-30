/**
 * @Title: 120. Triangle
 * @Link: https://leetcode.com/problems/triangle/description/
 * @Solved: Jan 30, 2026 04:36
 */

function minimumTotal(triangle: number[][]): number {

    const colLength = triangle.length;

    for (let i = 1; i < colLength; i++) {
        const lineLength = triangle[i]!.length

        for (let j = 0; j < lineLength; j++) {
            if (j === 0) {
                triangle[i][j] += triangle[i-1][j];
            } else if ( j === lineLength - 1) {
                triangle[i][j] += triangle[i-1][j-1];
            } else {
                triangle[i][j] += Math.min(triangle[i-1][j-1], triangle[i-1][j])
            }
        }

    }

    return Math.min(...triangle[colLength-1]);
}

console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))