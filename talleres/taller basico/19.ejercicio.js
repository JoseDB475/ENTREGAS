const aleatorio = Math.floor(Math.random() * 10) + 1;


const intento = prompt("Adivina el número (entre 1 y 10):");


const numeroUsuario = Number(intento);

if (numeroUsuario === aleatorio) {
    alert("Correcto, Adivinaste el número ");
} else {
    alert("Incorrecto  El número es: " + aleatorio);
}