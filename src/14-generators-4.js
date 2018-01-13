// secuencias infinitas
function* graph(){
    let x = 0 ;
    let y = 0;
    while (true) {
        yield {x: x, y: y};
        x += 2;
        y += 1;
    }
}

var generadorGrafico = graph();

console.log(generadorGrafico.next().value);
console.log(generadorGrafico.next().value);
console.log(generadorGrafico.next().value);
console.log(generadorGrafico.next().value);
console.log(generadorGrafico.next().value);