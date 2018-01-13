// Varias llamadas al generator
function* saludar() {
    console.log(`Generator son "flojos"`);
    yield 'Cómo?';
    console.log(`Esto no es ejecutado hasta el segundo next()`);
    yield 'estás';
    console.log(`ejecutado antes de "Tú"`);
    yield 'Tú';
    console.log(`Ejecutado cuando done=true`);

}

var saludo = saludar();
console.log(saludo.next());
console.log(saludo.next());
console.log(saludo.next());
console.log(saludo.next());

// otro tipo de llamada (generator es un iterator)
var saludo2 = saludar();
for(let palabra of saludo2) {
    console.log(palabra); // igual a next().value
}