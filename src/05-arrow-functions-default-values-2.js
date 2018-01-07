/**
 * Pasa como parametro por defecto una funcion
 * @param complete
 */
function receive(complete = function () {
    console.log('complete');
}) {
    complete();
}

receive();

/**
 * Pasa como parametro por defecto una funcion arrow
 * @param complete
 */
function receive2(complete = () => console.log('complete2')){
    complete();
}

receive2();
