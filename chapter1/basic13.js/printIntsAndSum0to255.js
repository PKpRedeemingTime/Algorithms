function printIntsAndSum0to255() {
    var sum = 0;
    for(var i = 0; i < 256; i++) {
        sum+=i;
        console.log(i,"Sum:",sum);
    }
}

printIntsAndSum0to255();