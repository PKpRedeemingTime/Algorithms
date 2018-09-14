function zipIt(arr1,arr2) {
    if(!arr2) {
        return false;
    }
    var flag = true;
    var newArr = [];
    var x = 0;
    var y = 0;
    while(flag == true) {
        if(x < arr1.length) {
            newArr[y] = arr1[x];
            y++;
        }
        if(x < arr2.length) {
            newArr[y] = arr2[x];
            y++;
        }
        x++;
        if(x >= arr1.length && x >= arr2.length) {
            flag = false;
        }
    }
    return newArr;
}

console.log(zipIt([1,2],[10,20,30,40]));