/**
 * @Title: 122. Best Time to Buy and Sell Stock II
 * @Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/
 * @Solved: Jan 28, 2026 02:46
 */

function maxProfit(prices: number[]): number {
    let profit = 0;

    for (let i = 0; i < prices.length; i++) {
        const yesterDayPrice = prices[i-1];
        const todayPrice = prices[i];
        if (yesterDayPrice < todayPrice) {
            profit += todayPrice - yesterDayPrice;
        }
    }

    return profit;
}

console.log(maxProfit([7,1,5,3,6,4]))