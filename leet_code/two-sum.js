"use strict";
/**
 *  Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */
function twoSum(nums, target) {
    const arr = [];
    for (let i = 0; i <= nums.length; i++) {
        for (let j = 0; j <= nums.length; j++) {
            if (nums[i] + nums[j] === target && i !== j) {
                if (!arr.includes(nums.indexOf(nums[i])) &&
                    !arr.includes(nums.indexOf(nums[j])))
                    arr.push(nums.indexOf(nums[i]), nums.indexOf(nums[j]));
            }
        }
    }
    return arr;
}
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 3], 6));
console.log(twoSum([3, 2, 4], 6));
