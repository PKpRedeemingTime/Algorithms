function outlookNegative(arr) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            newArr.push(arr[i]*-1);
        }
        else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(outlookNegative([1,-3,5]));