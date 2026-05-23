class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let str1 = [];
        let visited = new Array(strs.length).fill(false);
        let result = [];

        // Store original word + sorted version
        for (let char of strs) {
            str1.push([char, char.split('').sort().join('')]);
        }

        // Group matching anagrams
        for (let i = 0; i < str1.length; i++) {

            if (visited[i]) continue;

            let group = [];
            let tar = str1[i][1];

            for (let j = 0; j < str1.length; j++) {

                let tar2 = str1[j][1];

                if (tar === tar2) {
                    group.push(str1[j][0]);
                    visited[j] = true;
                }
            }

            result.push(group);
        }

        return result;
    }
}