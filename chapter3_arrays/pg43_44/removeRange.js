function removeRange(arr,start,end) {
    if(start < 1 || end > arr.length) {
        return false;
    }
    for( var i = start-1; i < end; i++) {
        for(var x = start-1; x < arr.length; x++) {
            arr[x] = arr[x+1];
        }
        arr.length--;
    }
    return arr;
}

console.log(removeRange([20,30,40,50,60,70], 3,5));