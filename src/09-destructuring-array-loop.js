const people = [
    {
        "id": "5a5264bb71746ef8e7ea98af",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 20,
        "name": "Lancaster Slater",
        "gender": "male",
        "company": "SLOFAST",
        "email": "lancasterslater@slofast.com",
        "phone": "+1 (848) 502-3171",
        "address": "471 Danforth Street, Chilton, Maryland, 3289"
    },
    {
        "id": "5a5264bbc7ec0ff1109acd58",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 24,
        "name": "Patty Hardy",
        "gender": "female",
        "company": "CORPULSE",
        "email": "pattyhardy@corpulse.com",
        "phone": "+1 (948) 595-2787",
        "address": "879 Porter Avenue, Tooleville, Nevada, 5461"
    },
    {
        "id": "5a5264bba26104f7354a6e83",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 34,
        "name": "Kemp King",
        "gender": "male",
        "company": "KENEGY",
        "email": "kempking@kenegy.com",
        "phone": "+1 (869) 482-2160",
        "address": "464 Lake Place, Noblestown, Hawaii, 1777"
    },
    {
        "id": "5a5264bb193e540b70560de0",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 24,
        "name": "Anne Briggs",
        "gender": "female",
        "company": "PORTALINE",
        "email": "annebriggs@portaline.com",
        "phone": "+1 (911) 527-2826",
        "address": "940 Randolph Street, Gerber, Kansas, 7182"
    },
    {
        "id": "5a5264bb055c8f758b9daada",
        "isActive": false,
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "name": "Mollie Simmons",
        "gender": "female",
        "company": "ORBALIX",
        "email": "molliesimmons@orbalix.com",
        "phone": "+1 (884) 452-2902",
        "address": "448 Adelphi Street, Fannett, Delaware, 6844"
    },
    {
        "id": "5a5264bbb94d832f448cb339",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 38,
        "name": "Knowles Powers",
        "gender": "male",
        "company": "ISOTERNIA",
        "email": "knowlespowers@isoternia.com",
        "phone": "+1 (971) 572-3237",
        "address": "617 Glendale Court, Hackneyville, Michigan, 6883"
    },
    {
        "id": "5a5264bb60ad7d8e4c18aadb",
        "isActive": true,
        "picture": "http://placehold.it/32x32",
        "age": 21,
        "name": "Gross Black",
        "gender": "male",
        "company": "RENOVIZE",
        "email": "grossblack@renovize.com",
        "phone": "+1 (875) 461-2303",
        "address": "525 Rewe Street, Bayview, South Carolina, 765"
    }
]
/**
 * Ejemplo destructuring array
 */
people.forEach(({email}) => console.log(email));

/**
 * Obtiene segundo objeto desde array
 */
var [, Patty] = people;

function logEmail({email}){
    console.log('El email de Patty es: ' + email);
}
logEmail(Patty);