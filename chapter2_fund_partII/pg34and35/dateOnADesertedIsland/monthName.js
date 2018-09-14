var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function monthName(num) {
    if(num > 12) {
        return false;
    }
    var month = months[num-1];
    return month;
}

console.log(monthName(12));