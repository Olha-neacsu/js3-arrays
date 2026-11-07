'use strict';

//1----------------------------------------------------------
/*
 * Sunny Coffee показує меню, лише якщо в ньому є напої.
 * 1. Оголоси масив menu з назвами напоїв:
 *    'Espresso', 'Latte', 'Cappuccino', 'Americano', 'Raf'.
 * 2. Виведи в консоль кількість напоїв у форматі: Напоїв у меню: 5
 * 3. Якщо в меню є хоча б один напій — виведи 'Меню доступне',
 *    інакше — виведи 'Меню порожнє'.
 */

// Твій код тут

// const menu = ['Espresso', 'Latte', 'Cappuccino', 'Americano', 'Raf'];

// console.log(`Напоїв у меню: ${menu.length}`);

// const message = menu.length > 0 ? 'Меню доступне' : 'Меню порожнє';

// console.log(message);

//2--------------------------------------------------------------
/*
 * SmileCare зберігає розклад прийомів лікаря на сьогодні —
 * масив годин, коли призначені пацієнти.
 * 1. Оголоси масив appointments зі значеннями: '09:00', '11:30', '14:00', '16:30'.
 * 2. Дістань перший прийом (перший елемент) і збережи у змінну firstAppointment.
 * 3. Дістань останній прийом через appointments.length - 1
 *    і збережи у змінну lastAppointment.
 * 4. Виведи повідомлення у форматі:
 *    Перший прийом: 09:00, останній: 16:30
 * 5. Останній пацієнт перепризначився на 17:00 — заміни останній
 *    елемент масиву на '17:00' і виведи оновлений масив.
 * 6. Якщо прийомів більше ніж 3 — виведи 'Щільний день',
 *    інакше — виведи 'День вільний'.
 */

// Твій код тут

// const appointments = ['09:00', '11:30', '14:00', '16:30'];
// const firstAppointment = appointments[0];
// const lastAppointment = appointments.length - 1;

// console.log(
//   `Перший прийом: ${firstAppointment}, останній: ${appointments[lastAppointment]}`,
// );

// appointments[lastAppointment] = '17:00';

// console.log(
//   `Перший прийом: ${firstAppointment}, останній: ${appointments[lastAppointment]}`,
// );

// const message = appointments.length > 3 ? 'Щільний день' : 'День вільний';
// console.log(message);

//3-------------------------------------------------------------------
/*
 * SmileCare тримає чергу записів на сьогодні — масив імен пацієнтів.
 * Функція checkQueue(queue) перевіряє її через довжину масиву.
 * 1. Оголоси функцію checkQueue(queue).
 * 2. Якщо queue.length === 0 — поверни 'Записів немає'.
 * 3. Інакше — поверни рядок 'Записів у черзі: N', де N — кількість записів.
 */

// Твій код тут

// function checkQueue(queue) {
//   if (queue.length === 0) {
//     return `Записів немає`;
//   } else {
//     return `Записів у черзі: ${queue.length}`;
//   }
// }

// console.log(checkQueue(['Alex', 'Sam', 'Kim'])); // Записів у черзі: 3
// console.log(checkQueue(['Max'])); // Записів у черзі: 1
// console.log(checkQueue([])); // Записів немає
// console.log(checkQueue(['Alex', 'Sam', 'Kim', 'Max', 'Lee'])); // Записів у черзі: 5

//4----------------------------------------------------------------------
/*
 * Sunny Coffee показує позиції замовлення одним рядком у чеку,
 * а в дужках — їхню кількість.
 * Функція buildReceiptLine(order) приймає масив назв напоїв.
 * 1. Оголоси функцію buildReceiptLine(order).
 * 2. З'єднай назви напоїв у рядок методом join() з роздільником ', '.
 * 3. Поверни рядок виду `Latte, Espresso, Cappuccino (3)` — склеєні напої,
 *    а в дужках кількість позицій (order.length).
 */

// Твій код тут

// function buildReceiptLine(order) {
//   const itemsList = order.join(', ');
//   return `${itemsList} (${order.length})`;
// }

// console.log(buildReceiptLine(['Latte', 'Espresso', 'Cappuccino'])); // Latte, Espresso, Cappuccino (3)
// console.log(buildReceiptLine(['Americano', 'Raf'])); // Americano, Raf (2)
// console.log(buildReceiptLine(['Mocha'])); // Mocha (1)

//5------------------------------------------------------------------------
/*
 * Сервіс гравіювання рахує ціну за кількістю слів у написі.
 * 1. Оголоси функцію getEngravingPrice(message, pricePerWord):
 *    message — напис зі слів, розділених пробілами; pricePerWord — ціна одного слова.
 * 2. Розбий message на слова методом split() (роздільник — пробіл).
 * 3. Порахуй кількість слів через length і помнож на pricePerWord.
 * 4. Поверни отриману суму.
 */

