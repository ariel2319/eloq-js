const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Preguntar al usuario y capturar la entrada
rl.question('What is your exercises? => ', (numero) => {
    // Convertir la entrada a número si es necesario
    numero = parseFloat(numero);

    if (numero == 1) { }
    if (numero == 2) { }

    rl.close();
});