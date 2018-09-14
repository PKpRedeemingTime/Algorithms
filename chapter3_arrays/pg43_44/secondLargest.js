function secondLargest(arr) {
    if(arr.length < 2) {
        return null;
    }
    var max = arr[0];
    var second = arr[0];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            second = max;
            max = arr[i];
        }
    }
    if(max == arr[0]) {
        second = arr[1];
        for(var i = 1; i < arr.length; i++) {
            if(arr[i] == max) {
                continue;
            }
            else {
                if(arr[i] > second) {
                    second = arr[i];
                }
            }
        }
        return second;
    }
    else {
        return second;
    }
}

console.log(secondLargest([42,1,4,Math.PI,7]));