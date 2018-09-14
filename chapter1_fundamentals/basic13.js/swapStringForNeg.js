function swapStringForNeg(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    console.log(arr);
}

swapStringForNeg([1,-2,3,-5,6]);