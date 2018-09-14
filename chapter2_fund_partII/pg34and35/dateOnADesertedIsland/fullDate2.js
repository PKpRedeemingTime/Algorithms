function fullDate(num) {
    var weekday = require('./weekdayNameExport');
    var months = require('./dayToMonthExport');
    var dateDay = require('./dateDayExport');
    var yearAns = require('./yearExport');
    var weekday = weekday.weekdayName(num);
    var month = months.dayToMonth(num);
    var dayNum = dateDay.dateDay(num);
    var year = yearAns.year(num);
    var ans = `${weekday}, ${month} ${dayNum}, ${year}`;
    return ans;
}

console.log(fullDate(8475));