/*
주어진 문자열 s와 정수 k가 있습니다. 문자열 s에서 임의의 문자를 선택하여 다른 대문자 영문 문자로 바꿀 수 있습니다.
이 작업을 최대 k번까지 수행할 수 있습니다.
위 작업을 수행하여 얻을 수 있는, 동일한 문자를 포함하는 가장 긴 부분 문자열의 길이를 반환하세요.

예시 1:
입력: s = "ABAB", k = 2
출력: 4
설명: 두 개의 'A'를 두 개의 'B'로 바꾸거나 그 반대로 바꿉니다.

예시 2:
입력: s = "AABABBA", k = 1
출력: 4
설명: 가운데 있는 'A'를 'B'로 바꾸어 "AABBBBA"를 만듭니다.
부분 문자열 "BBBB"는 동일한 문자가 4개 반복되는 가장 긴 부분 문자열입니다.
이 답을 얻는 다른 방법이 있을 수도 있습니다.

제약 조건:

1 <= s.length <= 105
s는 모두 대문자 영문 문자로만 구성됩니다.

0 <= k <= s.length
 */

/**
 * @Title: 424. Longest Repeating Character Replacement
 * @Link: https://leetcode.com/problems/longest-repeating-character-replacement/description/
 * @Solved: Jan 28, 2026 22:19
 */
function characterReplacement(s: string, k: number): number {
    let left = 0;
    let max = 0;

    const map = new Map<string, number>(); // 문자 출현 횟수

    const renewMax = (right: number) => {
        console.log(`99. renewMax > ${Math.max(max, right - left + 1)} / ${max}, ${right} - ${left} + 1`)
        max = Math.max(max, right - left + 1);
    }

    const getPopularCharCount = () => {
        const count = Math.max(...map.values())
        console.log(`2. getPopularCharCount > ${count} // `, map)
        return count;
    }

    const increseCharCount = (char: string) => {
        const count = map.get(char) ?? 0
        map.set(char, count + 1)

        console.log(`1. increseCharCount > ${char}, ${count} // `, map)
    }

    const decreseCharCount = (char: string) => {
        const count = map.get(char) ?? 0
        if (count === 0) {
            return;
        }

        map.set(char, count - 1)

        console.log(`5. decreseCharCount > ${char}, ${count-1} // `, map)
    }

    const isPossibleChange = (needChangeCharCount: number) => {
        const possible = needChangeCharCount <= k
        console.log(`4. isPossibleChange > ${possible} / (${needChangeCharCount} <= ${k})`)
        return possible;
    }

    const increseLeft = () => {
        left += 1;
        console.log(`6. increseLeft > ${left}`)
    }

    const getNeedChangeCharCount = (left: number, right: number, popularCharCount: number) => {
        const count = (right - left + 1) - popularCharCount;
        console.log(`3. getNeedChangeCharCount > ${count}(=${count < 0 ? 0 : count}) / (${right} - ${left} + 1) - ${popularCharCount}`)
        return count < 0 ? 0 : count;
    }

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        increseCharCount(char);
        let popularCharCount = getPopularCharCount();
        let needChangeCharCount = getNeedChangeCharCount(left, right, popularCharCount)

        while (!isPossibleChange(needChangeCharCount)) {
            decreseCharCount(s[left]);
            increseLeft();
            popularCharCount = getPopularCharCount();
            needChangeCharCount = getNeedChangeCharCount(left, right, popularCharCount)
        }

        renewMax(right)

        console.log(`${''.padStart(10, '-')} ${right}(${char}) ${''.padStart(10, '-')}`)
    }

    return max;
}

console.log(characterReplacement('KRSCDCSONAJNHLBMDQGIFCPEKPOHQIHLTDIQGEKLRLCQNBOHNDQGHJPNDQPERNFSSSRDEQLFPCCCARFMDLHADJADAGNNSBNCJQOF', 7))