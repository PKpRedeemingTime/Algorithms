function weekdayNum() {
    return Math.ceil((Math.random()*100) * 3.65);
}

function someDays() {
    var weekday = require('./weekdayNameExport')
    for(var i = 1; i < 18; i++) {
        var num = weekdayNum();
        var day = weekday.weekdayName(num);
        switch (day) {
            case "Saturday":
                console.log(day,"Enjoy your day off!");
                break;
            case "Sunday":
                console.log(day,"Enjoy your day off!");
                break;
            case "Monday":
                console.log(day,"Work Hard!");
                break;
            case "Tuesday":
                console.log(day,"Work Hard!");
                break;
            case "Wednesday":
                console.log(day,"Work Hard!");
                break;
            case "Thursday":
                console.log(day,"Work Hard!");
                break;
            case "Friday":
                console.log(day,"Work Hard!");
                break;
        }
    }
}

console.log(someDays());