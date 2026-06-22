console.log('Завдання 1:'); //+++++++++++++++++++++++++++++++++++++++++++
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];

// const doubleNumbers = numbers.map(number => number ** 2);

// const getDoubleNumbers = array => {
//   return array.map(el => {
//     return el ** 2;
//   });
// };

// console.log(doubleNumbers);
// console.log(getDoubleNumbers(numbers));
// console.log('');

console.log('Завдання 2:'); //+++++++++++++++++++++++++++++++++++++++++++++
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

const data = [
  { id: 1, values: [1, 2, 3] },
  { id: 2, values: [4, 5, 6] },
  { id: 3, values: [7, 8, 9] },
];

const arr = data.flatMap(el => el.values);

const getArr = arr => {
  return arr.flatMap(el => {
    return el.values;
  });
};

console.log(arr);
console.log(getArr(arr));
console.log('');

console.log('Завдання 3:');
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

const people = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];

const findName = people.some(el => el.age < 20);

const getFindName = arr => {
  return arr.some(el => {
    return el.age < 20;
  });
};

console.log(findName);
console.log(getFindName(people));
console.log('');

console.log('Завдання 4:');
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

const numbers = [2, 4, 6, 8, 10];

const checkNumbers = numbers.every(el => el % 2 === 0);

const getCheckNumbers = arr => {
  return arr.every(el => {
    return el % 2 === 0;
  });
};

console.log(checkNumbers);
console.log(getCheckNumbers(numbers));
console.log('');

console.log('Завдання 5:');
// Знайдіть перше непарне число

const newNumbers = [2, 1, 6, 8, 9, 10, 12];

const findNumber = newNumbers.find(el => el % 2 === 0);

const getFindNumber = arr => {
  return arr.find(el => {
    return el % 2 === 0;
  });
};

console.log(findNumber);
console.log(getFindNumber(newNumbers));
console.log('');

console.log('Завдання 6:');
// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

const numbersArray = [4, 2, 5, 1, 3];

const sortNumbers = numbersArray.toSorted((a, b) => a - b);

const getSortedNumbers = arr => {
  return arr.toSorted((a, b) => {
    return a - b;
  });
};

console.log(sortNumbers);
console.log(getSortedNumbers(numbersArray));
console.log('');

console.log('Завдання 7:');
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

const stringArray = ['banana', 'orange', 'apple', 'pear'];

const stringCompare = stringArray.toSorted((a, b) => a.localeCompare(b));

const getStringCompare = arr => {
  return arr.toSorted((a, b) => {
    return a.localeCompare(b);
  });
};

console.log(stringCompare);
console.log(getStringCompare(stringArray));
console.log('');

console.log('Завдання 8:');
//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

const users = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];

const usersSort = users.toSorted((a, b) => a.age - b.age);

const getUsersSort = arr => {
  return arr.toSorted((a, b) => {
    return a.age - b.age;
  });
};

console.log(usersSort);
console.log(getUsersSort(users));
console.log('');

console.log('Завдання 9:');
// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

const user = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];

const filteredUsers = user.filter(el => el.age > 20);

const getFilteredUsers = arr => {
  return arr.filter(el => {
    return el.age > 20;
  });
};

console.log(filteredUsers);
console.log(getFilteredUsers(user));
console.log('');

console.log('Завдання 10:');
// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

const numbersNext = [1, 2, 3, 4, 5];

const totalNumbers = numbersNext.reduce((acc, el) => acc + el, 0);

const getTotalNumbers = arr => {
  return arr.reduce((acc, el) => {
    return acc + el;
  }, 0);
};

console.log(totalNumbers);
console.log(getTotalNumbers(numbersNext));
console.log('');

console.log('Завдання 11:');
//  операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.
// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод subtract - Віднімає value від поточного значення. Повертає this.
// - метод multiply -Множить поточне значення на value. Повертає this.
// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// Приклад використання:
// const calc = new Calculator();
// Розроби клас Calculator, який дозволяє виконувати арифметичні
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

class Calculator {
  constructor() {
    this.result = 0;
  }

  number(value) {
    this.result = value;
    return this;
  }

  getResult(value) {
    return this.result;
  }

  add(value) {
    this.result += value;
    return this;
  }

  subtract(value) {
    this.result -= value;
    return this;
  }

  multiply(value) {
    this.result *= value;
    return this;
  }

  divide(value) {
    if (value === 0) {
      console.log('Error value is 0');
    }
    this.result /= value;
    return this;
  }
}

const calc = new Calculator();

const result = calc
  .number(10) // Встановлюємо початкове значення 10
  .add(5) // Додаємо 5 (10 + 5 = 15)
  .subtract(3) // Віднімаємо 3 (15 - 3 = 12)
  .multiply(4) // Множимо на 4 (12 * 4 = 48)
  .divide(2) // Ділимо на 2 (48 / 2 = 24)
  .getResult(); // Отримуємо результат: 24

console.log(result); // 24
console.log('');

console.log('Завдання 12:');
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

class Client {
  #login;
  #email;

  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

const newClient = new Client('Alice', 'alice@gmail.com');
console.log(newClient.login);
newClient.login = 'jacob';
console.log(newClient.login);
console.log('');

console.log('Завдання 13:');
//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

class Person {
  constructor(params) {
    this.name = params.name;
    this.age = params.age;
    this.gender = params.gender;
    this.email = params.email;
  }

  getDetails() {
    return {
      name: this.name,
      age: this.age,
      gender: this.gender,
      email: this.email,
    };
  }
}

class Employee extends Person {
  constructor(params) {
    super(params);
    this.salary = params.salary;
    this.department = params.department;
  }

  getEmployeeDetails() {
    return {
      salary: this.salary,
      department: this.department,
    };
  }
}

const emp = new Employee({
  name: 'Anna',
  age: 25,
  gender: 'female',
  email: 'anna@gmail.com',
  salary: 2500,
  department: 'IT',
});

console.log('Person data:', emp.getDetails());
console.log('Employee data:', emp.getEmployeeDetails());
console.log('');

console.log('Додаткове завдання');
// Знайти найдорожчий продукт у категорії "meat"
// Напиши для цього функцію getMostExpensiveMeatProduct(products)

const products = [
  { name: 'Apple', category: 'fruits', price: 1.2, stock: 50 },
  { name: 'Banana', category: 'fruits', price: 0.8, stock: 100 },
  { name: 'Carrot', category: 'vegetables', price: 0.5, stock: 200 },
  { name: 'Broccoli', category: 'vegetables', price: 1.0, stock: 150 },
  { name: 'Milk', category: 'dairy', price: 1.5, stock: 20 },
  { name: 'Cheese', category: 'dairy', price: 2.5, stock: 5 },
  { name: 'Chicken', category: 'meat', price: 5.0, stock: 30 },
  { name: 'Beef', category: 'meat', price: 7.0, stock: 25 },
];

// function getMostExpensiveMeatProduct(products) {
//   const meatProducts = products
//     .filter(el => el.category === 'meat')
//     .toSorted((a, b) => a.price - b.price);
//   return meatProducts[meatProducts.length - 1].name;
// }

const getMostExpensiveMeatProduct = products => {
  const meatProducts = products.filter(el => el.category === 'meat');
  if (meatProducts.length === 0) {
    return 'No meat here';
  }
  return meatProducts.reduce((acc, current) => {
    return current.price > acc.price ? current.name : acc.name;
  });
};

console.log(getMostExpensiveMeatProduct(products));