// Твій код тут

// function getEngravingPrice(message, pricePerWord) {
//   const words = message.split(' ');
//   return words.length * pricePerWord;
// }

// console.log(getEngravingPrice('Forever', 20)); // 20
// console.log(getEngravingPrice('With Love Forever', 15)); // 45
// console.log(getEngravingPrice('Happy Birthday Dear Mom', 10)); // 40

//6------------------------------------------------------------------
/*
 * Кав'ярня зберігає напої у двох списках — каву й чай — і хоче
 * показати повне меню одним рядком.
 * 1. Оголоси функцію buildMenuLine(coffee, tea), яка приймає два масиви напоїв.
 * 2. Об'єднай coffee і tea в один масив методом concat().
 * 3. Перетвори об'єднаний масив на рядок через join() з роздільником ', '.
 * 4. Поверни отриманий рядок.
 */

// Твій код тут

// function buildMenuLine(coffee, tea) {
//   const menu = coffee.concat(tea);
//   return menu.join(', ');
// }

// console.log(buildMenuLine(['Espresso', 'Latte'], ['Green', 'Black'])); // Espresso, Latte, Green, Black
// console.log(buildMenuLine(['Americano'], ['Herbal', 'Matcha'])); // Americano, Herbal, Matcha

//7------------------------------------------------------------------
/*
 * Магазин перевіряє, чи є товар на складі.
 * Функція checkStorage(storage, item):
 *   storage — масив назв товарів у нижньому регістрі;
 *   item — назва товару, яку шукаємо (регістр будь-який).
 * 1. Приведи item до нижнього регістру методом toLowerCase().
 * 2. Якщо такий товар є в storage — поверни рядок виду
 *    `plum is available to order!` (з назвою товару в нижньому регістрі).
 * 3. Якщо товару немає — поверни рядок 'Sorry! We are out of stock!'.
 */

// Твій код тут

// function checkStorage(storage, item) {
//   const itemLower = item.toLowerCase();
//   if (storage.includes(itemLower)) {
//     return `${itemLower} is available to order!`;
//   } else {
//     return `Sorry! We are out of stock!`;
//   }
// }

// console.log(checkStorage(['apple', 'plum', 'pear'], 'plum')); // plum is available to order!
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pEAr')); // pear is available to order!
// console.log(checkStorage(['apple', 'plum', 'pear'], 'carrot')); // Sorry! We are out of stock!

//8-----------------------------------------------------------------
/*
 * SmileCare складає розклад прийомів на день — по одному слоту на годину.
 * Функція getAppointmentSlots(openHour, closeHour) повертає масив слотів
 * від години відкриття до години закриття включно.
 * 1. Створи порожній масив slots.
 * 2. У циклі for пройди по годинах від openHour до closeHour включно.
 * 3. На кожній годині додай у slots рядок виду `9:00` методом push()
 *    (використай шаблонний рядок).
 * 4. Поверни масив slots.
 */

// Твій код тут

// function getAppointmentSlots(openHour, closeHour) {
//   const slots = [];
//   for (let i = openHour; i <= closeHour; i += 1) {
//     slots.push(`${i}:00`);
//   }
//   return slots;
// }

// console.log(getAppointmentSlots(9, 12)); // ['9:00', '10:00', '11:00', '12:00']
// console.log(getAppointmentSlots(14, 16)); // ['14:00', '15:00', '16:00']

//9-------------------------------------------------------------------
/*
 * Функція calculateTotalPrice(order) рахує загальну суму замовлення.
 *   order — масив цін (числа).
 * 1. Оголоси змінну total зі значенням 0.
 * 2. Пройди масив order циклом for.
 * 3. На кожному кроці додай поточну ціну до total.
 * 4. Поверни total.
 */

// Твій код тут

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503

//10--------------------------------------------------------------------
/*
 * Функція getEvenNumbers(numbers) приймає масив чисел і повертає
 * новий масив, що містить лише парні числа.
 * Парне число ділиться на 2 без остачі (number % 2 === 0).
 * 1. Оголоси порожній масив evenNumbers.
 * 2. Пройди масив numbers циклом for.
 * 3. Якщо поточне число парне — додай його в evenNumbers методом push().
 * 4. Поверни evenNumbers.
 */

// Твій код тут

// function getEvenNumbers(numbers) {
//   const evenNumbers = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       evenNumbers.push(numbers[i]);
//     }
//   }
//   return evenNumbers;
// }

// console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
// console.log(getEvenNumbers([7, 10, 13, 20])); // [10, 20]
// console.log(getEvenNumbers([1, 3, 5])); // []

