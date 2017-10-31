function encode(str) {
    var temp = "";
    for(var i = 0; i < str.length-1; i ++) {
        var count = 1;
        for(var x = i + 1; x < str.length; x ++) {
            if(str[i] == str[x]) {
                count++;
            }
            else {
                break;
            }
        }
        temp += str[i];
        temp += count;
        i += count-1;
    }
    if(temp.length < str.length) {
        return temp;
    }
    else {
        return str;
    }
}

var str = "aaaabbccccaaaddeffg"
console.log(encode(str));