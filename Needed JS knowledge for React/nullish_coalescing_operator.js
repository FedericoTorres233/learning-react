const suma = (a,b) => {
    a = (a == null ? 0 : a);
    b = (b == null ? 0 : b);
    return a + b;
};
console.log(suma(2));

/* ---------------------------------- */

const suma2 = (a,b) => {
    a = a ?? 0;
    b = b ?? 0;
    return a + b;
};
console.log(suma(5));