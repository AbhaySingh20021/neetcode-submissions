class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;

        for (let i = 0; i < nums.length; i++) {
            let current = nums[i];
            let count = 1;
            let found = true;

            while (found) {
                found = false;

                for (let j = 0; j < nums.length; j++) {
                    if (nums[j] === current + 1) {
                        current = nums[j];
                        count++;
                        found = true;
                        break;
                    }
                }
            }

            longest = Math.max(longest, count);
        }

        return longest;
    }
}