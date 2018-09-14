function printAndCount() {
    var count = 0;
    for(var i = 512; i < 4097; i ++) {
        if(i % 5 ==0) {
            console.log(i);
            count++;
        }
    }
    console.log(count);
}

printAndCount();