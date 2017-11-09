function generateCoinChange(cents) {
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    var pennies = 0;
    while(cents > 0) {
        if(cents >= 25) {
            quarters+=1;
            cents-=25;
            continue;
        }
        else if(cents >= 10) {
            dimes+=1;
            cents-=10;
            continue;
        }
        else if(cents >= 5) {
            nickels+=1;
            cents-=5;
            continue;
        }
        else if(cents >= 1) {
            pennies+=1;
            cents-=1;
            continue;
        }
    }
    console.log("Quarters:",quarters,"Dimes:",dimes,"Nickels:",nickels,"Pennies:",pennies);
}

generateCoinChange(94);