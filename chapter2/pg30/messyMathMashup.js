function messyMath(num) {
    var count = 0;
    var x = 0;
    while(x <= num) {
        if(num/3 == count) {
            return -1;
        }
        else if(count % 7 == 0 && count != 0) {
            count+=(x+x);
            x++;
            continue;
        }
        else {
            count+=x;
            x++;
        }
        if(count % 3 == 0 && count != 0) {
            x++;
            continue;
        }
    }
    return count;
}

console.log(messyMath(8));

//not solved