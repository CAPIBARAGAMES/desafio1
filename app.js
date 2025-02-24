function saludo() {
    console.log('¡Hola, mundo!')
    
}

saludo();


function saludoPersobal(name){
    console.log( `¡Hola, ${name}!`)
}


saludoPersobal('Luis');



function numeroAlDoble(numero){
    console.log(numero*2)
}

numeroAlDoble(8);


function promedioDeTres(num1, num2, num3) {
    console.log((num1 + num2 + num3)/3)
}

promedioDeTres(1,2,3)


function maxNum(num1, num2) {
    return num1 > num2 ? num1: num2;
}

let numeroMayor = maxNum(10,5);
console.log(numeroMayor);



function elCuadraro(num) {
    return num * num
}

let numero = elCuadraro(5);
console.log(numero)