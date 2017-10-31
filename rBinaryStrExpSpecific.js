function rBinaryStrExpSpecific(str, newStr, arr) {
    var newStr = newStr || "";
    arr = arr || []
    if(!str[newStr.length]) {
        arr.push(newStr);
        return arr;
    }
    else {
        if(str[newStr.length] != "?") {
            rBinaryStrExpSpecific(str, newStr + str[newStr.length], arr);
            return arr;
        }
        else {
            rBinaryStrExpSpecific(str, newStr + "0", arr);
            rBinaryStrExpSpecific(str, newStr + "1", arr);
        }
    }
    return arr;
}
console.log(rBinaryStrExpSpecific("???"));