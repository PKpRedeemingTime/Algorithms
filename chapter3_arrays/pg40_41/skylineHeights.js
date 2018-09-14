function skylineHeights(arr) {
    var visible = [];
    var max = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > 0 && arr[i] > max) {
            max = arr[i];
            visible.push(arr[i]);
        }
    }
    return visible;
}

console.log(skylineHeights([-1,1,1,7,3]));