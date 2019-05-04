/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (33.38%)
 * Likes:    1311
 * Dislikes: 1276
 * Total Accepted:    451.7K
 * Total Submissions: 1.4M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 *
 *
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 *
 *
 * Example 2:
 *
 *
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 *
 * Note:
 *
 * All given inputs are in lowercase letters a-z.
 *
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	// var pre = strs[0] ? strs[0] : '';
	// for (var i = 1; i < strs.length; i++) {
	// 	var l = Math.min(pre.length, strs[i].length);
	// 	for (var j = 0; j < l; j++) {
	// 		if (pre.charAt(j) != strs[i].charAt(j)) break;
	// 	}
	// 	pre = pre.slice(0, j);
	// }
	// return pre;

	let temp = '';
	if (strs.length > 0) {
		for (let i = 0; i < strs[0].length; i++) {
			for (var j = 0; j < strs.length; j++) {
				if (!strs[j].startsWith(strs[0].slice(0, i + 1))) {
					break;
				}
			}
			if (j === strs.length) {
				temp = strs[0].slice(0, i + 1);
			}
		}
	}
	return temp;
};
