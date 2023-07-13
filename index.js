// функция-предикат определяет, является ли число num четным
const isEven = (num) => {
  return num % 2 === 0;
};
console.log(isEven(6));
// функция увеличивает полученное число num на 10
const increaseNum = (num) => {
  return num + 10;
};
console.log(increaseNum(6));
const num = 6;

const result = isEven(increaseNum(num) + 1) ? num + 1 : 1 - num;
console.log(result);
