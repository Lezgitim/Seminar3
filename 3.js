"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const firstNumber = Number.parseFloat(
  prompt(`Введите пожалуйста число N1 ↓↓↓`)
);
const secondNumber = Number.parseFloat(
  prompt(`Введите пожалуйста число N2 ↓↓↓`)
);
const thirdNumber = Number.parseFloat(
  prompt(`Введите пожалуйста число N3 ↓↓↓`)
);

const maxFunc = (firstNumber, secondNumber, thirdNumber) =>
  console.log(
    `Максимальное значение среди чисел ${firstNumber}, ${secondNumber}, ${thirdNumber} равно ${Math.max(
      firstNumber,
      secondNumber,
      thirdNumber
    )}`
  );

maxFunc(firstNumber, secondNumber, thirdNumber);

