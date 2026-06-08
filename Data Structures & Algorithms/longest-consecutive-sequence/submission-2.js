class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;
        for(let  i = 0; i < nums.length; i++){
            let count = 1;
            let current = nums[i];
            let state = true;

            while(state){
            state = false;
            for(let j =0; j < nums.length; j++){
                if (current == nums[j] + 1){
                    current = nums[j];
                    count++;
                    state = true;
                    break
                }

            }
            

            }

            longest  = Math.max(longest, count)
        }

        return longest;
    }
}
