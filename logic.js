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



    // function saltarLinea() {
    //     document.write("<br>");    
    //     document.write("<br>");    
    //     document.write("<br>");    
    // }  
    // function imprimir(frase) {
    //     document.write(frase);
    //     saltarLinea();
    // }
    // var numeroPensado = Math.round(Math.random()*10);
    // var intentos = 3;
    // var contador = 1;

    // while (contador <= intentos) {
    //     var numeroLanzado = parseInt(prompt("Ingrese un número entre 0-10"));
    //     if (numeroPensado == numeroLanzado){
    //         //corregir aquí
    //         alert("usted acertó, en el intento " + contador + " el número pensado era " + numeroPensado);
    //         break;
    //     }
    //     else {
    //         alert("usted erró");
    //     }
    //     contador++;
    // }
    // if (numeroPensado == numeroLanzado){
    //     //corregir aquí
    //     imprimir("usted acertó, en el intento " + contador + " el número pensado era " + numeroPensado);
    // }
    // else {
    //     imprimir("usted erró, el número pensado era " + numeroPensado);
    // }
    // imprimir("fin");







  

    var inicioDeSesionRegistrado = "alura";
    var contrasenhaRegistrada = "alura321";

    var maximoIntentos = 3;
    var intentoActual = 1;

    while(intentoActual <= maximoIntentos){
        var inicioDeSesionIngresado = prompt("Ingrese su usuario");
        var contrasenhaIngresada = prompt("Ingrese su contraseña");

        if(inicioDeSesionRegistrado == inicioDeSesionIngresado && contrasenhaRegistrada == contrasenhaIngresada){
            alert("Bienvenido al sistema" + inicioDeSesionIngresado);
            intentoActual = maximoIntentos; // Lo hice bien, así que paso todos los intentos que falten y salgo del loop. Allá abajo aumentará +1! 
        } else {
            if (intentoActual == 3) {
                alert("Agotaste el número permitido de intentos!");
            } else {
                alert("Inicio de sesión inválido. Favor intente de nuevo");
            }
        }

       // vaya al próximo intento 
        intentoActual = intentoActual +1  
    }


