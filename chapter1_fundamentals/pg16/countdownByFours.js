function countdownByFours() {
    var x = 2016;
    while(x > 0) {
        if(x % 4 == 0) {
            console.log(x);
        }
        x--;
    }
}

countdownByFours();