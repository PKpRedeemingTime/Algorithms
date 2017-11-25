var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function dayToMonth(num) {
    if(num > 365) {
        return false;
    }
    var days = [31,28,31,30,31,30,31,31,30,31,30,31];
    var x = 0;
    while(num > days[x]) {
        num-=days[x];
        x++;
    }
    return months[x];
}

console.log(dayToMonth(320));