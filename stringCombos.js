function stringCombos(string) {
    var arrayOfStrings = [];
    for(var i = 0; i < string.length; i++) {
        for(var x = i+1; x < string.length+1; x++) {
            arrayOfStrings.push(string.slice(i,x));
        }
    }
    return arrayOfStrings;
}

console.log(stringCombos('dog'));