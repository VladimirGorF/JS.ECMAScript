"use strict";

// Домашнее задание

// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.

const arr = [1, 5, 7, 9];
const min = Math.min(...arr);

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.

function createCounter() {
  let counter = 0;
  return {
    increment() {
      counter++;
    },
    decrement() {
      counter--;
    },
    getCounter() {
      return counter;
    },
  };
}

const counter = createCounter();
counter.increment();
counter.decrement();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCounter());

// 3) Дополнительное задание, выполняем только если проходили работу с DOM.
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый
// найденный элемент с указанным классом в этом дереве.
// Пример

function findElementByClass(element, myClass) {
  if (element.classList.contains("my-class")) {
    return element;
  }
  const array = [...element.children];
  for (let i = 0; i < array.length; i++) {
    if (array[i].classList.contains("my-class")) {
      return array[i];
    }
    return findElementByClass(array[i], myClass);
  }
}

const rootElement = document.getElementById("root");
const targetElement = findElementByClass(rootElement, "my-class");
console.log(targetElement);
