function onlyKeepTheLastFew(arr,x) {
    for(var i = 0; i < arr.length; i++) {
        arr[i] = arr[i+(x-1)];
    }
    arr.length-=(x-1);
    return arr;
}

console.log(onlyKeepTheLastFew([2,4,6,8,10],3));