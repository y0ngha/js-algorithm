/**
 * @Title: 121. Best Time to Buy and Sell Stock
 * @Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 * @Solved: Jan 29, 2026 22:29
 */

function maxProfit(prices: number[]): number {
    let minPrice = prices[0]!;
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        const price = prices[i]!;

        if (minPrice > price) {
            minPrice = price;
        } else {
            const profit = price - minPrice

            if (maxProfit < profit) {
                maxProfit = profit;
            }
        }
    }

    return maxProfit
}

console.log(maxProfit([7,1,5,3,6,4]))