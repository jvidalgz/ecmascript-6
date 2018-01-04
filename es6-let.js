/**
 * La sentencia let permite declarar una variable de alcance local
 */
var fs = [];
for (let i = 0; i < 10; i++) {
    fs.push(function () {
        console.log(i);
    });
}

fs.forEach(function (f) {
    f();
});


/**
 * El mismo ejemplo, pero con sentencia var, permite que i sea modificada desde
 * dentro de la callback
 */
var fs = [];
for (var i = 0; i < 10; i++) {
    fs.push(function () {
        console.log(i);
    });
}

fs.forEach(function (f) {
    f();
})
