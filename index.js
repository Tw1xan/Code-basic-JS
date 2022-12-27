console.log(3 + 1);

console.log(-3); // => -3

console.log(6 - -81);

console.log(-10 - -90);

console.log(6 - -81);

console.log("\\ \\ \\\\ \\ '\"");

console.log('"Khal Drogo\'s favorite word is "athjahakar""');

console.log("a".length);

console.log("Gregor Clegane\nDunsen\nPolliver\nChiswyck");

console.log("Winter " + "came " + "for " + "the " + "House " + "of Frey.");

function msGo() {
  console.log(-3);
}

console.log(String.fromCharCode(126));
console.log(String.fromCharCode(94));
console.log(String.fromCharCode(37));

const motto = "I will definitely succeed";
console.log(motto);

let debtors; //Должники
let secondVariable;
let thirdVariable;
let fourthVariable;

console.log(debtors, secondVariable, thirdVariable, fourthVariable);

let swissFranc = 100;

let rublesPerEuro = 65;
let euroCount = 100 * 0.85;
let rublesCount = rublesPerEuro * euroCount;

console.log("The price is " + rublesCount + " rubles");

let eurosCount = 100;

console.log("Переменные и конкатенация");

let info = "We couldn't verify your mother's maiden name.";
let intro = "Here is important information about your account security.";

let firstName = "Joffrey";
let greeting = "Hello";

// BEGIN (write your solution here)

let gluingOfString = greeting + ", " + firstName + "!";

console.log(gluingOfString);

let bodyOfletter = info + "\n" + intro;

console.log(gluingOfString + "\n" + bodyOfletter);

// END

// Стили именования

let lowerCamelCase;

console.log(lowerCamelCase);

// JavaScript: Магические числа

/* eslint prefer-const: 0, prefer-template: 0 */

let king = "King Balon the 6th";

// BEGIN (write your solution here)

let numberCastle = 6;

let numberOfRooms = 17;

console.log(king + " has " + numberCastle * numberOfRooms + " rooms.");

// END
//JavaScript: Слабая типизация

console.log("7" - (-8 - -2));
console.log(7 - ("-8" - -2));
console.log(7 - (-8 - -2) + "4");

console.log();

const result = Math.pow(2, "boom");
console.log(result);

//JavaScript: Функции с переменным числом параметров

const minNumber = Math.min(3, 10, 22, -3, 0);
console.log(minNumber);

const nameBob = "Robb";

console.log(nameBob.length);

const temperature = 22.93;
const roundedTemperature = temperature.toFixed(1);

console.log(roundedTemperature);

const name = "Tirion";
console.log(name.toUpperCase());

console.log(name);
