function removeNegatives(arr) {
    for(var i = 0;i < arr.length; i++) {
        if(arr[i] < 0) {
            for(var x = i; x < arr.length; x++) {
                arr[x] = arr[x+1];
            }
            arr.length--;
        }
    }
    return arr;
}

console.log(removeNegatives([1,-2,3,-4,5,-6]));