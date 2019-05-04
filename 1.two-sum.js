/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (43.69%)
 * Likes:    10548
 * Dislikes: 348
 * Total Accepted:    1.7M
 * Total Submissions: 4M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 *
 * Example:
 *
 *
 * Given nums = [2, 7, 11, 15], target = 9,
 *
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 *
 *
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
// 	let firstIndex;
// 	let otherIndex;
// 	for (let index = 0; index < nums.length; index++) {
// 		otherIndex = nums.indexOf(target - nums[index], index + 1);

// 		if (otherIndex > -1 && otherIndex !== index) {
// 			firstIndex = index;
// 			break;
// 		}
// 	}
// 	return [firstIndex, otherIndex];
// };

var twoSum = function(nums, target) {
	dic = {};
	for (let index = 0; index < nums.length; index++) {
		if (nums[index] in dic) {
			return [dic[nums[index]], index];
		}
		dic[target - nums[index]] = index;
	}
	return false;
};
