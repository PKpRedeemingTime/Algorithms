function thisLengthThatValue(num1,num2) {
    var arr = [];
    if(num1 == num2) {
        console.log("Jinx!");
    }
    else {
        for(var i = 1; i <= num1; i++) {
            arr.push(num2);
        }
    }
    return arr;
}

console.log(thisLengthThatValue(5,6));