function isCreditCardValid(digitArr) {
    var newArr = [];
    for(var i = 0; i < digitArr.length-1; i++) {
        newArr.push(digitArr[i]);
    }
    for(var i = newArr.length-1; i >= 0; i-=2) {
        newArr[i]*=2;
        if(newArr[i] > 9) {
            newArr[i]-=9;
        }
    }
    var sum = 0;
    for(var i = 0; i < newArr.length; i++) {
        sum+=newArr[i];
    }
    sum+=digitArr[digitArr.length-1];
    if(sum % 10 == 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isCreditCardValid([5,2,2,8,2]));