/*for (i=1;i<10;i++){
    document.write("<br><b>La tabla del " + i + ":</b><br>")
    for (j=1;j<10;j++) {
    document.write(i + " x " + j + ": ")
    document.write(i*j)
    document.write("<br>")
    }
   }
   


   for (i=0;i<10;i++){
    for (j=0;j<10;j++) {
    document.write(i + "-" + j)
    document.write("<br>")
    }
   }


for (i=0;i<10;i++){
    document.write (i)
    console.log(i)
    escribe = prompt("dime si continuo preguntando...", "si")
    if (escribe == "no")
    break
   }

   var i=0
   while (i<7){
    incrementar = prompt("La cuenta está en " + i + ", dime si incremento", "si")
    if (incrementar == "no")
    continue
    i++
   }

   
*/


function encuentraElNumero() {
    var mayor=Math.ceil(Number( prompt('Elija el número más alto')))
    var menor=Math.floor(Number(prompt('Elija el número más bajo')))
    const ganador = Math.floor( Math.random()*(mayor-menor+1)+menor);
    console.log(ganador);
    var vidas = 2;
    
    
    while (true) {
        var numero = Number(prompt('Ingrese un número entre '+mayor+' y '+menor+'. Intento: '+(vidas+1)+' de 3'));

        if(numero==ganador){
            alert('ha ganado')
            document.write('<img src="https://pbs.twimg.com/media/FLty1zqX0AUWFDi?format=jpg&name=small" alt="papo"></img>')
            break
        }else {
            if(vidas!=0){
                if(numero>ganador){
                    
                alert('Su numero está por encima del buscado, intentelo de nuevo')
                   
                }else{
                alert('Su numero está por debajo del valor buscado, intentelo de nuevo')
                }
            }else{
            alert('Se ha quedado sin intentos. Recargue la página para volver a jugar. El número buscado era '+ganador)
            break
            
            }
        vidas=vidas-1   
        console.log(vidas+' vidas'); 
          
        

     }
    }
}
encuentraElNumero()
