/*
일곱 가지 기호는 각각 다음과 같은 값을 갖는 로마 숫자를 나타냅니다.

기호 값
I 1
V 5
X 10
L 50
C 100
D 500
M 1000
로마 숫자는 소수 자릿값을 큰 수부터 작은 수 순으로 변환하여 붙입니다. 소수 자릿값을 로마 숫자로 변환하는 규칙은 다음과 같습니다.

값이 4 또는 9로 시작하지 않으면, 입력값에서 뺄 수 있는 가장 큰 값의 기호를 선택하여 결과에 붙이고, 그 기호의 값을 뺀 다음, 나머지를 로마 숫자로 변환합니다.
값이 4 또는 9로 시작하면, 다음 기호에서 한 기호를 뺀 값을 사용합니다.
예를 들어, 4는 5(V)보다 1(I) 작은 값인 IV이고, 9는 10(X)보다 1(I) 작은 값인 IX입니다.
다음과 같은 뺄셈 형태만 사용됩니다: 4(IV), 9(IX), 40(XL), 90(XC), 400(CD), 900(CM).
10의 배수를 나타내기 위해 10의 거듭제곱(I, X, C, M)만 연속해서 최대 3번까지 사용할 수 있습니다.
5(V), 50(L), 500(D)은 여러 번 사용할 수 없습니다.
어떤 기호를 4번 사용해야 하는 경우에는 뺄셈 형태를 사용하십시오.
주어진 정수를 로마 숫자로 변환하십시오.

예시 1:
입력: num = 3749
출력: "MMMDCCXLIX"

설명:
3000 = MMM (1000(M) + 1000(M) + 1000(M))
700 = DCC (500(D) + 100(C) + 100(C))
40 = XL (50(L)에서 10(X) 뺀 값)
9 = IX (10(X)에서 1(I) 뺀 값)
참고: 49는 소수점 자릿수를 기준으로 변환하기 때문에 50(L)에서 1(I) 뺀 값이 아닙니다.

예시 2:
 입력: num = 58
출력: "LVIII"

설명:
50 = L
8 = VIII

예시 3:
입력: num = 1994
출력: "MCMXCIV"
설명:
1000 = M
900 = CM
90 = XC
4 = IV

1 <= num <= 3999
 */

/**
 * @Title: 12. Integer to Roman
 * @Link: https://leetcode.com/problems/integer-to-roman/
 * @Solved: Feb 28, 2026 02:03
 */

/*
제약조건:
1. 10의 배수를 나타내기 위해 10의 거듭제곱(I, X, C, M)만 연속해서 최대 3번까지 사용할 수 있습니다.
2. 5(V), 50(L), 500(D)은 여러 번 사용할 수 없습니다.
3. 어떤 기호를 4번 사용해야 하는 경우에는 뺄셈 형태를 사용하십시오.
 */

function intToRoman(num: number): string {
    const romanIntegers = [
        1000,
        900,
        500,
        400,
        100,
        90,
        50,
        40,
        10,
        9,
        5,
        4,
        1
    ]

    const romanMap: { [k: number]: string } = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M',
    } as const

    const specials: { [k: number]: string } = {
        4: 'IV',
        9: 'IX',
        40: 'XL',
        90: 'XC',
        400: 'CD',
        900: 'CM'
    } as const

    let roman = '';

    for (let i = 0; i < romanIntegers.length; i++) {
        const romanInteger = romanIntegers[i];
        const iter = Math.floor(num / romanInteger)
        const subtractNum = romanInteger * iter;

        // console.log(num, romanInteger, iter, subtractNum, roman)
        if (specials[subtractNum]) {
            roman += specials[subtractNum];
        } else {
            if (iter > 0) {
                if (iter > 3) {
                    // 뺄셈, 1000의자리에서 나올 일 없음.
                    // 40을 나타내야하면, X(10)L(50)
                    const bigNumber = romanIntegers[i - 1];
                    roman += `${romanMap[romanInteger]}${romanMap[bigNumber]}`
                } else {
                    // 중복으로 가기.
                    roman += ''.padStart(iter, romanMap[romanInteger])
                }
            }
        }

        num -= subtractNum;
    }

    return roman;
}

console.log(intToRoman(58))

/*
1994

MCMXCIV
MDCDLXLIV
 */