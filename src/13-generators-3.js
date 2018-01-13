// se peunden construir expresiones a traves del proceso de iteracion por medio de
// next()
function* saludar() {
    let amigo = yield "Cómo";
    amigo = yield amigo + "estás";
    yield amigo + "Tú?";
}

const saludo = saludar();
console.log(saludo.next().value);
console.log(saludo.next(" rayos ").value);
console.log(saludo.next(" hey ").value);