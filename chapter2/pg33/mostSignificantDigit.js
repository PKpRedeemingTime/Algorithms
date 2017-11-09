function mostSignificantDigit(num) {
    var test = num;
    if(test >= 0 && test > 9) {
        while(test > 9) {
            test = Math.floor(test*.1);
        }
        return test;
    }
    else if(test < 1) {
        while(test < 1) {
            test = test*10;
        }
        test = Math.floor(test);
        return test;
    }
    else {
        return Math.floor(test);
    }
}

console.log(mostSignificantDigit(9));