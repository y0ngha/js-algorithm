/*
'1'(땅)과 '0'(물)으로 이루어진 m x n 크기의 2차원 이진 격자가 주어졌을 때, 격자 안에 있는 섬의 개수를 반환하세요.
섬은 물로 둘러싸여 있으며, 인접한 땅들을 가로 또는 세로로 연결하여 형성됩니다. 격자의 네 변 모두 물로 둘러싸여 있다고 가정할 수 있습니다.

예시 1:

입력: grid = [
["1","1","1","1","0"],
["1","1","0","1","0"],
["1","1","0","0","0"],
["0","0","0","0","0"]
]
출력: 1
예시 2:

입력: grid = [
["1","1","0","0","0"],
["1","1","0","0","0"],
["0","0","1","0","0"],
["0","0","0","1","1"]
]
출력: 3

제약 조건:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j]는 '0' 또는 '1'입니다.

1. 섬을 발견하기 시작하면 뒤엎어버리자.
2. 모두 다 0으로 만들고, 재귀함수를 통해 행/열을 1씩 더하며 1인지 검사하고 1이라면 뒤엎는다.
3. 끝나면 섬 갯수를 올린다.
 */

/**
 * @Title: 200. Number of Islands
 * @Link: https://leetcode.com/problems/number-of-islands/description/
 * @Solved: Feb 15, 2026 21:06
 */

function numIslands(grid: string[][]): number {
    let islandsCount = 0;

    const dfs = (row: number, col: number) => {
        console.log(grid[row][col], row, col)
        if (grid[row][col] === '0') {
            return;
        }

        grid[row][col] = '0';

        if (row !== grid.length - 1) {
            dfs(row + 1, col);
        }

        if (row !== 0) {
            dfs(row - 1, col);
        }

        if (col !== grid[0].length - 1) {
            dfs(row, col + 1);
        }

        if (col !== 0) {
            dfs(row, col - 1);
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') { // 1을 발견하면
                islandsCount++;
                dfs(i, j)

                console.log(grid)
            }
        }
    }

    return islandsCount;
}

console.log(numIslands([
    ["1", "1", "1"],
    ["0", "1", "0"],
    ["1", "1", "1"]]))