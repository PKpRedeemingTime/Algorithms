function finalCountdown(param1,param2,param3,param4) {
    var x = param2;
    while(x < param3+1) {
        if(x % param1 == 0 && x != param4) {
            console.log(x);
        }
        x++;
    }
}

finalCountdown(3,5,17,9);