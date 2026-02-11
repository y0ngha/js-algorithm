/*
길이가 n인 정수 배열 height가 주어집니다.
n개의 수직선이 그려져 있으며, 각 i번째 선의 양 끝점은 (i, 0)과 (i, height[i])입니다.
x축과 함께 하나의 용기를 형성하는 두 개의 수직선을 찾으세요. 이 용기는 최대량의 물을 담을 수 있어야 합니다.

용기가 담을 수 있는 최대 물의 양을 반환하세요.
용기를 기울일 수 없습니다.

예시 1:
입력: height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
출력: 49
설명: 위의 수직선은 배열 [1, 8, 6, 2, 5, 4, 8, 3, 7]로 표현됩니다. 이 경우, 용기가 담을 수 있는 최대 물의 면적(파란색 부분, 7 ~ 7)은 49입니다.

예제 2:
입력: height = [1,1]
출력: 1

제약 조건:
n == height.length
2 <= n <= 105
0 <= height[i] <= 104
 */

/**
 * @Title: 11. Container With Most Water
 * @Link: https://leetcode.com/problems/container-with-most-water/description/
 * @Solved: Feb 11, 2026 19:44
 */

function maxArea(height: number[]): number {
    let max = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const cupHeight = Math.min(height[left], height[right])
        const cupWidth = (right - left)

        max = Math.max(max, cupHeight * cupWidth);

        if (height[left] > height[right]) {
            right--;
        } else {
            left++;
        }
    }

    return max
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
