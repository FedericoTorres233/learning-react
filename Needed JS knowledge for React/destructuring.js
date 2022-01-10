const triangulo = {
    angulo: "70°",
    tipo: "equilatero",
    lado: 50
};

/* ----------------------------------------------------------- */
const perimetro = (triangulo) => {
    return triangulo.lado * 3;
};

console.log(perimetro(triangulo));
/* ----------------------------------------------------------- */

const perimetro2 = ({lado}) => {
    return lado * 3;
};

console.log(perimetro2(triangulo));