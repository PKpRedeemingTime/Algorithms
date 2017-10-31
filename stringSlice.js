function stringSlice(str, b, e) {
    var str1 = "";
    if(e == null) {
        for(var i = b; i < str.length; i++) {
            str1 += str[i];
        }
    }
    else {
        for(var i = b; i <= e; i++) {
            str += str[i];
        }
    }
    return str1;
}