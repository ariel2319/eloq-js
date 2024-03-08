const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Preguntar al usuario y capturar la entrada
rl.question('What is your exercises? => ', (numero) => {
    // Convertir la entrada a número si es necesario
    numero = parseFloat(numero);


    /* 
    Escriba un ciclo que haga siete llamadas a console.log para generar el siguiente triángulo:
    
    #
    ##
    ###
    ####
    #####
    ######
    #######
    */

    if (numero == 1) {
        console.log('Pinito =>')
        let char = '#';
        for (let contador = 0; contador < 7; contador++) {
            console.log(char)
            char += '#';
        }
    }


    /* 
   FizzBuzz
   Escribe un programa que use console.log para imprimir todos los números de 1 a 100, 
   con dos excepciones. Para números divisibles por 3, imprime "Fizz" en lugar del número, 
   y para los números divisibles por 5 (y no 3), imprime "Buzz" en su lugar.
   
   Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz", 
   para números que sean divisibles entre 3 y 5 (y aún imprimir "Fizz" o "Buzz" para números 
   divisibles por solo uno de ellos).
   
   (Esta es en realidad una pregunta de entrevista que se ha dicho elimina un porcentaje 
   significativo de candidatos a programadores. Así que si la puedes resolver, tu valor 
   en el mercado laboral acaba de subir).
   */
    if (numero == 2) {
        console.log('FizzBuzz => ')
        for (let count = 1; count < 101; count++) {
            if (count % 3 == 0 && count % 5 == 0) { console.log(count, '- FizzBuzz') }
            else if (count % 3 == 0) { console.log(count, '- Fizz') }
            else if (count % 5 == 0) { console.log(count, '- Buzz') }
        }
    }


    /* Tablero de ajedrez
Escribe un programa que cree un string que represente una cuadrícula de 8 × 8, usando 
caracteres de nueva línea para separar las líneas. En cada posición de la cuadrícula 
hay un espacio o un carácter "#". Los caracteres deberían de formar un tablero de ajedrez.

Pasar este string a console.log debería mostrar algo como esto:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
Cuando tengas un programa que genere este patrón, define una vinculación tamaño = 8 y 
cambia el programa para que funcione con cualquier tamaño, dando como salida una cuadrícula 
con el alto y ancho dados.
 */

    if (numero == 3) {
        console.log('Tablero de Ajedrez =>')
        let board = 15;
        let black = '#';
        let white = ' ';
        for (let count = 1; count <= board; count++) {
            let newBoard = ' ';
            for (let count2 = 1; count2 <= board; count2++) {
                if (count % 2 == 0) {
                    if (count2 % 2 == 0) { newBoard += black }
                    else { newBoard += white }
                } else {
                    if (count2 % 2 !== 0) { newBoard += black }
                    else { newBoard += white }
                }
            }
            console.log(newBoard)
        }
    }


    rl.close();
});