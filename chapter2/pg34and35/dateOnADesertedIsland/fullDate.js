function fullDate(num) {
    var weekday = require('./weekdayNameExport');
    var months = require('./dayToMonthExport');
    var dateDay = require('./dateDayExport');
    var weekday = weekday.weekdayName(num);
    var month = months.dayToMonth(num);
    var dayNum = dateDay.dateDay(num);
    var ans = `${weekday}, ${month} ${dayNum}, 2017`;
    return ans;
}

console.log(fullDate(142));