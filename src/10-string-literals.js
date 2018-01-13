
// String
let msg = "Hola";
let saludo = `${msg}, Mundo`;
console.log(saludo);

// expresiones
const x = 1;
const y = 2;
const ecuacion = `${x} + ${y} = ${x + y}`;
console.log(ecuacion);

// tagging, extrae strings y expresiones desde string
function tag(strings, ...values) {
    if(values[0] < 13) {
        values[1] = 'buenos dias';
    }else {
        values[1] = 'buenas tardes';
    }
    return `${strings[0]}${values[0]}${strings[1]}${values[1]}`;
}
const mensaje = tag`Son las ${new Date().getHours()} hrs, ${""} `;
console.log(mensaje);
