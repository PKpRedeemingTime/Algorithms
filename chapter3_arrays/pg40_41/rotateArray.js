function rotateArray(arr,shiftBy) {
    if(shiftBy == 0) {
        return arr;
    }
    else {
        var temp = arr[arr.length-1];
        for(var i = arr.length-1; i > 0; i--) {
            arr[i] = arr[i-shiftBy];
        }
        arr[0] = temp;
    }
    return arr;
}

console.log(rotateArray([1,2,3,4],2));