function dropTheMike(str) {
    arr = [];
    str = str.split(" ");
    for(var i= 0; i < str.length; i++) {
        if(str[i] == "Mike" || str[i] == "mike") {
            console.log("Stunned Silence");
            return "Stunned Silence";
        }
    }
    for(var i = 0; i < str.length; i++) {
        if(str[i] != "") {
            arr.push(str[i]);
        }
    }
    for(var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split("");
        arr[i][0] = arr[i][0].toUpperCase();
        arr[i] = arr[i].join("");
    }
    console.log(arr.join(" "));

}

dropTheMike("   Mike is very cool.   ");
