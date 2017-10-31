function adjacentElementsProduct(inputArray) {
    var arr = [];
    for(var i = 0; i < inputArray.length - 1; i++) {
        arr.push(inputArray[i]*inputArray[i+1]);
    }
    var max = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}