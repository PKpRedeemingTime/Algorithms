function swapPairs(arr) {
    var temp = 0;
    if(arr.length % 2 == 0) {
        for(var i = 0; i < arr.length; i+=2) {
            temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
        return arr;
    }
    else {
        for(var i = 0; i < arr.length; i+=2) {
            for(var i = 0; i < arr.length; i+=2) {
                if(Math.floor(arr.length/2) == i) {
                    i--;
                    continue;
                }
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
        return arr;
    }
}

console.log(swapPairs([1,2,3,4,5]));