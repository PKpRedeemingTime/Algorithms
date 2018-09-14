function getDigits(str) {
    var zeroCount = 0;
    var numberCount = 0;
    var letterCount = 0;
    var x = [];
    if(str[0] == Number) {
        console.log("NUMBER!");
    }
    for(var i = 0; i < str.length; i++) {
        if(x.length == 0 && str[i] == 0) {
            continue;
        }
        else if(!isNaN(str[i])) {
            x.push(str[i]);
        }
        else {
            continue;
        }
    }
    return +x.join("");
}

console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));