function arrayWithOdds() {
    var arr = [];
    for(var i = 1; i < 256; i++) {
        if(i % 2 != 0) {
            arr.push(i);
        }
    }
    console.log(arr);
}

arrayWithOdds();