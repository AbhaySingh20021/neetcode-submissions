class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encode  = JSON.stringify(strs)
        
        return encode

        
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
       let decode = JSON.parse(str)
       console.log(decode)

       return decode

    }
}
