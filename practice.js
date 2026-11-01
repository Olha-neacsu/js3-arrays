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
