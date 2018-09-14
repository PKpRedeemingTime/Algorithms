function rollOne() {
    var roll = Math.ceil((Math.random()*100) * (3/50));
    return roll;
}

function playFives(num) {
    for(var i = 1; i <= num; i++) {
        var roll = rollOne();
        if(roll == 5) {
            console.log("That's lucky!", roll);
        }
        else {
            console.log(roll);
        }
    }
}

function playStatistics() {
    var low = 7;
    var high = 0;
    for(var i = 1; i <=8; i++) {
        var roll = rollOne();
        if(roll > high) {
            high = roll;
        }
        if(roll < low) {
            low = roll;
        }
    }
    console.log("Lowest Roll:",low,"Highest Roll:",high);
}

function playStatistics2() {
    var low = 7;
    var high = 0;
    var sum = 0;
    for(var i = 1; i <=8; i++) {
        var roll = rollOne();
        if(roll > high) {
            high = roll;
        }
        if(roll < low) {
            low = roll;
        }
        sum+=roll;
    }
    console.log("Lowest Roll:",low,"Highest Roll:",high,"Sum of All Rolls",sum);
}

function playStatistics3(num) {
    var low = 7;
    var high = 0;
    var sum = 0;
    for(var i = 1; i <= num; i++) {
        var roll = rollOne();
        if(roll > high) {
            high = roll;
        }
        if(roll < low) {
            low = roll;
        }
        sum+=roll;
    }
    console.log("Lowest Roll:",low,"Highest Roll:",high,"Sum of All Rolls",sum);
}

function playStatistics4(num) {
    var low = 7;
    var high = 0;
    var sum = 0;
    for(var i = 1; i <= num; i++) {
        var roll = rollOne();
        if(roll > high) {
            high = roll;
        }
        if(roll < low) {
            low = roll;
        }
        sum+=roll;
    }
    console.log("Lowest Roll:",low,"Highest Roll:",high,"Average of All Rolls",sum/10);
}

console.log(rollOne());
playFives(10);
playStatistics();
playStatistics2();
playStatistics3(10);
playStatistics4(10);