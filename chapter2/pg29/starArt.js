function drawLeftChar(num,char) {
    var str = "";
    for(var i = 1; i <= 75; i++) {
        if(i <+ num) {
            str+=char;
        }
        else {
            str+=" ";
        }
    }
    str+="end";
    console.log(str);
}

drawLeftChar(20,"*");

function drawRightChar(num,char) {
    var str = "";
    for(var i = 1; i <= 75; i++) {
        if(i <= 75-num) {
            str+=" ";
        }
        else {
            str+=char;
        }
    }
    console.log(str);
}

drawRightChar(20,"*");

function drawCenteredChar(num,char) {
    var str = "";
    var cent = Math.floor((75-num)/2);
    for(var i = 1; i <= 75; i++) {
        if(i <= cent) {
            str+=" ";
        }
        else if(i <= cent+num) {
            str+=char;
        }
        else {
            str+=" ";
        }
    }
    console.log(str);
}

drawCenteredChar(20,"*");