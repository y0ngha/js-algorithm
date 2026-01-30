/**
 * @Title: 14. Longest Common Prefix
 * @Link: https://leetcode.com/problems/longest-common-prefix/description/
 * @Solved: Jan 29, 2026 03:44
 */

function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 1) {
        return strs[0];
    }

    strs.sort((a, b) => {
        return a.length - b.length
    })

    console.log(strs)

    const shortWord = strs[0]!;
    const minLen = shortWord.length;
    let answer: string[] = [...shortWord];
    for (let i = 1; i < strs.length; i++) {
        const word = strs[i]!;
        let s = [];
        console.log(word)
        for (let j = 0; j < minLen; j++) {
            if (shortWord[j] === word[j]) {
                s.push(shortWord[j]!)
            } else {
                break;
            }
        }

        if (s.length < answer.length) {
            answer = [...s]
        }
    }

    return answer.join('')
}

console.log(longestCommonPrefix(["flower","flow","flight"]))