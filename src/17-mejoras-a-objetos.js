const color = 'rojo';
const velocidad = 90;

const auto = {
    color,
    velocidad,
    mover: () => console.log('moviendose...')
};

console.log(auto.color);
console.log(auto.velocidad);

auto.mover();