function* saludar(){
    console.log(`lamada a 'next()'`);
    yield 'hola';
}

// retorna objeto
let saludo = saludar();

console.log(saludo);
// llamada a next(), retorna valor desde generador
let next = saludo.next();
console.log(next);
// generator termina cuando done = true
let done = saludo.next();
console.log(done);