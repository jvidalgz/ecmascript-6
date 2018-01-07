function generateObj() {
    return {
        color: 'amarillo',
        name: 'Kurt',
        state: 'New York',
        position: 'Fordward'
    }
}

/**
 * destructuring desde objeto
 */
let {name, state} = generateObj();
console.log(name);
console.log(state);

/**
 * destructuring y asignado a otra variable
 */
let {name : firstName, state : position} = generateObj();
console.log(firstName);
console.log(position);