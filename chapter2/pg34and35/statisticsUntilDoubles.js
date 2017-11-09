function statisticsUntilDoubles() {
    var num = 1;
    var curr = 0;
    var min = 101;
    var max = 0;
    var sum = 0;
    var count = 0;
    while(count > -1) {
        num = Math.ceil((Math.random()*100)*.2);
        count++;
        if(num > max) {
            max = num;
        }
        if(num < min) {
            min = num;
        }
        sum+=num;
        if(curr == num) {
            avg = sum/count;
            console.log("Number of rolls:",count,"Min:",min,"Max:",max,"Average:",avg);
            break;
        }
        curr = num;
    }
    return "finished";
}

console.log(statisticsUntilDoubles());