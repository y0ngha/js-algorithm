/*
2부터 9까지의 숫자로 이루어진 문자열이 주어졌을 때, 해당 숫자가 나타낼 수 있는 모든 문자 조합을 반환하세요. 순서는 상관없습니다.
숫자와 문자의 매핑은 아래와 같습니다(전화 버튼처럼). 1은 어떤 문자에도 매핑되지 않습니다.
2: a,b,c
3: d,e,f
4: g,h,i
5: j,k,l
6: m,n,o
7: p,q,r,s
8: t,u,v
9: w,x,y,z

예시 1:

입력: digits = "23"
출력: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
예시 2:

입력: digits = "2"
출력: ["a","b","c"]

제약 조건:

1 <= digits.length <= 4
digits[i]는 ['2', '9'] 범위의 숫자입니다.
 */

/**
 * @Title: 17. Letter Combinations of a Phone Number
 * @Link: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * @Solved: Mar 05, 2026 18:19
 */

function letterCombinations(digits: string): string[] {
    const map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }

    const answers = [];
    // 4글자로 들어오면 1~4글자짜리를 만들어야함.
    // 3글자로 들어오면 1~3글자짜리를 만들어야함.
    // 2글자로 들어오면 1~2글자짜리를 만들어야함.
    // 1글자로 들어오면 1~1글자짜리를 만들어야함.
    // 재귀함수로 1글자가 될 때 까지 만들면 된다.
    // 아닌가보다.. 2글자로 들어오면 2글자만 만들면 되나보다..
    const recursive = (n: number, base: string) => {
        if (n === digits.length) {
            answers.push(base);
        } else {
            for (let i = 0; i < map[digits[n]].length; i++) {
                recursive(n + 1, `${base}${map[digits[n]][i]}`)
            }
        }
    }

    recursive(0, '')

    return answers
}

console.log(letterCombinations('234'))
