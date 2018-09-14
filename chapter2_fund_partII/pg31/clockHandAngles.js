function clockHandAngles(seconds) {
    var hrang = seconds*(1/120); 
    var minang = seconds*.1;
    var secang = seconds*6;
    if(secang >= 360) {
        while(secang >= 360) {
            secang-=360;
        }
    }
    if(minang >= 360) {
        while(minang >= 360) {
            minang-=360;
        }
    }
    if(hrang >= 360) {
        while(hrang >= 360) {
            hrang-=360;
        }
    }
    console.log("Hour hand:",hrang,"Minute hand:",minang,"Second hand:",secang);
}

clockHandAngles(119730);