let numbers = [100, 34, 5, 67, 72];

interface Array<T> {
    min(): T;
    max(): T;
}

Array.prototype.min = function<T>(){
    let mini = tab =>{
        let n = this.length;
        if (n == 1){
            return this[0];
        }
        else {
            var e = this.pop();
            var m = mini(tab);
            return e < m ? e : m;
        }
    }
    return mini(this);
}

Array.prototype.max = function<T>(){
    let maxi = tab =>{
        let n = tab.length;
        if (n == 1){
            return tab[0];
        }
        else {
            var e = tab.pop();
            var m = maxi(tab);
            return e > m ? e : m;
        }
    }
    return maxi(this);
}




let minimum = numbers.min();
let maximum = numbers.max();
console.log(`Min is ${minimum}, max is ${maximum}`);