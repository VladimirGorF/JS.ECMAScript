"use strict";

const animal = {
  name: "Dusya",

  eat(meal, meal2) {
    console.log(` ${this.name} eating ${meal} and ${meal2}!`);
  },
};

const dog = {
  name: "Borya",
};
const arr = [animal, dog];

animal.eat.call(dog, "Картошку", " Petryshky");
animal.eat.apply(dog, [" Sup", "Картошку", "Вкусняшки"]);

const funcEatingDog = animal.eat.bind(dog);

funcEatingDog(" Sup", "Картошку");



// К задаче 2-ого семинар где банкомат у нас принимает деньги, с точностью не более копеек, я,как обещал, написал простую проверку без перевода в строку:
//  возможно вводить 15 цифр после запятой (например 11.000000000000001), если вводится длиннее, то на программу это уже и не влияет.

function checkAccount(account) {
  const account100 = account * 100;
 account100 - Math.trunc(account100) > 0 ? console.log("Число содержит знаки после сотых") : console.log("число корректное!");
  
}

checkAccount(11); // "число корректное!"
checkAccount(11.1); // "число корректное!"
checkAccount(11.01); // "число корректное!"

checkAccount(11.001); //"Число содержит цифры после сотых"
checkAccount(11.000000000000001); //"Число содержит цифры после сотых"
checkAccount(11.000007000000001); //"Число содержит цифры после сотых"