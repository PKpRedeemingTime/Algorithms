function rBinaryStrExpNoStrings(str) {
    var arr = [];
    (function helper(str,arr) {
        if(str.indexOf("?") == -1) {
            arr.push(str);
        }
        else {
            var tempStr1 = "";
            var tempStr2 = "";
            var x = str.indexOf("?");
            if(x == 0) {
                tempStr1 += "0";
                tempStr1 += str.substring(x+1,str.length);
                tempStr2 += "1";
                tempStr2 += str.substring(x+1,str.length);
                helper(tempStr1,arr);
                helper(tempStr2,arr);
            }
            else {
                tempStr1 += str.substring(0,x);
                tempStr1 += "0";
                tempStr1 += str.substring(x+1,str.length);
                helper(tempStr1,arr);
                tempStr2 += str.substring(0,x);
                tempStr2 += "1";
                tempStr2 += str.substring(x+1,str.length);               
                helper(tempStr2,arr);
            }
        }
    })(str,arr);
    return arr;
}

var str = "??d?";
console.log(rBinaryStrExpNoStrings(str));