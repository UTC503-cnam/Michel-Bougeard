let authors = [{ name: 'Franquin', country:'be' }, { name: 'Uderzo', country:'fr' }, { name: 'Hergé', country:'be' }];
let estBelge = aut => aut.country == 'be';
let ajoutM = st => 'M. ' + st;
let justeNom = n => n.name;
let belgian_authors= authors.filter(estBelge).map(justeNom).map(ajoutM);
console.log(belgian_authors); // [ 'M. Franquin', 'M. Hergé']
