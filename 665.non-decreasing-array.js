/*
 * @lc app=leetcode id=665 lang=javascript
 *
 * [665] Non-decreasing Array
 *
 * https://leetcode.com/problems/non-decreasing-array/description/
 *
 * algorithms
 * Easy (19.45%)
 * Likes:    1004
 * Dislikes: 209
 * Total Accepted:    49.7K
 * Total Submissions: 255.3K
 * Testcase Example:  '[4,2,3]'
 *
 *
 * Given an array with n integers, your task is to check if it could become
 * non-decreasing by modifying at most 1 element.
 *
 *
 *
 * We define an array is non-decreasing if array[i]  holds for every i (1
 *
 * Example 1:
 *
 * Input: [4,2,3]
 * Output: True
 * Explanation: You could modify the first 4 to 1 to get a non-decreasing
 * array.
 *
 *
 *
 * Example 2:
 *
 * Input: [4,2,1]
 * Output: False
 * Explanation: You can't get a non-decreasing array by modify at most one
 * element.
 *
 *
 *
 * Note:
 * The n belongs to [1, 10,000].
 *
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
	let diff = 0;
	let more = 0;
	let sorted = true;
	let upSorted = true;
	let prevDiff = 0;

	if (nums.length === 1 || nums.length === 2) {
		return true;
	}

	if (nums.filter(key => key === nums[0]).length === nums.length) {
		return true;
	}

	for (let index = 0; index < nums.length - 1; index++) {
		if (nums[index] < nums[index + 1]) {
			sorted = false;
			break;
		}
	}

	for (let index = 0; index < nums.length - 1; index++) {
		if (nums[index] > nums[index + 1]) {
			upSorted = false;
			break;
		}
	}

	if (sorted) {
		return false;
	}

	if (upSorted) return true;

	for (let index = 0; index < nums.length - 1; index++) {
		diff = Math.abs(nums[index] - nums[index + 1]);

		if (diff >= prevDiff) {
			more++;
		}
		prevDiff = diff;
	}

	return more === 1;
};
// console.log([-1, 4, 2, 3].sort());
console.log(checkPossibility([1, 5, 4, 6, 7, 10, 8, 9]));
