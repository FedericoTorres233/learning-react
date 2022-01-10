const coche = {
    marca: "Tesla",
    model: "CyberTruck"
}

let modelo = coche.model ? coche.model : "X";

/* Lo mismo que:

let modelo;
if (coche.model){
    modelo = coche.model;
} else{
    modelo = "X";
}*/

console.log(modelo);