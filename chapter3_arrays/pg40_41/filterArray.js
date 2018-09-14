function filterArray(arr,min,max) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < min || arr[i] > max) {
            for(var x = i; x < arr.length; x++) {
                arr[x] = arr[x+1];
            }
            arr.length--;
            i--;
        }
    }
    return arr;
}

console.log(filterArray([8,2,1,4,6,3,7,5],2,6));