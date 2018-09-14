function minToFront(arr) {
    var temp = arr[0];
    var x = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < temp) {
            temp = arr[i];
            x = i;
        }
    }
    for(var i = x; i >= 0; i--) {
        arr[i] = arr[i-1];
    }
    arr[0] = temp;
    return arr;
}

console.log(minToFront([4,2,1,3,5]));