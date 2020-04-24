let numbers = [100, 34, 5, 67, 72];


let min = tab =>{
    let n = tab.length;
    if (n == 1){
        return tab[0];
    }
    else {
        var e = tab.pop();
        var m = min(tab);
        return e < m ? e : m;
    }
}

let max = tab =>{
    let n = tab.length;
    if (n == 1){
        return tab[0];
    }
    else {
        var e = tab.pop();
        var m = min(tab);
        return e < m ? e : m;
    }
}
// En utilisant la récursion, écrivez le code permettant de trouver le min et le max de cette liste

//let minimum = numbers.// ...
//let maximum = numbers.// ...
//console.log(`Min is ${minimum}, max is ${maximum}`);

let minimum = min(numbers);
let maximum = max(numbers);
console.log(`Min is ${minimum}, max is ${maximum}`);