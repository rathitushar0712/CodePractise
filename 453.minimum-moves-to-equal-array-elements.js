/*
 * @lc app=leetcode id=453 lang=javascript
 *
 * [453] Minimum Moves to Equal Array Elements
 *
 * https://leetcode.com/problems/minimum-moves-to-equal-array-elements/description/
 *
 * algorithms
 * Easy (49.11%)
 * Likes:    353
 * Dislikes: 574
 * Total Accepted:    56.3K
 * Total Submissions: 114.7K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a non-empty integer array of size n, find the minimum number of moves
 * required to make all array elements equal, where a move is incrementing n -
 * 1 elements by 1.
 *
 * Example:
 *
 * Input:
 * [1,2,3]
 *
 * Output:
 * 3
 *
 * Explanation:
 * Only three moves are needed (remember each move increments two elements):
 *
 * [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
	let sum = 0;
	let minNum = Infinity;

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		if (nums[i] < minNum) {
			minNum = nums[i];
		}
	}

	return sum - minNum * nums.length;
};
