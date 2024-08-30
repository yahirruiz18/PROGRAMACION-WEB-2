/*
let nombre = prompt("Ingresa tu nombre ");
console.log(nombre);

let edad = prompt("Ingresa tu edad");
let nacionalidad = prompt("Ingresa tu nacionalidad");

console.log("Tu nombre es: " + nombre);
console.log("Tu edad es: " + edad);
console.log("Tu nacionalidad es: " + nacionalidad);
*/
//------------------------------------------------------------------
/*
//Sin Casteo
let numero1 = prompt("Ingresa tu primer numero");
let numero2 = prompt("Ingresa tu segundo numero");
let resultado = numero1 + numero2; 
//console.log ("El resultado es: " + resultado);

console.log(typeof numero1);
*/
//------------------------------------------------------------------

/*let numero1 = prompt("Ingresa tu primer numero");
let numero2 = prompt("Ingresa tu segundo numero");
let resultado =  parseInt( numero1) +parseInt( numero2); 
console.log ("El resultado es: " + resultado);

console.log(typeof resultado);*/
// Solicitar los datos al usuario
let nombre = prompt("Ingresa tu nombre:");
let edad = prompt("Ingresa tu edad:");
let peso = prompt("Ingresa tu peso en kilogramos:");
let estatura = prompt("Ingresa tu estatura en metros:");

// Convertir los valores a números
peso = parseFloat(peso);
estatura = parseFloat(estatura);

// Calcular el índice de masa corporal (IMC)
let imc = peso / (estatura * estatura);

// Mostrar el resultado al usuario
console.log("Hola, " + nombre + ". Tu índice de masa corporal (IMC) es: " + imc.toFixed(2));

// Verificar el tipo de la variable IMC
console.log(typeof imc);
