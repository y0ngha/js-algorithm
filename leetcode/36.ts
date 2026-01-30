/**
 * @Title: 36. Valid Sudoku
 * @Link: https://leetcode.com/problems/valid-sudoku/description/
 * @Solved: Jan 28, 2026 04:32
 */

function isValidSudoku(board: string[][]): boolean {
    const lineCheck = (index: number) => { // 행 체크
        const line = board[index]
        const map = new Map<string, number>()

        line.forEach(number => {
            map.set(number, (map.get(number) ?? 0) + 1)
        })

        return Array.from(map.keys()).filter(key => key !== ".").every(key => map.get(key) === 1)
    }

    const rowCheck = (index: number) => { // 열 체크
        const row = [];
        const map = new Map<string, number>()

        for (let i = 0; i < 9; i++) {
            const number = board[i][index]
            row.push(number);
        }

        row.forEach(number => {
            map.set(number, (map.get(number) ?? 0) + 1)
        })

        return Array.from(map.keys()).filter(key => key !== ".").every(key => map.get(key) === 1)
    }


    const miniBoardCheck = (lineIndex: number, rowIndex: number) => { // 3x3 체크, 1, 2, 3으로 되어야함.
        const miniBoard: string[][] = []
        const map = new Map<string, number>()

        for (let i = (lineIndex - 1) * 3; i < ((lineIndex - 1) * 3) + 3; i++) {
            miniBoard.push(board[i].slice((rowIndex - 1) * 3, rowIndex * 3))
        }

        miniBoard.flatMap(m => m)
            .forEach(number => {
                map.set(number, (map.get(number) ?? 0) + 1)
            })

        return Array.from(map.keys()).filter(key => key !== ".").every(key => map.get(key) === 1)
    }

    for (let i = 0; i < 9; i++) {
        if (!lineCheck(i)) {
            // console.log('false!', lineCheck, i)
            return false;
        }

        if (!rowCheck(i)) {
            // console.log('false!', rowCheck, i)
            return false;
        }
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (!miniBoardCheck(i + 1, j + 1)) {
                // console.log('false!', miniBoardCheck, i, j)
                return false;
            }
        }
    }

    return true;
}

console.log(isValidSudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."]
    , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    , [".", "9", "8", ".", ".", ".", ".", "6", "."]
    , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
    , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
    , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
    , [".", "6", ".", ".", ".", ".", "2", "8", "."]
    , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
    , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]))