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

const nameOne = "Tirion";
console.log(nameOne.toUpperCase());

console.log(nameOne);

const text = "Never forget what you are, for surely the world will not";

console.log("First:" + text[0]);
console.log("Last:" + text[text.length - 1]);

const textTwon =
  "When \t\n you play a \t\n game of thrones you win or you die.";

console.log(textTwon.slice(5, 15).trim().length);

//javascript Возврат значений

const sayHurrayThreeTimes = () => {
  const utka = "hurray!";
  return `${utka} ${utka} ${utka}`;
  console.log(utka); // не выполниться
};

const truncate = (text, length = 10) => {
  text = "Привет, я сейчас сьем два бутерброда с колбасой и сыром";
  const result = text.slice(0, length) + "...";
  return result;
};
truncate();
const isStrongPassword = (password) => {
  const length = password.length;
  return length > 8 && length < 20;
};
isStrongPassword("qwerty");

const isLeapYear = (year) => {
  const result = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  return result;
};
console.log(isLeapYear(2016));
