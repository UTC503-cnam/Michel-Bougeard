let numbers = [100, 34, 5, 67, 72];

interface Array<T> {
    min(): T;
    max(): T;
}

Array.prototype.min = function<T>(){
    let mini = tab => tab.reduce((result, valeur)=> result > valeur ? valeur : result, tab[0]);
    return mini(this);
}

Array.prototype.max = function<T>(){
    let mini = tab => tab.reduce((result, valeur)=> result < valeur ? valeur : result, tab[0]);
    return mini(this);
}




let minimum = numbers.min();
let maximum = numbers.max();
console.log(`Min is ${minimum}, max is ${maximum}`);

