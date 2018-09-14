function intSums (arr) {
    var sum = 0;
    var count = 0;
    var last = arr.length-1
    for(var i = 0; i < arr.length; i++) {
        while(count < 10) {
            sum+=arr[i];
            count++;
            i++;
            console.log(count);
            if(i == arr.length) {
                arr.length++;
                arr[i] = sum;
                return arr;
            }
        }
        count = 0;
        arr.length++;
        for(var x = last; x >= i; x--) {
            arr[x+1]=arr[x];
        }
        arr[i] = sum;
        last = arr.length-1;
        sum = 0;
        console.log(i);
    }
    return arr;
}

console.log(intSums([1,2,1,2,1,2,1,2,1,2,1,2,1,2]));