//11------------------------------------------------------------------
/*
 * Спільні елементи двох списків — це позиції, що є в обох.
 * Кав'ярня перевіряє, які напої зі списку бажань клієнта є в наявності.
 * Функція getCommonItems(wishlist, stock) повертає напої, що є в обох списках.
 * 1. Оголоси порожній масив commonItems.
 * 2. Пройди список wishlist циклом for.
 * 3. Якщо поточний напій є в stock (метод includes) — додай його
 *    в commonItems методом push.
 * 4. Поверни commonItems.
 */

// Твій код тут

// function getCommonItems(wishlist, stock) {
//   const commonItems = [];
//   for (let i = 0; i < wishlist.length; i += 1) {
//     if (stock.includes(wishlist[i])) {
//       commonItems.push(wishlist[i]);
//     }
//   }
//   return commonItems;
// }

// console.log(
//   getCommonItems(
//     ['Latte', 'Matcha', 'Espresso', 'Raf'],
//     ['Espresso', 'Americano', 'Latte'],
//   ),
// ); // ['Latte', 'Espresso']
// console.log(
//   getCommonItems(['Cappuccino', 'Latte'], ['Latte', 'Mocha', 'Cappuccino']),
// ); // ['Cappuccino', 'Latte']
// console.log(getCommonItems(['Green', 'Black'], ['Herbal', 'Matcha'])); // []

//12-----------------------------------------------------------------
/*
 * Функція getBillTotal(prices) рахує загальну суму чека.
 *   prices — масив цін позицій (числа).
 * 1. Оголоси змінну total зі значенням 0.
 * 2. Перебери масив prices циклом for...of.
 * 3. На кожному кроці додай поточну ціну до total.
 * 4. Поверни total.
 */

// Твій код тут

// function getBillTotal(prices) {
//   let total = 0;
//   for (const price of prices) {
//     total += price;
//   }
//   return total;
// }

// console.log(getBillTotal([45, 30, 25])); // 100
// console.log(getBillTotal([80, 120, 60, 40])); // 300
// console.log(getBillTotal([])); // 0

//13-------------------------------------------------------------------
/*
 * Функція getAverage() приймає будь-яку кількість чисел через arguments
 * і повертає їхнє середнє значення. Усі аргументи — числа.
 * 1. Оголоси змінну sum зі значенням 0.
 * 2. Перебери arguments циклом for...of і додай кожне число до sum.
 * 3. Поверни середнє — суму, поділену на кількість аргументів (arguments.length).
 */

// Твій код тут

// function getAverage() {
//   let sum = 0;
//   for (const arg of arguments) {
//     sum += arg;
//   }
//   return sum / arguments.length;
// }

// console.log(getAverage(1, 2, 3, 4)); // 2.5
// console.log(getAverage(14, 8, 2)); // 8
// console.log(getAverage(27, 43, 2, 8, 36)); // 23.2

//14--------------------------------------------------------------------
/*
 * Онлайн-аукціон приймає будь-яку кількість ставок і визначає найвищу.
 * Функція getHighestBid() не має параметрів — усі ставки приходять
 * через arguments.
 * 1. Оголоси змінну highest і поклади в неї першу ставку — arguments[0].
 * 2. Перебери arguments циклом for...of.
 * 3. Якщо поточна ставка більша за highest — онови highest.
 * 4. Поверни highest.
 */

// Твій код тут

// function getHighestBid() {
//   let highest = arguments[0];
//   for (const arg of arguments) {
//     if (arg > highest) {
//       highest = arg;
//     }
//   }
//   return highest;
// }

// console.log(getHighestBid(120, 340, 90)); // 340
// console.log(getHighestBid(50, 45)); // 50
// console.log(getHighestBid(200)); // 200

//15--------------------------------------------------------------
/*
 * SmileCare генерує години прийому — від відкриття до закриття.
 * 1. Оголоси функцію getSlots(openHour, closeHour, step):
 *    openHour — година відкриття (обов'язковий);
 *    closeHour — година закриття (обов'язковий);
 *    step — крок у годинах, за замовчуванням 1.
 * 2. Створи порожній масив slots.
 * 3. Цикл for від openHour до closeHour із кроком step — на кожній ітерації
 *    додай у slots рядок виду `9:00` методом push().
 * 4. Поверни slots.
 */

// Твій код тут

// function getSlots(openHour, closeHour, step = 1) {
//   let slots = [];
//   for (let i = openHour; i <= closeHour; i += step) {
//     slots.push(`${i}:00`);
//   }
//   return slots;
// }

// console.log(getSlots(9, 12)); // ['9:00', '10:00', '11:00', '12:00']
// console.log(getSlots(9, 17, 2)); // ['9:00', '11:00', '13:00', '15:00', '17:00']
// console.log(getSlots(10, 16, 3)); // ['10:00', '13:00', '16:00']
