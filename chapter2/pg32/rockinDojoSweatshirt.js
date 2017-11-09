function sweatshirtPricing(num) {
    var price = 20;
    if(num == 2) {
        price = Math.floor((price*num)-((price*num)*.09)) + 1;
    }
    else if(num == 3) {
        price = Math.floor((price*num)-((price*num)*.19)) + 1;
    }
    else if(num > 3){
        price = Math.floor((price*num)-((price*num)*.35)) + 1;
    }
    return price;
}

console.log(sweatshirtPricing(4));