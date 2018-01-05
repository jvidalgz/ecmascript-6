/**
 * Funcion tradicional
 * @param message
 * @param name
 * @returns {*}
 */
var createGreeting = function(message, name){
    return message + name;
}

/**
 * Funcion arrow
 * @param message
 * @param name
 * @returns {*}
 */
var arrowGreeting = (message, name) => message + name;