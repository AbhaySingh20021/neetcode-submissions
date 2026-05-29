class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let product  = nums.map((_, i) => {
          let arr =  nums.map((num, j) => {if (j===i){ return 1 
            
            }
            else return num
            }
            )

            return arr.reduce((prod, num) => prod*num, 1)
        })

        return product
    }
}
