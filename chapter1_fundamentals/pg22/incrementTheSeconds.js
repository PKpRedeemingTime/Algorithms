function incrementTheSeconds(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 != 0) {
            arr[i]+=1;
        }
        console.log(arr[i]);
    }
    return arr;
}

console.log(incrementTheSeconds([1,2,3,4,5,6,7,8]));