let list = [1, 9, 2, 8, 5];
let nombrePair = n => n % 2 == 0;
let andy = b1 => b2 =>  b1 && b2;
let and = b1 => andy(b1);// Ecrivez la fonction 'and' sous sa forme curryfiée qui permet au code ci-dessous de fonctionner
let result = list.filter(and(nombrePair)(n => n > 4));
console.log(result); // [8]