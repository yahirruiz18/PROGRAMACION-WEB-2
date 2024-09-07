/*// Función para mostrar las opciones al usuario
function mostrarOpciones() {
    return prompt(`
        Elija una opción:
        1.- Libros
        2.- Películas
        3.- Juegos
    `);
}

// Función para procesar la elección del usuario
function procesarOpcion(opcion) {
    switch (opcion) {
        case "1":
            console.log("El principito");
            break;
        case "2":
            console.log("Matrix");
            break;
        case "3":
            console.log("COD");
            break;
        default:
            console.log("Opción no válida");
            break;
    }
}

// Función principal
function iniciarPrograma() {
    const opcion = mostrarOpciones();
    procesarOpcion(opcion);
}

// Llamada para iniciar el programa
iniciarPrograma();
*/

/*let numero =  parseInt( prompt("ingresa un numero"));
console.log(typeof numero);*_/


*/

// Función que realiza el bucle y muestra los números del 0 al 10
function contarHastaDiez() {
    let numero = 0;
    while (numero <= 10) {
        console.log(numero);
        numero++;
    }
}

// Función principal
function iniciarPrograma() {
    contarHastaDiez();
}

// Llamada para iniciar el programa
iniciarPrograma();
