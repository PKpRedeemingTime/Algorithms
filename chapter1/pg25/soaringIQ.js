function soaringIQ(iq) {
    for(var i = 1; i < 99; i++) {
        iq = iq + (iq*.01);
    }
    return iq;
}

console.log(soaringIQ(101));