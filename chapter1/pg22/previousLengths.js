function previousLengths(arr) {
    for(var i = arr.length-1; i > 0; i--) {
        arr[i] = arr[i-1].length;
    }
    arr[0] = 0;
    return arr;
}

console.log(previousLengths(['i','ii','iii','iiii','iiiii']));