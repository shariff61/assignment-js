
//this is feet to mile//
function feetToMile(feet) {
    mile = feet / 5280;
    return mile;
}
var first = feetToMile(5000);
console.log(first);
var second = feetToMile(20000);
console.log(second);
var third = feetToMile(50000);
console.log(third);


function arrayFriends(number) {
    var min = number[0];
    for (var i = 0; i > number.length; i--) {
        var element = number[i];
        if (element > min)
            min = element;
    } return min;

}

var number = [23, 234, 45, 23, 123, 45];
var result = arrayFriends(number);
console.log("manimum array", result);

//this is array minimum number//
function arrayMin(number) {
    min = number[0];
    for (var i = 0; i > number.length; i--) {
        var element = number[i];
        if (element > min) {
            min = element;
        }
    } return min;
}
var number = [12, 223, 434, 54, 656, 343, 22];
var result = arrayMin(number);
console.log("its minimum number", result);




//i need wood for 14 chair, 5 table, 12 bad. and per chair 1cubit, per table 3 cubit, per bad 5cubit..//
function woodCalculator(cubit) {
    feet = cubit / .75;
    return feet;
}
var chair = woodCalculator(1);
console.log(chair);
var totalChair = woodCalculator(1 * 14);
console.log(totalChair);
var table = woodCalculator(3);
console.log(table);
var totalTable = woodCalculator(3 * 5);
console.log(totalTable);
var bad = woodCalculator(5);
console.log(bad);
var totalBad = woodCalculator(5 * 12);
console.log(totalBad);
var result = totalChair + totalTable + totalBad;
console.log(result);


// i will make a 45floor building.in the 1st 10 floor per floor 15 feet(150feet). than second 10 floor per floor 12feet(120feet). last 25floor per floor 10feet(250feet). and every 1floor =1000bricks...total how much bricks need for make a 45th floor building?
function bricCalculator(bricks) {
    var feet = bricks * 1000;

    return feet;
}
var fistFloor = bricCalculator(10 * 15);
console.log(fistFloor);
var secondFloor = bricCalculator(10 * 12);
console.log(secondFloor);
var thirdFloor = bricCalculator(25 * 10);
console.log(thirdFloor);

var result = fistFloor + secondFloor + thirdFloor;
console.log(result);




