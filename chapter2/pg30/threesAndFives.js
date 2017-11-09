function threesAndFives(start,end) {
    var sum = 0;
    for(var i = start; i <= end; i++) {
        if(i % 3 == 0 || i % 5 == 0) {
            sum+=i;
            if(i % 3 == 0 && i % 5 == 0) {
                sum-=i;
            }
        }
    }
    console.log(sum);
}

threesAndFives(1,22);