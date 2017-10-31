/*
Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].
*/

function allLongestStrings(inputArray) {
    var max = 0;
    var temp = [];
    for(var i = 0; i < inputArray.length; i++) {
        if(inputArray[i].length > max) {
            max = inputArray[i].length;
        }
    }
    for(var i = 0; i < inputArray.length; i++) {
        if(inputArray[i].length == max) {
            temp.push(inputArray[i]);
        }
    }
    return temp;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));