class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        

        let obj = {}

        for (let ch of nums){
            obj[ch] = (obj[ch] || 0) + 1;
        }
            
        let sorted = Object.entries(obj)
            .sort((a, b) => b[1] - a[1]);

        let result  = []

        for( let i  = 0; i < k; i++) {
            result.push(sorted[i][0])
        }

        return result


                   
        }

        
    }

