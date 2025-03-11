/**
 * License Key Formatting
Given a string S that consists of only alphanumeric characters and dashes.
The string is separated into N + 1 groups by N dashes. Also given an integer K.
We want to reformat the string S, such that each group contains exactly K characters, except for the first group, 
which could be shorter than K but still must contain at least one character. Furthermore, a dash must be inserted between two groups,
and you should convert all lowercase letters to uppercase.

Examples:					
Input: S = “5F3Z-2e-9-w”, K = 4					
Output: “5F3Z-2E9W”					
Explanation: The string S has been split into two parts,					
each part has 4 characters.					
Note that two extra dashes are not needed and can be removed.					
Input: S = “2-5g-3-J”, K = 2					
Output: “2-5G-3J”					
Explanation: The string s has been split into three parts,					
each part has 2 characters except the first part					
as it could be shorter as mentioned above
 */

/**
 * 1. found the length of the string
 * 2. found the first '-'
 * ----
 * 3. loop until found a next character that is not a '-' an join
 * 4. remove dashes of that group
 * ----
 */

const walkString = (s, k) => {
    console.log('Start > ', s)
    let limit = s.length
    let isOdd = limit / k
    let chrs = [...s]
    let frDash = chrs.findIndex(i => i === '-')
    const findNexGroup = (arr, founds) => {
        console.log('incoming arr > ', {arr, founds})
        let nextChars = []
        for (let index = 0; index < arr.length; index++) {
            if (arr[index] !== '-' && nextChars.length < k) {
                nextChars.push(arr[index])
            } else if (nextChars.length === k) {
                founds.push(nextChars)
                founds.push(findNexGroup(arr.slice(index), founds))
            }
        }
        console.log('result > ', founds)
        //return founds
    }
    let groups = [chrs.slice(0, frDash)]
    let gStep = 0
    findNexGroup(chrs.slice(frDash+1), groups)
    console.log(' > ', { frDash, groups })
}

// 012345678910 : 11
// 5F3Z-2e-9-w
walkString('5F3Z-2e-9-w', 4)
// 01234567 : 8
// 2-5g-3-J
walkString('2-5g-3-J', 2)