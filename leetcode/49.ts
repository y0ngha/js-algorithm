/*
주어진 문자열 배열 strs에서 철자를 바꿔서 "bat"을 만들 수 있는 문자열을 그룹화하세요. 순서는 상관없습니다.

예시 1:

입력: strs = ["eat","tea","tan","ate","nat","bat"]

출력: [["bat"],["nat","tan"],["ate","eat","tea"]]

설명:

strs에는 철자를 바꿔서 "bat"을 만들 수 있는 문자열이 없습니다.

"nat"과 "tan"은 철자를 바꿔서 서로 만들 수 있으므로 철자가 바뀐 문자열입니다.

"ate", "eat", "tea"는 철자를 바꿔서 서로 만들 수 있으므로 철자가 바뀐 문자열입니다.

예제 2:

입력: strs = [""]

출력: [[""]]

예제 3:

입력: strs = ["a"]

출력: [["a"]]

제약 조건:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i]는 소문자 영문자로 구성됩니다.
 */

/**
 * @Title: 49. Group Anagrams
 * @Link: https://leetcode.com/problems/group-anagrams/description/
 * @Solved: Feb 17, 2026 17:27
 */

// function groupAnagrams(strs: string[]): string[][] {
//     const answers: string[][] = [];
//
//     const isValidAnagram = (org: string, str: string): boolean => {
//         return org === [...str].sort((a, b) => a.localeCompare(b)).join('')
//     }
//
//     for (let i = 0; i < strs.length; i++) {
//         const answer = [];
//         if (strs[i] === '#') continue;
//
//         const str = [...strs[i]].sort((a, b) => a.localeCompare(b)).join('');
//         answer.push(strs[i]);
//
//         for (let j = 0; j < strs.length; j++) {
//             if (i === j || strs[j] === '#') {
//                 continue;
//             }
//
//             if (isValidAnagram(str, strs[j])) {
//                 // console.log(`${str}, ${strs[j]}`, isValidAnagram(str, strs[j]))
//                 answer.push(strs[j]);
//                 strs[j] = '#'
//             }
//         }
//
//         answers.push(answer)
//     }
//
//
//     return answers;
// }


function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>; // key : 실제배열

    const sortString = (str: string): string => {
        return [...str].sort((a, b) => a.localeCompare(b)).join('')
    }

    for (let i = 0; i < strs.length; i++) {
        const sortedString = sortString(strs[i])

        map.set(sortedString, [...(map.get(sortedString) ?? []), strs[i]])
    }

    return [...map.values()]
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))