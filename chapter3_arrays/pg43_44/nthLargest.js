function nthLargest(arr,n) {
    if(arr.length < n) {
        return null;
    }
    var newArr = [];
    var x = 0;
    var min = arr[0];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    newArr.push(min);
    var max = min;
    while(x+1 < arr.length) {
        min = arr[0];
        for(var i = 0; i < arr.length; i++) {
            if(arr[i] > max && arr[i] < min) {
                min = arr[i];
            }
        }
        newArr.push(min);
        max = min;
        x++;
    }
    return newArr[newArr.length-n];
}

console.log(nthLargest([42,1,4,Math.PI,7],4));