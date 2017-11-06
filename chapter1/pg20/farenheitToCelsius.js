function farenheitToCelsius(fDegrees) {
    var celsius = (fDegrees - 32) * 5/9;
    return celsius;
}

console.log(farenheitToCelsius(100));