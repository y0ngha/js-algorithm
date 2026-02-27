/*
로마 숫자는 I, V, X, L, C, D, M의 일곱 가지 기호로 나타냅니다.

기호 값
I 1
V 5
X 10
L 50
C 100
D 500
M 1000
예를 들어, 2는 로마 숫자로 II로 쓰는데, 이는 1 두 개를 더한 것입니다. 12는 XII로 쓰는데, 이는 X + II입니다. 27은 XXVII로 쓰는데, 이는 XX + V + II입니다.

로마 숫자는 일반적으로 왼쪽에서 오른쪽으로 큰 숫자부터 작은 숫자 순으로 씁니다.
하지만 숫자 4는 IIII가 아니라 IV로 씁니다.
1이 5 앞에 있으므로 1을 빼서 4가 되는 것입니다.
같은 원리로 숫자 9도 IX로 씁니다. 뺄셈이 사용되는 경우는 다음과 같이 6가지입니다.

I를 V(5)와 X(10) 앞에 놓으면 4와 9가 됩니다.
X를 L(50)과 C(100) 앞에 놓으면 40과 90이 됩니다.
C를 D(500)와 M(1000) 앞에 놓으면 400과 900이 됩니다.
주어진 로마 숫자를 정수로 변환하세요.

예시 1:
입력: s = "III"
출력: 3
설명: III = 3.

예시 2:
입력: s = "LVIII"
출력: 58
설명: L = 50, V = 5, III = 3.

예시 3:
입력: s = "MCMXCIV"
출력: 1994
설명: M = 1000, CM = 900, XC = 90, IV = 4.

제약 조건:

1 <= s.length <= 15
s는 ('I', 'V', 'X', 'L', 'C', 'D', 'M') 문자만 포함합니다.

s는 [1, 3999] 범위의 유효한 로마 숫자임이 보장됩니다.
 */

/**
 * @Title: 13. Roman to Integer
 * @Link: https://leetcode.com/problems/roman-to-integer/description/
 * @Solved: Feb 28, 2026 02:11
 */

function romanToInt(s: string): number {
    const map = {
        'I': 1,
        'IV': 4,
        'V': 5,
        'IX': 9,
        'X': 10,
        'XL': 40,
        'L': 50,
        'XC': 90,
        'C': 100,
        'CD': 400,
        'D': 500,
        'CM': 900,
        'M': 1000,
    }
    let num = 0;

    for (let i = 0; i < s.length; i++) {
        const oneChar = s[i];
        const twoChar = i === s.length - 1 ? s[i] : `${s[i]}${s[i + 1]}`
        if (map[twoChar]) {
            num += map[twoChar];
            i++;
        } else {
            num += map[oneChar];
        }
    }

    return num;
}

console.log(romanToInt('LVIII'))