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

// if (min <= 15) {
//   alert('Min 0 - 15');
// } else if (min <= 30) {
//   alert('Min 16 - 30');
// } else if (min <= 45) {
//   alert('Min 31 - 45');
// } else {
//   alert('Min 46 - 59');
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

// const num = +prompt('Enter seasons number 1 - 4');
// let result;

// switch (num) {
//   case 1:
//     result = 'winter';
//     break;
//   case 2:
//     result = 'spring';
//     break;
//   case 3:
//     result = 'summer';
//     break;
//   case 4:
//     result = 'autumn';
//     break;

//   default:
//     result = 'Sorry, enter a number from 1 to 4';
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

// const login = prompt('Enter your login');
// let password;

// if (login === null || login.trim() === '') {
//   alert('Cancelled');
// } else if (login === 'admin') {
//   password = prompt('Enter your password');
//   if (password === 'main') {
//     alert('Welcome admin!');
//   } else {
//     alert('Wrong password!');
//   }
// } else {
//   alert('Who are you?!');
// }

// console.log(login);
// console.log(password);

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

// const timeValue = prompt('Enter the time value in minutes');

// if (timeValue > 0 && timeValue <= 1440) {
//   const hours = String(parseInt(timeValue / 60)).padStart(2, '0');
//   const minutes = String(timeValue % 60).padStart(2, '0');

//   console.log(`Correct time is ${hours}:${minutes}`);
// } else {
//   alert('Enter correct time in minutes');
// }

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

// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

// let min = 0;
// const max = 20;

// while (min <= max) {
//   console.log(min);
//   min++;
// }

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {
//   let total = 0;
//   while (max >= min) {
//     console.log(max);
//     if (max % 2 === 0) {
//       total += max;
//     }
//     max--;
//   }
//   return total;
// }

// console.log(getNumbers(2, 20));

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

// function isAdult(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     confirm('Are you rly adult?');
//     return false;
//   }
// }

// const age = +prompt('Are you rly adult?');
// const isAdult = age => (age >= 18 ? true : false);
// console.log(isAdult(age));

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// function fizzBuzz(num) {
//   while (num >= 1) {
//     if (num % 3 === 0 && num % 5 === 0) {
//       console.log('fizzbuzz');
//     } else if (num % 3 === 0) {
//       console.log('fizz');
//     } else if (num % 5 === 0) {
//       console.log('buzz');
//     } else {
//       console.log(num);
//     }
//     num--;
//   }
// }

// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 == 0 && i % 5 === 0) {
//       console.log('fizzbuzz');
//     } else if (i % 3 === 0) {
//       console.log('fizz');
//     } else if (i % 5 === 0) {
//       console.log('buzz');
//     } else {
//       console.log(i);
//     }
//   }
// }

fizzBuzz(20);
