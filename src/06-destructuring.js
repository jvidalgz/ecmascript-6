/**
 * @type {{color: string}}
 */
var obj = {
    color: 'azul'
}
console.log(obj.color);

/**
 * Asignacion por destructuring
 */
var {color} ={
    color: 'rojo'
}
console.log(color);

/**
 * Asignacion por destructuring multiple
 */
var {color, position} = {
    color: 'amarillo',
    name: 'Kurt',
    state: 'New York',
    position: 'Fordward'
}
console.log(color);
console.log(position);

/**
 *
 */
