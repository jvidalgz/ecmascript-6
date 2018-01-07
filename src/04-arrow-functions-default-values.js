/**
 * No inicializa ningun parametro, undefined es mostrado por consola
 * @param greeting
 * @param name
 */
function greet(greeting, name) {
    console.log(greeting + ", " + name);
}

/**
 * Solo name recibe asignacion
 * @param greeting
 * @param name
 */
function greet(greeting, name = "Josh") {
    console.log(greeting + ", " + name);
}
// Pasa parametro greeting
greet("Hola");
