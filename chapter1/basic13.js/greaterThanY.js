function greaterThanY(arr,y) {
    var count = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > y) {
            count++;
            console.log(arr[i]);
        }
    }
    console.log(count);
}

greaterThanY([7,2,9,3,5,1],4);