"use strict";
/* 
Маєте масив чисел. 
Використовуйте вже існуючі методи масиву для створення нового масиву, в якому лише парні числа з оригінального масиву.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

const array = [2, 55, 14, 33, 89, 0, 11, 44, 7, 31, 22, 0];

const newArray = array.filter(element => element % 2 === 0);

console.log(newArray);
