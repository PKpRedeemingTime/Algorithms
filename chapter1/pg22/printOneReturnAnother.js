function printOneReturnAnother(arr) {
    console.log(arr[arr.length-2]);
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 != 0) {
            return arr[i];
        }
    }
}

console.log(printOneReturnAnother([0,4,5,6,8,7,10]));