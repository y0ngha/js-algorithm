/*
m x n 크기의 문자 격자판과 문자열 'word'가 주어졌을 때, 'word'가 격자판에 존재하면 true를 반환합니다.

단어는 연속적으로 인접한 셀의 문자들로 구성될 수 있으며, 여기서 인접한 셀은 가로 또는 세로로 이웃한 셀입니다. 같은 문자가 있는 셀은 두 번 이상 사용될 수 없습니다.

예시 1:

입력: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
출력: true
예시 2:

입력: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
출력: true
예시 3:

입력: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
출력: false

제약 조건:

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board와 word는 모두 소문자로만 구성됩니다. 대문자 영어 알파벳.
 */

/**
 * @Title: 79. Word Search
 * @Link: https://leetcode.com/problems/word-search/
 * @Solved: Feb 15, 2026 22:48
 */

function exist(board: string[][], word: string): boolean {
    const dfs = (row: number, col: number, nextCharIndex: number) => {
        // console.log(`Check word...[${nextCharIndex}](${word[nextCharIndex]})`)
        if (board[row][col] === word[nextCharIndex]) {
            // console.log(`Founded word[${nextCharIndex}](${word[nextCharIndex]}) in board[${row}][${col}] (${word.length - 1})`)

            const temp = board[row][col];
            board[row][col] = '0'

            if (nextCharIndex === word.length - 1) {
                // console.log('!!!')
                return true;
            }

            if (col !== board[0].length - 1) {
                if (dfs(row, col + 1, nextCharIndex + 1)) {
                    return true
                }
            }
            if (row !== board.length - 1) {
                if (dfs(row + 1, col, nextCharIndex + 1)) {
                    return true;
                }
            }
            if (col !== 0) {
                if (dfs(row, col - 1, nextCharIndex + 1)) {
                    return true
                }
            }
            if (row !== 0) {
                if (dfs(row - 1, col, nextCharIndex + 1)) {
                    return true
                }
            }

            board[row][col] = temp
        } else {
            return false;
        }
    }


    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0]) {
                const result = dfs(i, j, 0)

                if (result) {
                    return result;
                }
            }
        }
    }

    return false;
}

console.log(exist(
    [
        ["A", "B", "C", "E"],
        ["S", "F", "E", "S"],
        ["A", "D", "E", "E"]]
    , 'ABCEFSADEESE'));