class Solution {
    public int[] productExceptSelf(int[] nums) {
        int[] prod = new int[nums.length];

        for(int i = 0; i < nums.length; i++) {
            int prodcs = 1;

            for(int j = 0; j < nums.length; j++){
              if(i!=j)  prodcs = prodcs * nums[j];
            }

                 prod[i] = prodcs;


        }

        return prod;
        
    }
}  
