/**
 * @Title: 63. Unique Paths II
 * @Link: https://leetcode.com/problems/unique-paths-ii/description/
 * @Solved: Jan 30, 2026 03:37
 */

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {

    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;

    if (obstacleGrid[m - 1][n - 1] === 1 || obstacleGrid[0][0] === 1) {
        return 0
    }

    for (let i = 1; i < m; i++) {
        if (obstacleGrid[i][0] === 1) {
            for (let j = i; j < m; j++) {
                obstacleGrid[j][0] = 0;
            }
            break;
        } else {
            obstacleGrid[i][0] = 1;
        }
    }

    for (let i = 0; i < n; i++) {
        if (obstacleGrid[0][i] === 1) {
            for (let j = i; j < n; j++) {
                obstacleGrid[0][j] = 0;
            }
            break;
        } else {
            obstacleGrid[0][i] = 1;
        }
    }


    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                obstacleGrid[i][j] = 0
            } else {
                obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]
            }
        }
    }

    return obstacleGrid[m - 1][n - 1]
}

console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]))