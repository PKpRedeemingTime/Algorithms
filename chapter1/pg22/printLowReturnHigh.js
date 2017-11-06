function printLowReturnHigh(arr) {
    var high = arr[0];
    var low = arr[0];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > high) {
            high = arr[i];
        }
        if(arr[i] < low) {
            low = arr[i];
        }
    }
    console.log(low);
    return high;
}

console.log(printLowReturnHigh([3,2,5,1,4,6]));