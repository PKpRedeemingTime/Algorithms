function countingDojoWay() {

}for(var i = 1; i < 101; i ++) {
    if(i % 5 == 0 && i % 10 != 0) {
        console.log("coding");
    }
    else if(i % 10 == 0) {
        console.log(i, "dojo");
    }
    else {
        console.log(i);
    }
}

countingDojoWay();