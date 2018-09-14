function concatArray(arr1,arr2) {
    var newArr = [];
    for(var i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i]);
    }
    for(var i = 0; i < arr2.length; i++) {
        newArr.push(arr2[i]);
    }
    return newArr;
}

console.log(concatArray(['a','b'],[1,2]));