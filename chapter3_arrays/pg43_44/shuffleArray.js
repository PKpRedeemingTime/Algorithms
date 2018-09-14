function shuffleArray (arr) {
    var counter = arr.length, index, temp;
    while(counter > 0) {
        index = Math.floor(Math.random() * counter);
        counter--;
        temp = arr[counter];
        arr[counter] = arr[index];
        arr[index] = temp;
    }
    return arr;
}

console.log(shuffleArray([1,2,3,4,5]));