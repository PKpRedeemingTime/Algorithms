function checkPalindrome(inputString) {
    for(var i = 0; i <= inputString.length/2; i++) {
        if(inputString[i] != inputString[(inputString.length - 1) - i]) {
            return false;
        }
    }
    return true;
}

console.log(checkPalindrome("trust"));
