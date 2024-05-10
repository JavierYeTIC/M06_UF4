// Función para comprobar si un número es divisible entre dos
function esDivisiblePorDos(nombre) {
    return new Promise((resolve, reject) => {
        const numero = parseInt(nombre);
        if (isNaN(numero)) {
            reject("El valor proporcionado no es un número.");
        } else {
            if (numero % 2 === 0) {
                resolve(`${numero} es divisible entre dos.`);
            } else {
                resolve(`${numero} no es divisible entre dos.`);
            }
        }
    });
}

// Variable que verifica si un valor está entre 0 y 10
const promesaValor = new Promise((resolve, reject) => {
    const valor = 5; // Puedes cambiar este valor para probar diferentes casos
    if (valor >= 0 && valor <= 10) {
        resolve(`${valor} está entre 0 y 10.`);
    } else {
        reject(`${valor} no está entre 0 y 10.`);
    }
});

// Función para verificar si una letra es una vocal
function esVocal(letra) {
    return new Promise((resolve, reject) => {
        const arr = ["a", "e", "i", "o", "u"];
        if (arr.includes(letra.toLowerCase())) {
            resolve(`${letra} es una vocal.`);
        } else {
            reject(`${letra} no es una vocal.`);
        }
    });
}

// Función para calcular la división de dos números
function division(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num2 === 0) {
            reject("No se puede dividir por cero.");
        } else {
            resolve(num1 / num2);
        }
    });
}

let num1 = 10;
let num2 = 2;

dividir(num1, num2)
    .then(resultat => console.log("El resultat de la divisió és:", resultat))
    .catch(error => console.error(error.message));