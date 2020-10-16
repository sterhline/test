'use strict';

// console.log(4/0);
// console.log('string'*9);

// let something;
// console.log(something);

// let persone = {
//     name: 'John',
//     age: 25,
//     isMarried: false
// };
// console.log(persone.name);

// console.log(persone["name"]);

// let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
// console.log(arr[2])

// let a;
// console.log(a);

// - to String

// 1)
// console.log(typeof(String(null)));
// 2)
// console.log('dd' + 'dd');
// console.log(typeof('dd' + 5));
// console.log('https://facebook.com/album/' + 45);


// - no Number

// 1)
// console.log(typeof(Number('45')));
// 2)
// console.log(typeof(+'4'));
// console.log(3496 + +'34500');
// 3)

//  -  - Конкатинация

// console.log(typeof(parseInt('23' + 34)));
// let ans = +prompt("Yello", ''); --- унарный плюс

// 0, '', null, undefined, NaN

// 1)
// let switcher = null;
// if (switcher) {
//     console.log('Working..')
// }
// switcher = 1;
// if (switcher) {
//     console.log('Working..')
// }

// 2)
// console.log(typeof(Boolean('45')));

// 3)
// console.log(typeof(!!'45'));

//  - - Простое общение с пользователями

// alert('Yello');

// let answer = confirm('How you are doing?');
// console.log(answer);

// let answer = prompt('Sho?', 'nicho!');
// console.log(typeof(arr));

//  - - Операторы

// console.log('arr' + ' - object');
// console.log(typeof(4 + ' - object'));

// let answer = +prompt('Sho?', 'nicho!');
// console.log(typeof(answer));

// let incr = 10,
//     decr = 10;


// console.log(incr++);
// console.log(decr--);

// console.log(5%2);

// console.log('2' == 2);
// console.log('2' === 2);

let isChecked = true,
    isClosed = false;
    
console.log(isChecked && isClosed);
console.log(isChecked || isClosed);
console.log(isChecked || !isClosed);
