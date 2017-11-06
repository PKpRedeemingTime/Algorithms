var myNumber = 42;
var myName = "Patrick"
function settingAndSwapping() {
    var temp = myNumber;
    myNumber = myName;
    myName = temp;
}

console.log("My number =",myNumber);
console.log("My name =",myName);
settingAndSwapping();
console.log("My number =",myNumber);
console.log("My name =",myName);