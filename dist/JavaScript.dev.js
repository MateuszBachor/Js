"use strict";

// Zadanie 1
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (5000 - 1500)) + 1500;
}

var payList = [];

for (var i = 0; i < 12; i++) {
  payList.push(getRandomInteger());
}

console.log(payList);
var sum = 0;

for (var _i = 0; _i < payList.length; _i++) {
  sum = sum + payList[_i];
}

console.log(sum); // Zadanie 2

function isFirst(number) {
  if (number < 2) {
    return false;
  }

  for (var _i2 = 2; _i2 < number; _i2++) {
    if (number % _i2 == 0) return false;
  }

  return true;
}

var numberList = [];

for (var _i3 = 0; _i3 < 100; _i3++) {
  if (isFirst(_i3)) {
    numberList.push(_i3);
  }
}

console.log(numberList); //Zadanie 3

alert("Jaką formę dostawy chcesz wybrać?");
var packPickup = prompt("1.Paczkomat 2.Odbiór Własny 3.Poczta Polska 4.Kurier");

switch (packPickup) {
  case "1":
    console.log("Forma dostawy: Paczkomat");
    break;

  case "2":
    console.log("Forma dostawy: Odbiór Własny");
    break;

  case "3":
    console.log("Forma dostawy: Poczta Polska");
    break;

  case "4":
    console.log("Forma dostawy: Kurier");
    break;
} //Zadanie 4


var products = prompt("Ile produktów znajduje się w koszyku?");

if (products > 0 && products < 10) {
  console.log("Zrób zakupy na większą ilość produktów aby otrzymać rabat!");
}

if (products > 10 && products < 20) {
  console.log("Znikżka 5%");
}

if (products > 20 && products < 30) {
  console.log("Znikżka 10%");
}

if (products > 30 && products < 40) {
  console.log("Znikżka 15%");
} else {
  console.log("Error");
}