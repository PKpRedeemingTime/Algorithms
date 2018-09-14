function doubleTrouble(arr) {
    var x;
    for(var i = 0; i < arr.length; i+=2) {
        x = arr.length-1;
        while(x > i) {
            arr[x+1] = arr[x];
            x--;
        }
        arr[i+1] = arr[i];
    }
    return arr;
}

console.log(doubleTrouble([4,"Ulysses",42,false]));