function fibonacci(num) {
    var fib = 0;
    var curr = 1;
    var prev = 0;
    if(num < 2) {
        return num;
    }
    for(var i = 2; i <= num; i++) {
        fib = curr + prev;
        prev = curr;
        curr = fib;
    }
    return fib;
}

console.log(fibonacci(7));