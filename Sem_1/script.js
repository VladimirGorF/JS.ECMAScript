"use strict";

// const arr = [6, 5, 8, 3, 9];

// function min(num1, num2, num3, ...rest) {
//   console.log(arguments);
//   return rest;
// }

// console.log(min(...arr));
// min(...arr);

// const createCounter = () => {
//   let counter = 0;
//   return () => {
//     return ++counter;
//   };
// };

// const counter2 = createCounter();
// console.log(counter2());

// console.log(counter2());

// const counter3 = createCounter();
// console.log(counter3());

// const student = {
//   firstName: "Ivan",
//   age: 21,
// };
//

// Создайте функцию mergeArrays, которая принимает два массива и возвращает новый массив, содержащий все элементы из обоих массивов. Используйте spread оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1,
// 2, 3, 4, 5, 6]

// const catsArray = [1, 2, 3];
// const studentsArray = [4, 5, 6];

// function unionArrays(arr1, arr2) {
//   return [...arr1, ...arr2];
// }

// console.log(unionArrays(catsArray, studentsArray));

// 2. Создайте функцию removeDuplicates, которая принимает
// любое количество аргументов и возвращает новый массив, содержащий только уникальные значения. Используйте rest оператор для сбора всех аргументов в массив а затем filter для определения дубликатов. removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый результат: [1, 2, 3, 4, 5]

// function removeDuplicates(...arr) {
//   return arr.filter((element, index) => {
//     return arr.indexOf(element) === index;
//   });
// }

// console.log(removeDuplicates(1, 3, 5, 7, 3, 2, 1, 2, 2, 2, 9, 4, 4));

// 1. Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.

// function getEvenNumbers(array) {
//   return array.filter((element) => {
//     return element % 2 === 0;
//   });
// }
// console.log(getEvenNumbers([1,2,3,4,5,6,7]));

// 2. Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.

// function calculateAverage(array) {
//   return (
//     array.reduce((sum, currentItem) => (sum += currentItem)) / array.length
//   );
// }
// console.log(calculateAverage([2, 3, 4,5]));

// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая буква каждого слова является заглавной.

// function capitalizeFirstLetter(string){

// return string
// .split(' ')
// .map((item) => {
//   return (item[0].toUpperCase() + item.slice(1));
// })
// .join(' ');

// }

// console.log(capitalizeFirstLetter('Привет вася как дела'));

// Напишите функцию createCalculator, которая принимает начальное значение и возвращает объект с двумя методами: add и subtract. Метод add должен увеличивать значение на переданное число, а метод subtract должен уменьшать значение на переданное число. Значение должно быть доступно только через методы объекта, а не напрямую.

// function createCalculator(initialValue) {
//   let num = initialValue;
//   return {
//     add(value) {
//       num = num + value;
//     },
//     subtract(value) {
//       num = num - value;
//     },
//     getValue(){
//       return num;
//     }
//   };
// }

// const calculate = createCalculator(5);
// calculate.add(2);  // 7
// calculate.subtract(4);  // 3
// calculate.add(2); // 5
// console.log(calculate.getValue());

// Напишите функцию createGreeting, которая принимает имя пользователя и возвращает функцию, которая будет выводить приветствие с использованием этого имени.
// Пример использования:
// const greeting = createGreeting('John');
// greeting(); // Ожидаемый результат: "Hello, John!"

// function createGreeting (userName){
// return () => {
//   console.log(`Hello, ${userName}!`);
// }
// }

// const greeting = createGreeting('John');
// greeting(); // Ожидаемый результат: "Hello, John!"

// 5. Задача: Напишите функцию createPasswordChecker, которая принимает допустимую длину пароля в качестве аргумента и возвращает функцию для проверки введенного пароля. Возвращаемая функция должна принимать пароль и возвращать true, если его длина соответствует допустимой, и false в противном случае.
// Пример использования:
// const isPasswordValid = createPasswordChecker(8); console.log(isPasswordValid('password')); // Ожидаемый результат: false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true

// function createPasswordChecker (num){
// return (password) => {
//   return password.length >= num;
// }
// }

// const isPasswordValid = createPasswordChecker(8);
//  console.log(isPasswordValid('password')); // Ожидаемый результат: false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true

// Напишите рекурсивную функцию sumDigits, которая принимает положительное целое число в качестве аргумента и возвращает сумму его цифр.
// Пример использования:

// function sumDigits(number) {
//   if (number < 10) {
//     return number;
//   }
//   return (number % 10) + sumDigits(Math.floor(number / 10));
// }

// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)


