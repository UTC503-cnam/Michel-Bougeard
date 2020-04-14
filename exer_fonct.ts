let maximize = n => v => v > n ? n : v;

let maximize_3 = maximize(3);

let double = n => 2*n;
let triple = n => 3*n;
let square = n => n*n;

let tab = [1, 5, 2, 4, 3];

let tabDouble = tab.map(double);

console.log(tabDouble);
console.log(tab.map(square));
console.log([1,2,3].map(triple));