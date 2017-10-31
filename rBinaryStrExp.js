function rBinaryStrExp(str) {
    var arr = [];
    var curr = "";
    (function helper(str,curr,arr) {
        if(curr.length == str.length) {
            arr.push(curr);
        }
        else {
            helper(str, curr + "0", arr);
            helper(str, curr + "1", arr);
        }
    })(str,curr,arr);
    return arr;
}

console.log(rBinaryStrExp("abc"));