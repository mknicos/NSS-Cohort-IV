//Javascript File//



console.log('hello from javascript');
console.log('Matt Knicos');


var a = 10;
var b = 20;
var c = a + b;
var d = c * b;
var e = d * (b - a);

var power = Math.pow(2, 8);

console.log("e is " + e);
console.log("2 to the 8th power is " + power);

// example
// you have a room that is 8ft by 12ft
// write the code that will compute the area of
// the room and print that out to the console

var length = 8;
var height = 12;

var area = length * height;

console.log('The area of the room is ' + area + ' square feet');

// example2
// you have a cylinder that is 5 inch radius, 9 inch height
// what is the volume in cubic inches
//

var radius = 5;
var cylHeight = 9;

var cylVolume = Math.pow(5,2) * Math.PI * 9;
console.log('The voulume of the cylinder is ' + cylVolume + ' cubic inches');


//you are a  floor painter
//you have an exceptionally large bucket of pain
//you can paint up to 29,572 sqare feet of surface without having to refill
//every house you encounter has 3 rooms. here are the dimensions.
//3 X 5
//7 X 9
//6 x 2
//how many houses can you pain before running out of paint.
//

var room1 = 5 * 3;
var room2 = 7 * 9;
var room3 = 6 * 2;
var paintTotal = 29572;

var totalFloorArea = room1 + room2 + room3;

var houses = paintTotal / totalFloorArea;

console.log('You can finish ' + Math.floor(houses) + 'houses');

/*
var firstName = prompt('Enter Your First Name');
console.log('Your first name is ' + firstName);
var lastName = prompt('Enter your last name');
console.log('Your name is ' + firstName + " " + lastName);
*/

// debugger


var lOfRoom = prompt('What is the length of the room?');
var hOfRoom = prompt('What is the height of the room?');
var wOfRoom = prompt('What is the width of the room?');

var volOfRoom = parseInt(lOfRoom) *parseInt(hOfRoom) * parseInt(wOfRoom);

console.log('The volume of your room is ' + volOfRoom);


var age = prompt('what is your age?');
age = parseInt(age);
if(age < 18)
  console.log('you cannot vote');
else
  console.log('you can vote');

