module.exports = {
    weekdayName: function(weekdayNum) {
        var day = "";
        while(weekdayNum > 7) {
            weekdayNum-=7;
        }
        switch (weekdayNum) {
            case 1:
                day = "Sunday";
                break;
            case 2:
                day = "Monday";
                break;
            case 3:
                day = "Tuesday";
                break;
            case 4:
                day = "Wednesday";
                break;
            case 5:
                day = "Thursday";
                break;
            case 6:
                day = "Friday";
                break;
            case 7:
                day = "Saturday";
                break;
        }
        return day;
    }
}