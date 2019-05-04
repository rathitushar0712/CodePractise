/*
 * @lc app=leetcode id=229 lang=javascript
 *
 * [229] Majority Element II
 *
 * https://leetcode.com/problems/majority-element-ii/description/
 *
 * algorithms
 * Medium (31.83%)
 * Likes:    799
 * Dislikes: 99
 * Total Accepted:    98.5K
 * Total Submissions: 309.3K
 * Testcase Example:  '[3,2,3]'
 *
 * Given an integer array of size n, find all elements that appear more than ⌊
 * n/3 ⌋ times.
 *
 * Note: The algorithm should run in linear time and in O(1) space.
 *
 * Example 1:
 *
 *
 * Input: [3,2,3]
 * Output: [3]
 *
 * Example 2:
 *
 *
 * Input: [1,1,1,3,3,2,2,2]
 * Output: [1,2]
 *
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
	var numObj = {};

	for (var i = 0; i < nums.length; i++) {
		if (!numObj.hasOwnProperty(nums[i])) {
			Object.defineProperty(numObj, nums[i], {
				value: 1,
				writable: true
			});
		} else {
			numObj[nums[i]]++;
		}
	}

	var maxEle = Math.floor(nums.length / 3);
	var numbers = Object.getOwnPropertyNames(numObj).filter(key => {
		return numObj[key] > maxEle;
	});

	return numbers.map(key => Number(key));
};
