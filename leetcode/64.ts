/**
 * @Title: 64. Minimum Path Sum
 * @Link: https://leetcode.com/problems/minimum-path-sum/description/
 * @Solved: Jan 30, 2026 03:59
 */

function minPathSum(grid: number[][]): number {
    const colLength = grid.length;
    const lineLength = grid[0]!.length;

    for (let i = 1; i < colLength; i++) {
        grid[i][0] += grid[i-1][0]
    }

    for (let j = 1; j < lineLength; j++) {
        grid[0][j] += grid[0][j-1]
    }

    for (let i = 1; i < colLength; i++) {
        for (let j = 1; j < lineLength; j++) {
            const top = grid[i-1][j];
            const left = grid[i][j-1];

            grid[i][j] += Math.min(top, left)
        }
    }

    return grid[colLength-1][lineLength-1]
}

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))