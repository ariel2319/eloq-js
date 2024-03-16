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

        const esPar = (num) => {
            if (num < 0) return ("positivo perrito..no seas burrito")
            if (num === 0) return (true)
            if (num === 1) return (false)
            if (num % 2) return (true)
            else return (false)
        }
        console.log(esPar(50));
        console.log(esPar(75));
        console.log(esPar(-1));
    }

    if (numero === 3) {
        console.log("CONTEO DE FRIJOES")

        const contarFs = (str, letter) => {
            let countLetterRepeat = 0;
            for (let count = 0; count < str.length; count++) {
                if (str[count] === letter) countLetterRepeat++
            }
            return countLetterRepeat
        }
        console.log(contarFs("erarerardsf", "r"))
    }

    rl.close();
});