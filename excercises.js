// tarea 1: crear un array de estudiantes con nombres y varias notas

const estudiantes = [
    
  {
    "nombre": "Ana",
    "apellido": "García",
    "notas": [4.3, 2.8, 3.7, 4.6, 5]
  },
  {
    "nombre": "Luis",
    "apellido": "Martínez",
    "notas": [3.5, 4.7, 4, 3.9, 4.3]
  },
  {
    "nombre": "Carlos",
    "apellido": "Rodríguez",
    "notas": [2.5, 3.6, 2.1, 4.2, 1.9]
  },
  {
    "nombre": "María",
    "apellido": "López",
    "notas": [2.9, 3.4, 2.2, 4.1, 2.7]
  },
  {
    "nombre": "Sofía",
    "apellido": "Hernández",
    "notas": [4.3, 4.6, 4.7, 4.3, 4.9]
  }
];


// crear una funcion que calcule el promedio de cada estudiantes

function calcularPromedio(lista) {
    return lista.map(estudiante =>{
      let suma = 0;

      for (let i = 0; i< estudiante.notas.length; i++){
        suma += estudiante.notas[i];
      }

      let promedio = suma/estudiante.notas.length;

      return {
        ...estudiante, promedio: Number(promedio.toFixed(2))
      };
    });
}
const resultado = calcularPromedio(estudiantes);
console.log(resultado)
// crear una funcion que retorne si aprobo o reprobo cada estudiantes
// function AproRepro (promedio){
//     if (promedio>=3){
//         return "aprobo"
//     }else{
//         return"reprobo"
//     }
// }
// AproRepro(3);
// // crear una funcion que muestre cual fue el mejor estudiantes

// function mejorEstudiante(estudiantes){

//    const mejorPromedio = 0;

//   for (let i = 0; i<estudiantes.length; i++){

//     if(promedio <3.0){
    
//      }
//     else if(estudiantes[i].notaFinal>=3.0 && estudiantes[i].notaFinal<4.0){
//      console.log("el estudiante " + estudiantes[i].nombre + " " + "debe nivelar ");
//     }
//      if( estudiantes[i].notaFinal>=4.0){
//      console.log("el estudiante " + estudiantes[i].nombre + " " +  "aprobo ");
//      }


    

// }

// lógica para imprimir: .index.js"Estudiante: [Nombre] | Promedio: [Valor] | Estado: [Aprobado/Reprobado]"