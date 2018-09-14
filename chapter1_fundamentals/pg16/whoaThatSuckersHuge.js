function whoaThatSuckersHuge() {
    var sum = 0;
    for(var i = -300000; i < 300001; i++) {
        if(i % 2 != 0) {
            sum+=i;
        }
    }
    console.log(sum);
}

whoaThatSuckersHuge();