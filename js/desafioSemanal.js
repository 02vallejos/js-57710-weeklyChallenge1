// 🚩🚩 DESAFIO SEMANAL 🚩🚩 (recuerden las reglas para la entrega y resolucion que hay en el notion 👀)

// Estas con un amigo frente al obelisco el cual tiene 50 escalones (aprox 🤔), y tienes un dado. 
// Con tu amigo apuestas que vas a llegar hasta arriba en unas 40 tiradas de dado, donde al tirar el dado 
// debe hacerse lo siguiente según el resultado que salga:

// Sale entre 1 y 2: bajas un escalón
// Sale entre 3 y 5: subes un escalón
// Si sale 6, se tira otra vez el dado y el numero que salga es la cantidad de escalones que se suben 
// (inicialmente sale 6, vuelvo a tirar y si sale 3 por ejemplo, subo 3 escalones de golpe)
// Si sale el 6 otra vez entonces se vuelve al inicio ☠ (el 6 salio dos veces seguidas)


// Tengan en cuenta que 🚧

// 1. No se puede descender por debajo del escalón 0
// 2. En cada tirada existe un 10% de probabilidades de tropezar y caer 5 escalones abajo
// 3. Si nuestro amigo se llama Pepe entonces empezamos desde el 5o escalón
// 4. Al final del juego se tiene que mostrar (tanto si llegamos como si no)
// * Cantidad de tiradas que nos llevo al escalón 50 (o el escalon en el que nos quedamos)
// * Mejor racha de subida (cantidad de escalones subidos sin bajar ni uno)
// * Peor racha (cantidad de escalones bajados sin subir uno)
// * Si ganamos la apuesta o no


// Mucha suerte con el desafío 🍀, recuerden que tienen todo el tiempo del mundo, pero solo los 
// 3 primeros resultados (que sean diferentes entre si, y por eso me refiero a que la estructura y 
//     la forma de resolverlo es distinta, no vale cambiar un while por un do while o los nombres 
//     de variables 👀) se llevan los puntos.

//alert('Bienvenidos a Juego de las Escaleras de la Suerte!');

let currentPosition = 0;
let attempts = 10;
let countAttemps = 0;
let minStep = 0;
let maxStep = 50;
let die;
let bestStreak = 0;
let worstStreak = 0;
//let userName = 'Pepe'
let userName = prompt('Ingrese su nombre');

if (userName.toUpperCase() == "PEPE") {
    //alert('Felicidades PEPE! tu comienzas en escalon 5');
    console.log('Felicidades PEPE! tu comienzas en escalon 5');
    currentPosition = 5;
    console.log('Posicion de escalera: ' + currentPosition);
    console.log('  ');
}

for (let i = 1; i <= attempts; i++) {

    die = Math.floor(Math.random() * 6) + 1;
    console.log('Numero del Dado: ' + die);
    countAttemps++; // Cuenta la tirada

    if (die == 1 || die == 2) {
        if (currentPosition-- < 0) { // baja un escalon
            currentPosition = 0;
        } else {
            currentPosition--;
        }
        worstStreak++; // aumenta en 1 la peor marca
        bestStreak = 0; // pone a cero la mejor marca  
    } else if (die <= 5 && die >= 3) {
        currentPosition++;
        bestStreak++;
        worstStreak = 0;
    } else if (die == 6) {
        let secodAttenp = Math.floor(Math.random() * 6) + 1; //tira nuevamente
        console.log('Segundo chance');
        console.log('Numero del Dado: ' + die);
        if (secodAttenp == 6) {
            currentPosition = 0;
        } else {
            currentPosition += secodAttenp;
            if (currentPosition >= maxStep) {
                break;
            }
            bestStreak += secodAttenp;
            worstStreak = 0;
        }

    }
    if (Math.random() < 0.1) { // luego de tirar puede tropezar
        currentPosition -= 5;
        if (currentPosition < 0) {
            currentPosition = 0;
        }
    }
}

let winBet = currentPosition >= maxStep;
console.log('Numeros de intentos: ' + countAttemps);
console.log('Mejor racha: ' + bestStreak);
console.log('Peor racha: ' + worstStreak);
if (winBet) {
    console.log('Ganamos, Si! ');
} else {
    console.log('Ganamos, Nop... ');
}