function multiplesOfSix() {
    var x = 0;
    while(x < 60001) {
        if(x % 6 == 0) {
            console.log(x);
        }
        x++;
    }
}

multiplesOfSix();