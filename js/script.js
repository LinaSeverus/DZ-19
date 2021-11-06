'use strict';

//1. Создайте массив arr = [‘a’, ‘b’, ‘c’, ‘d’] и с его помощью выведите на экран строку ‘a+b, c+d’.

const arr = ['a', 'b', 'c', 'd'];
alert(arr[0] + `+` + arr[1] + `, ` + arr[2] + `+` + arr[3]);


//2. Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый.
// Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной


// const arr = [2, 5, 3, 9];

// let multiply = (item1, item2) => item1 * item2;

// let result = multiply(arr[0], arr[1]) + multiply(arr[2], arr[3]);
// console.log(result);


//3. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.

// const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// let newArr = arr.flat(1);
// let a = newArr.find(function (item) {
//     return item === 4;
// });
// console.log(a);


//4. Дан объект {js:[‘jQuery’, ‘Angular’], php: ‘hello’, css: ‘world’}. Выведите с его помощью слово ‘jQuery’.

// const obj = {
//     js: [`jQuery`, `Angular`],
//     php: `hello`,
//     css: `world`
// };

// const element = obj.js.splice(0, 1);
// console.log(element);


//5. Заполните массив следующим образом: в первый элемент запишите ‘x’, во второй ‘xx’, в третий ‘xxx’ и так далее

// function createArr(amountOfItems) {
//     const arr = [];
//     let symb = `x`;
//     for (let i = 0; i < amountOfItems; i++) {
//         arr.push(symb);
//         symb += arr[0];
//     }
//     return arr;
// }
// console.log(createArr(4));


//6. Заполните массив следующим образом: в первый элемент запишите ‘1’, во второй ’22’, в третий ‘333’ и так далее.

//АДСКИЙ АД!!!!!!!!

// const arr = [];
// for (let i = 1; i < 5; i++) {
//     let str = ``;

//     for (let j = 0; j < i; j++) {
//         str += i;
//     }
//     arr.push(str);
// }
// console.log(arr);


//7. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, 
//которым заполнять массив, а вторым — сколько элементов должно быть в массиве. Пример: arrayFill(‘x’, 5) сделает массив [‘x’, ‘x’, ‘x’, ‘x’, ‘x’].

// function arrayFill(symb, amountSymb) {
//     let arr = [];
//     for (let i = 0; i < amountSymb; i++) {
//         arr.push(symb)
//     }
//     return console.log(arr);
// }
// arrayFill(`$`, 8);


//8. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

// const arr = [1, 0, 0, 2, 3, 4, 5, 6];


// function getItemsAmount(array) {
//     let sum = 0;
//     for (let i = 0; i <= array.length - 1; i++) {
//         sum += array[i];
//         if (sum > 10) {
//             return i + 1;
//         }
//     }
// }
// console.log(getItemsAmount(arr));



//9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

// const arr = [1, 2, 3, 4, 5, 6];

// function reverse(someArray) {
//     const rev = [];
//     for (let i = someArray.length - 1; i >= 0; i--) {
//         rev.push(someArray[i]);
//     }
//     return rev;
// }
// console.log(reverse(arr));


//10. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. 
//Массив, конечно же, может быть произвольным.

// const arr = [[1, 2, 3], [4, 5], [6]];

// let newArr = arr.flat(1).reduce(function (prevValue, item) {
//     return prevValue + item;
// }, 0)

// console.log(newArr);


//11. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]].
// Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. 

// const arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

// let newArr = arr.flat(2).reduce(function (prevValue, item) {
//     return prevValue + item;
// }, 0)

// console.log(newArr);

