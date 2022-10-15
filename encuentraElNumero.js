// OR ||
/*
true || true = false
true || false = true
false || true = true
false || false = false

*/
/*
const USSER1='Pepe'
const PASS1= '1234'

var inputUsser=prompt('Ingrese usuario')
var inputPass=prompt('Ingrese password')

if(inputUsser==USSER1&&inputPass==PASS1){
    alert('User and Pass ok')
}else{
    alert('User or pass nok')


}
*/
//Ciclos repetitivos
/*
while(true){

    console.log('Hola!!!!') //Bucle infinito
}
*/
//Contadores
/*
var estadoentregado=0

while(estadoentregado<5){

estadoentregado++
console.log(estadoentregado)
}

*/
//Encontrar el número
function encuentraElNumero() {
    const ganador = 9;
    const vidas = 3;

    while (true) {
        var numero = Number(prompt('Ingrese un número'));

        if (numero == ganador) {

            alert('Has ganado');
            break;
        } else {
            vidas--;
        }
        if (vidas == 0) {
            alert('Se quedó sin vidas');
            break;
        }
    }

}
