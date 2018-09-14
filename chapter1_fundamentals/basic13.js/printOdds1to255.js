function printOdds1to255() {
    for(var i = 1; i < 256; i++) {
        if(i % 2 != 0) {
            console.log(i);
        }
    }
}

printOdds1to255();