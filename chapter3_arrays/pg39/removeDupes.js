function removeDupes(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == arr[i+1]) {
            for(var x = i; x < arr.length; x++) {
                arr[x] = arr[x+1];
            }
            arr.length--;
            i--;
        }
    }
    return arr;
}

var arr = [1,1,2,3,3,3,3,4,4,5,5,5,5];
console.log(removeDupes(arr));