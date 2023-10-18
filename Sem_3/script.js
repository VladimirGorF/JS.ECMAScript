"use strict";

// Задание 1: "Управление библиотекой книг"
// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:
// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).
// Пример использования класса

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
  displayInfo() {
    console.log(
      `Tittle: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`
    );
  }
}

const book = new Book("BookName1", "Author1", 123);
book.displayInfo(); // "Title: BookName1, Author: Author1, Pages: 123"

// Задание 2: "Управление списком студентов"
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте в консоль.

// Пример использования класса

class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
}

const student = new Student("John Smith", 16, "10th grade");
student.displayInfo(); // "Name: John Smith, Age: 16, Grade: 10th grade"

// К задаче 2-ого семинара где банкомат у нас принимает деньги, с точностью не более копеек ,как я и обещал, написал простую проверку без перевода в строки и подсчета длин "хвостов":
//  возможно прверять 15 цифр после запятой (например 11.000000000000001), если вводится длиннее, то на программу это уже и не влияет.

function checkAccount(account) {
  const accountX100 = account * 100;
  accountX100 - Math.trunc(accountX100) > 0
    ? console.log("Число содержит знаки после сотых")
    : console.log("число корректное!");
}

// примеры:
checkAccount(11); // "число корректное!"
checkAccount(11.1); // "число корректное!"
checkAccount(11.01); // "число корректное!"

checkAccount(11.001);              //"Число содержит цифры после сотых"
checkAccount(11.000000000000001);  //"Число содержит цифры после сотых"
checkAccount(11.000007000000001);  //"Число содержит цифры после сотых"
