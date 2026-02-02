/**
 * @Title: 322. 동전 교환
 * @Link: https://leetcode.com/problems/coin-change/description/
 * @Solved: Feb 02, 2026 23:00
 */

function coinChange(coins: number[], amount: number): number {
    if (amount === 0) {
        return 0;
    }

    const dp: number[] = new Array(amount+1).fill(amount + 1);

    dp[0] = 0; // 0원을 만들기 위해선 0개가 필요.

    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            const coin = coins[j];
            if (coin > i) { // 목표하는 금액보다 동전이 크다면 넘기기
                continue;
            }

            dp[i] = Math.min(dp[i], dp[i-coin] + 1)
        }
    }

    return amount < dp[amount] ? -1 : dp[amount]
}

console.log(coinChange([1, 2, 5], 6))

// 408 * 15 ... 6120 (6249-6120 = 129)