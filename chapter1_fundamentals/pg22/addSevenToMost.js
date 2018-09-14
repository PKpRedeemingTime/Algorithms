function addSevenToMost(arr) {
    var newArr = [];
    for(var i = 1; i < arr.length; i++) {
        newArr.push(arr[i]+7);
    }
    return newArr;
}

console.log(addSevenToMost([0,7,14,21,28]));