function mathHelp(m,b) {
    var x = 0;
    while(m*x + b != 0 || m*-x + b != 0) {
        x++;
    }
    return x;
}

console.log(mathHelp(5,10));

//NOT SOLVED!