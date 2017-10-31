function almostIncreasingSequence(seq) {
    var count = 0;
    for(var i = 0; i < seq.length; i++) {
        if(seq[i] >= seq[i+1]) {
            count++
        }
        if(count > 1) {
            return false;
        }
        if(seq[i] <= seq[i-2] && seq[i+1] <= seq[i-1]) {
            return false;
        }
    }
    return true;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]));
