function nthToLast(arr,n) {
    if(arr.length < n) {
        return null;
    }
    return arr[arr.length-n];
}

console.log(nthToLast([42,true,4,'kate',7],4));