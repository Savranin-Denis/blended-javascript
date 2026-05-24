// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так - виведіть повідомлення 'Вірно' у alert().
//    Якщо ні - виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// const number = Number(prompt('ввести число'));

// if (number === 10) {
//   alert('Вірно');
// } else {
//   alert('Невірно');
// }

// number === 10 ? alert('Вірно') : alert('Невірно');
// alert(number === 10 ? 'Вірно' : 'Невірно');

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * 59);

// // console.log(min);

// switch (min) {
//   case first:
//     min = 15;
//     console.log(min);

//     break;
//   case second:
//     break;
//   case third:
//     break;
//   case fourth:
//     break;

//   default:
//     break;
// }

// if (min < 15) {
//   alert(`${min} at 1st`);
// } else if (min < 30) {
//   alert(`${min} at 2st`);
// } else if (min < 45) {
//   alert(`${min} at 3st`);
// } else {
//   alert(`${min} at 4st`);
// }

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// const num = prompt('enter number from 1 to 4');
// let result;

// switch (num) {
//   case '1':
//     result = 'winter';
//     break;
//   case '2':
//     result = 'spring';
//     break;
//   case '3':
//     result = 'summer';
//     break;
//   case '4':
//     result = 'autumn';
//     break;

//   default:
//     result = 'So, What time of the year?';
// }

// console.log(result);

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// const userLogin = prompt('Enter your login');

// if (userLogin === 'admin') {
//   const userPassword = prompt('Enter your password');
//   if (userPassword === 'main') {
//     alert(`Hello Main!`);
//   } else {
//     alert('Wrong Password');
//   }
// } else if (userLogin === '' || userLogin === null) {
//   alert('cancelled');
// } else {
//   alert('Who are you???');
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     return `Not a number!`;
//   }
//   // return a < b ? a : b;
//   return Math.min(a, b);
// }

// console.log(min(5, 10));

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// function fizzBuzz(num) {
//   for (let index = 1; index <= num; index++) {
//     if (index % 3 === 0 && index % 5 === 0) {
//       console.log('fizzbuzz');
//     } else if (index % 3 === 0) {
//       console.log('fizz');
//     } else if (index % 5 === 0) {
//       console.log('buzz');
//     } else {
//       console.log(index);
//     }
//   }
// }

// fizzBuzz(15);

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

// function isAdult(age) {
//   if (age >= 18) {
//     return age;
//   } else {
//     return confirm('Are you rly adult?');
//   }
//   return age >= 18 || confirm('Are you rly adult?');
// }

// console.log(isAdult(27));

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// let timeValue = prompt('Please enter number');
// let hours = String(Math.floor(timeValue / 60)).padStart(2, '0');
// let minutes = String(timeValue % 60).padStart(2, '0');

// console.log(hours);
// console.log(minutes);
// console.log(`${hours}:${minutes}`);

// 'abc'.padStart(10); // "       abc"
// 'abc'.padStart(10, 'foo'); // "foofoofabc"
// 'abc'.padStart(6, '123465'); // "123abc"
// 'abc'.padStart(8, '0'); // "00000abc"
// 'abc'.padStart(1); // "abc"
