const array1 = [1,2,3,4,5];
const array2 = [6,7,8,9,10]

const nuevoArray = array1.concat(array2);
console.log(nuevoArray);

/* --------------------------------------------------------------------- */

const array3 = [...array1, ...array2, ...[11,12,13,14,15]];
console.log(array3);


/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */


const obj1 = {a:"a"};
const obj2 = {b:"b"};

const nuevoObjeto = Object.assign({z:"z"},obj1,obj2);
console.log(nuevoObjeto);
/* --------------------------------------------------------------------- */
const nuevoObjeto2 = {...obj1, ...obj2, ...{c:"c"}};
console.log(nuevoObjeto2)