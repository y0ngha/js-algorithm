/**
 * @Title: 350. Intersection of Two Arrays II
 * @Link: https://leetcode.com/problems/intersection-of-two-arrays-ii/description/
 * @Solved: Jan 28, 2026 03:25
 */

function intersect(nums1: number[], nums2: number[]): number[] {
    const array: number[] = [];

    const nums1Map = new Map<number, number>() // number / count

    nums1.forEach(num => {
        const value = nums1Map.get(num) ?? 0
        nums1Map.set(num, value + 1);
    })

    nums2.forEach(num => {
        const value = nums1Map.get(num) ?? 0;
        if (value) {
            array.push(num);
            nums1Map.set(num, value-1)
        }
    })

    return array;
}

console.log(intersect([1,2,2,1], [2, 2]))