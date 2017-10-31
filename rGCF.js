function rGCF(a,b) {
    if (a == b){
        return a;
    }
    else if (a == 1) {
        return a;
    }
    else if (b == 1) {
        return b;
    }
    else if (a > b) {
        if(a % b == 0) {
            return b;
        }
        else {
            a = a % b;
        }
    }
    else if (b > a) {
        if(b % a == 0) {
            return a;
        }
        else {
            b = b % a;
        }
    }
    return rGCF(a,b);
}

console.log(rGCF(26,138));