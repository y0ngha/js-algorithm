/*
"PAYPALISHIRING"이라는 문자열이 다음과 같이 지정된 행 수만큼 지그재그 패턴으로 쓰여 있습니다.
(가독성을 높이기 위해 이 패턴을 고정된 글꼴로 표시할 수 있습니다.)

P   A   H   N
A P L S I I G
Y   I   R
그리고 나서 한 줄씩 읽으면 "PAHNAPLSIIGYIR"이 됩니다.
문자열을 입력받아 지정된 행 수만큼 변환하는 코드를 작성하세요.

string convert(string s, int numRows);

예시 1:

입력: s = "PAYPALISHIRING", numRows = 3
출력: "PAHNAPLSIIGYIR"

예시 2:
입력: s = "PAYPALISHIRING", numRows = 4
출력: "PINALSIGYAHRPI"
설명:
P     I    N
A   L S  I G
Y A   H R
P     I

예시 3:
입력: s = "A", numRows = 1
출력: "A"

Note: the zig-zag pattern is like this y'all
|    /|    /|    /|
|  /  |  /  |  /  |
|/    |/    |/    |
 */

/**
 * @Title: 6. Zigzag Conversion
 * @Link: https://leetcode.com/problems/zigzag-conversion/description/
 * @Solved: Feb 23, 2026 20:04
 */

function convert(s: string, numRows: number): string {
    const arr: string[][] = Array.from({length: numRows}, () => []);

    let row = 0;
    let flag: 'P' | 'M' = 'P'
    for (let i = 0; i < s.length; i++) {
        arr[row].push(s[i])

        if (numRows !== 1) {
            if (flag === 'M') {
                row--;
            } else {
                row++;
            }

            if (row >= numRows - 1) {
                flag = 'M'
            } else if (row === 0) {
                flag = 'P';
            }
        }
    }

    return arr.flatMap(a => a).join('')
}
console.log(convert('ABC', 1))