function secondToLast(arr) {
    if(arr.length < 2) {
        return null;
    }
    return arr[arr.length-2];
}

console.log(secondToLast([42,true,4,'kate',7]));