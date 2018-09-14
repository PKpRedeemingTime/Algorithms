function removeAt(arr,idx) {
    for(var i = idx; i < arr.length; i++) {
        arr[i] = arr[i+1];
    }
    arr.length--;
    return arr;
}

console.log(removeAt([1,2,3,8,4,5],3));