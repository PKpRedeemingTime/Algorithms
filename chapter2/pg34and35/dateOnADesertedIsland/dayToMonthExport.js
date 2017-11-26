var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

module.exports = {
    dayToMonth: function(num) {
        var days = [31,28,31,30,31,30,31,31,30,31,30,31];
        var year = 1;
        var x = 0;
        while(num > days[x]) {
            if(year % 4 != 0) {
                var days = [31,28,31,30,31,30,31,31,30,31,30,31];
            }
            else {
                var days = [31,29,31,30,31,30,31,31,30,31,30,31];
            }
            num-=days[x];
            x++;
            if(x == days.length) {
                x = 0;
                year++;
            }
        }
        return months[x];
    }
}