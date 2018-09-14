function extractDigit(num,digitNum) {
    var test = num;
    var digits = 1;
    while(test > 9) {
        test = Math.floor(test*.1);
        digits++;
    }
    if(digitNum >= digits) {
        console.log("Error: The number doesn't have that many digits");
        return;
    }
    test = num;
    while(digitNum > 0) {
        test = Math.floor(test*.1);
        digitNum-=1;
    }
    return test % 10;
}

console.log(extractDigit(1234,2));