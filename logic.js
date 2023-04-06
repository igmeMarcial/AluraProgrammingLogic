// console.log("eres le amo de mi vida")

// function saltarLinea(){
//     document.write("<br>")
// }
// function imprimir(frase){
//     document.write(frase)
//     saltarLinea();
// }
//  let victorias = Number(prompt("Informe de la cantidad de las victorias"))
//  let empates =Number( prompt("Informe de cantidad de empates"));

//  let puntosTotal = (victorias * 3) + empates;

//  imprimir("El total de puntos del equipo es:" + puntosTotal)
//  imprimir(("10"*2));
//  imprimir(("10"+20));

//  console.log(victorias, empates)



    function saltarLinea() {
        document.write("<br>");    
        document.write("<br>");    
        document.write("<br>");    
    }  
    function imprimir(frase) {
        document.write(frase);
        saltarLinea();
    }
    var numeroPensado = Math.round(Math.random()*10);
    var intentos = 3;
    var contador = 1;

    while (contador <= intentos) {
        var numeroLanzado = parseInt(prompt("Ingrese un número entre 0-10"));
        if (numeroPensado == numeroLanzado){
            //corregir aquí
            alert("usted acertó, en el intento " + contador + " el número pensado era " + numeroPensado);
            break;
        }
        else {
            alert("usted erró");
        }
        contador++;
    }
    if (numeroPensado == numeroLanzado){
        //corregir aquí
        imprimir("usted acertó, en el intento " + contador + " el número pensado era " + numeroPensado);
    }
    else {
        imprimir("usted erró, el número pensado era " + numeroPensado);
    }
    imprimir("fin");
