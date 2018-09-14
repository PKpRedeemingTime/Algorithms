function swapTowardTheCenter(arr) {
    var temp = 0;
    for(var i = 0; i < arr.length/2; i+=2) {
        temp = arr[i];
        arr[i] = arr[(arr.length-1)-i];
        arr[(arr.length-1)-i] = temp;
    }
    return arr;
}

console.log(swapTowardTheCenter([1,2,3,4,5,6]));