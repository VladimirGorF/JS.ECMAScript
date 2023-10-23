"use strict";

// const timeStart = new Date().getTime();
// console.log("Start long calculations");
// for (let i = 0; i < 200000000; i++) {
//   const date = new Date(i);
// }
// setTimeout(() => {
//   console.log("Прошел таймаут 5 секунд");
// }, 3000);

// console.log("End long calculations");
// console.log(`Время выполнения программы: ${new Date().getTime() - timeStart}`);

// GET запрос -------------------------------------------------------------
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://www.bom.mu");
// xhr.send();

// xhr.onload = () => {
//   xhr.status != 200
//     ? console.log(`Error ${xhr.status}:${xhr.statusText}`)
//     : console.log(`User: ${xhr.response}`);
// };

// xhr.onprogress = (event) => {
// console.log(`Get from server: ${event.loaded} bytes`);
// }
// xhr.onerror = () => {
//   console.log("Request Error");
// }

// xhr.abort();  // перервать процесс

// POST запрос ---------------------------------------------------------------
// const formData = new FormData();
// formData.append("name", "Slava");
// formData.append("surname", "Belkinn");

// const xhr = new XMLHttpRequest();
// xhr.open("POST", "https://www.bom.mu");

// xhr.send(formData);

// xhr.onload = () => {
//   xhr.status != 200
//     ? console.log(`Error ${xhr.status}:${xhr.statusText}`)
//     : console.log(`User: ${xhr.response}`);
// };

// xhr.onprogress = (event) => {
// console.log(`Get from server: ${event.loaded} bytes`);
// }

// xhr.onerror = () => {
//   console.log("Request Error");
// }

// xhr.abort();  // перервать процесс

// const getUser = async (url) => {
//   const response = await fetch(url);
//   const user = await response.text();
//   console.log(user);
// }

// getUser('https://api.github.com/users/octocat');

// const getUser = async (url) => {
//   const user = await (await fetch(url)).text();
//   const userObject = JSON.parse(user); //  преобразуем из JSON в объект
//   try {
//     if (!userObject.drein) {
//       throw new Error("Вот такая вот моя ошибка собственная. Потму что нет такого свойства у этого объекта");
//     }
//   } catch (error) {
//     console.log(`A mistake was happened here: ${(error.name, error.message)}`);
//   } finally {
//     console.log(userObject.surname);
//   }
// };

// getUser("file.json");

//   function doSomething() {
//     return new Promise((resolve, reject) => {
//       console.log("Готово.");
//       // Успех в половине случаев.
//       if (Math.random() > 0.5) {
//         console.log('успешный успех!!!!!!!!');
//         resolve("Успех");
//       } else {
//         reject("Ошибка");
//       }
//     });
//   }

//   doSomething().then(successCallback, failureCallback);

//   let promise = new Promise(resolve => {
//     setTimeout(() => resolve("done!"), 1000);
//   });

//   promise.then(alert); // выведет "done!" спустя одну секунду

// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("done!"), ms);
//   });
// }

// delay(1000).then(() => alert("выполнилось через 1 секунды"));

// Задание 1. Получение данных о пользователе.

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

// Работа должна быть выполнена с API: https://reqres.in/

// async function getUserData(ID) {
//   try {
//     let response = await fetch("https://reqres.in/api/users?page=2");
//     if (response.ok) {
//       let json = await response.json();
//       const dataArray = json.data;
//       for (let i = 0; i < dataArray.length; i++) {
//         if (dataArray[i].id === ID) {
//           console.log(dataArray[i]);
//           return dataArray[i];
//         }
//       }
//       throw new Error(`Пользователя  с ID: ${ID} не существует!`);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// getUserData(9);

// Варинат с .then----------------------------------------------------------

// async function getUserData(ID) {
//   fetch("https://reqres.in/api/users?page=2")
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error("Error of reading DataBase!");
//       }
//     })
//     .then((response) => {
//         const dataArray = response.data;
//         for (let i = 0; i < dataArray.length; i++) {
//           if (dataArray[i].id === ID) {
//             console.log(dataArray[i]);
//             return dataArray[i];
//           }
//         }
//       throw new Error(`Пользователя  с ID: ${ID} не существует!`);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// getUserData(2);
// getUserData(9);

// Создаётся объект promise
let promise = new Promise((resolve, reject) => {


    // переведёт промис в состояние fulfilled с результатом "result"
    reject("result");


});

// promise.then навешивает обработчики на успешный результат или ошибку
promise
  .then(
    result => {
      // первая функция-обработчик - запустится при вызове resolve
      alert("Fulfilled: " + result); // result - аргумент resolve
    },
    error => {
      // вторая функция - запустится при вызове reject
      alert("Rejected: " + error); // error - аргумент reject
    }
  );