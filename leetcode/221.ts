/*
0과 1로 채워진 m x n 크기의 이진 행렬이 주어졌을 때, 모든 요소가 1인 가장 큰 정사각형을 찾아 그 면적을 반환하세요.

예시 1:
입력: matrix = [["1","0","1","0","0"],
["1","0","1","1","1"],
["1","1","1","1","1"],
["1","0","0","1","0"]]
출력: 4

예시 2:
입력: matrix = [["0","1"],
["1","0"]]
출력: 1

예시 3:
입력: matrix = [["0"]]
출력: 0

제약 조건:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 300
matrix[i][j]는 '0' 또는 '1'입니다.
 */
/**
 * @Title: 221. Maximal Square
 * @Link: https://leetcode.com/problems/maximal-square/description/
 * @Solved: Feb 02, 2026 23:31
 */
function maximalSquare(matrix: string[][]): number {
    const flat = matrix.flatMap(n => n).map(n => Number(n))

    if (flat.every(n => n === 0)) {
        return 0;
    }

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] === '1') {
                if (Number(matrix[i][j - 1]) >= 1 && Number(matrix[i - 1][j]) >= 1 && Number(matrix[i - 1][j - 1]) >= 1) {
                    const newNum = Math.min(Math.min(Number(matrix[i][j - 1]), Number(matrix[i - 1][j])), Number(matrix[i - 1][j - 1])) + 1
                    matrix[i][j] = newNum.toString()
                    matrix[i][j - 1] = newNum.toString()
                    matrix[i - 1][j] = newNum.toString()
                    matrix[i - 1][j - 1] = newNum.toString()
                }
            }
        }
    }

    console.log(matrix)
    const max = Math.max(...matrix.flatMap(n => n).map(n => Number(n)))
    return max * max;
}

console.log(maximalSquare([
    ["1", "0", "1", "0", "0", "1", "1", "1", "0"],
    ["1", "1", "1", "0", "0", "0", "0", "0", "1"],
    ["0", "0", "1", "1", "0", "0", "0", "1", "1"],
    ["0", "1", "1", "0", "0", "1", "0", "0", "1"],
    ["1", "1", "0", "1", "1", "0", "0", "1", "0"],
    ["0", "1", "1", "1", "1", "0", "0", "1", "0"],
    ["1", "0", "0", "1", "1", "1", "0", "0", "0"]]))

// 이게 왜 9로 나와야 성공인거지????
// 오답
// 81개 테스트 케이스 중 75개 통과
// 2026년 2월 3일 03시 33분 에 제출됨
// ???????????????????????????????