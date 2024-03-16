const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Preguntar al usuario y capturar la entrada
rl.question('What is your exercises? => ', (numero) => {
    // Convertir la entrada a número si es necesario
    numero = parseFloat(numero);

    if (numero == 1) {
        console.log("MÍNIMO")

        const minimo = (a, b) => {
            if (a == b) { return ("son idénticos pa") }
            else {
                if (a < b) { return a }
                else { return b }
            }
        }

        console.log("Mínimo entre 5 y 5 => ", minimo(5, 5))
        console.log("Mínimo entre 5 y 7 => ", minimo(7, 7))
        console.log("Mínimo entre 9 y 7 => ", minimo(9, 7))
        console.log("Mínimo entre 5 y -1 => ", minimo(5, -1))
    }
    if (numero == 2) {
        console.log("RECURSIÓN")

        
    }

    rl.close();
});