function stringConcat(...args) {
    var str = "";
    for(var i = 0; i < args.length; i++) {
        str += args[i];
    }
    console.log(str);
}
