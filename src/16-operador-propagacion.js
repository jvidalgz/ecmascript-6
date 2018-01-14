// operador programacion permite separar los elementos de array
let primero = [1, 2, 3];
let segundo = [4, 5, 6];

primero.push(...segundo);
console.log(primero);

//
function sumarTresNumeros(a,b,c) {
    let resultado = a + b + c;
    console.log(resultado);
}

sumarTresNumeros(...primero);
sumarTresNumeros(...segundo);