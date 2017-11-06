function countdown(num) {
    var arr = [];
    for(var i = num; i >= 0; i--) {
        arr.push(i);
    }
    console.log(arr,"The length of the array is", arr.length);
}

countdown(10);