/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 *
 * https://leetcode.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (54.14%)
 * Likes:    1956
 * Dislikes: 72
 * Total Accepted:    457.3K
 * Total Submissions: 844.1K
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * Given an array nums, write a function to move all 0's to the end of it while
 * maintaining the relative order of the non-zero elements.
 *
 * Example:
 *
 *
 * Input: [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 *
 * Note:
 *
 *
 * You must do this in-place without making a copy of the array.
 * Minimize the total number of operations.
 *
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
	let noOfZero = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 0) {
			noOfZero++;
			nums.splice(i, 1);
			i--;
		}
	}

	while (noOfZero !== 0) {
		nums.push(0);
		noOfZero--;
	}

	return nums;
};
