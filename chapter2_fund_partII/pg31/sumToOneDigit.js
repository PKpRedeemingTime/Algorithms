function sumToOne(num) {
    var sum = 0;
    var flag = true;
    while(flag) {
        while(num >= 1) {
            sum += (num % 10);
            num = Math.floor(num/10)
        }
        num = sum;
        sum = 0;
        if(num < 10) {
            return num;
        }
    }
}

console.log(sumToOne(1049));