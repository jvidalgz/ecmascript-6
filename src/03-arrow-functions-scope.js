var persona = {
    nombre: "John",
    manejaMensaje: function (mensaje, maneja) {
        maneja(mensaje)
    },
    /**
     * this representa al objeto contextual , funcion arrow no vincula sus propios this
     */
    recibe: function () {
        this.manejaMensaje("Hola, ", mensaje => console.log(mensaje + this.nombre));
    }
}

persona.recibe();

