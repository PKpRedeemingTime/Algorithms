function findAndPrintMax(arr) {
    var max = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
}

findAndPrintMax([1,2,5,3,4]);