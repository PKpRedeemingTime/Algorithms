var x = 0;
var y = 0;

function reset() {
    x = 0;
    y = 0;
}

function moveBy(xOffset,yOffset) {
    x+=xOffset;
    y+=yOffset;
}

function xLocation() {
    return x;
}

function yLocation() {
    return y;
}

function distanceFromHome() {
    return Math.abs(x) + Math.abs(y);
}

moveBy(1,-2);
moveBy(3,1);
console.log(xLocation());
console.log(yLocation());
console.log(distanceFromHome());