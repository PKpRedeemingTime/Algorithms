function firstDuplicate(a) {
    var sol = -1;
    var indx = a.length;
    for(var i = 0; i < a.length; i++) {
        var x = a.length-1;
        while(x > i) {
            if(a[i] == a[x]) {
                if((x - i) < indx) {
                    sol = a[x];
                    indx = x - i;
                }
            }
            x--;
        }
    }
    return sol;
}

console.log(firstDuplicate([2, 3, 3, 1, 5, 2]));