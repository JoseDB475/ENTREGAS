
// Crear un algoritmo que capture los datos personales de 5 individuos, estos deberan ser: nombre, edad, genero.
// Una ves esten capturados en una lista, vamos a contar cuantos son hombres y cuantos son mujeres.
// Este ejercicio debe realizarse usando clases


class Person{
    nombre;
    edad;
    genero;

    constructor(nombre, edad, genero){
        this.nombre=nombre;
        this.edad=edad;
        this.genero=genero;
    }
};



const personas = [];

  let cantidad = prompt("cuantas personas vas a registar");


for (let i = 1; i<=cantidad; i++){


    let nombre = prompt("ingresa tu nombre");
    let edad = Number (prompt("ingresa tu edad"));
    let genero = prompt("ingresa tu genero");

    const persona = new Person(nombre, edad, genero);

    personas.push(persona);
}

console.log(personas);




let cantHombre = 0;
let cantMujer = 0;

for (let i = 0; i<=5; i++) {
    if(personas[i].genero== "f");
    cantMujer = cantMujer + 1
}if (personas[i].genero== "m"){
    cantHombre = cantHombre + 1

}
    
console.log(`la cantidad de hombres es ${cantHombre} , y la cantidad de mujeres es ${cantMujer}`);








// const animal = {
//     nombre: 'Milo'
// }

// let nombre = '';

// function suma(a, b) {
//     return a + b;
// }

// // Public
// // Private
// // Protected        -- NO APLICA EN JS --
// class Person {
//     #nombre;        // Atributo sea privado
//     #edad;
//     #hobbies;

//     // TODO: Se ejecuta en el momento en el que el objeto es creado
//     // Metodo constructor
//     constructor(nombre, edad) {
//         this.#nombre = nombre;
//         this.#edad = edad;
//         this.#hobbies = [];
//     }

//     // Metodos Getters
//     obtenerNombre() {
//         return this.#nombre;
//     }
//     obtenerEdad() {
//         return this.#edad;
//     }
//     obtenerHobbies() {
//         return this.#hobbies;
//     }

//     // Metodos Setters
//     establecerNombre(nuevoNombre) {
//         this.#nombre = nuevoNombre;
//     }
//     establecerEdad(nuevaEdad) {
//         this.#edad = nuevaEdad;
//     }
//     establecerHobbie(nuevoHobbie) {
//         if (Array.isArray(nuevoHobbie)) {
//             this.#hobbies.push(...nuevoHobbie);   // Spread: 
//         }
//         else {
//             this.#hobbies.push(nuevoHobbie);
//         }
//     }
// }

// // implementacion
// const persona1 = new Person('Manuela', 32);
// // console.log( persona1 );

// // Accesibilidad 
// //==>>> console.log( persona1.#nombre );   // Manuela -> Clase
// console.log(persona1.obtenerNombre());    // Manuela
// // console.log( animal['nombre'] );       // Milo -> Explicito
// console.log(persona1.obtenerHobbies());   // []

// persona1.establecerHobbie('Estudiar los sabados');
// persona1.establecerHobbie('Ir a misa los domingos');
// persona1.establecerHobbie(['Cantar en el baño', 'Lavar la loza']);

// console.log(persona1.obtenerHobbies());   // []