function reverseArray(arr) {
    var temp = 0;
    for(var i = 0; i < arr.length/2; i++) {
        temp = arr[i];
        arr[i] = arr[(arr.length-1)-i];
        arr[(arr.length-1)-i] = temp;
    }
    return arr;
}

console.log(reverseArray([3,1,6,4,2]));