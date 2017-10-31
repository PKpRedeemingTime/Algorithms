/*
Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.
*/

function commonCharacterCount(s1, s2) {
    var temp = [];
    for (var i = 0; i < s2.length; i++) {
        var x = 0;
        while(x < s1.length) {
            if(s1[x] == s2[i]) {
                temp.push(s2[i]);
                break;
            }
            x++;
        }
    }
    return temp;
}

console.log(commonCharacterCount("aabcc", "adcaa"));