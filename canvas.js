{/* <canvas width="600" height="400"></canvas> */}

// var pantalla = document.querySelector("canvas");
//     var pincel = pantalla.getContext("2d");
//      //aquí viene más

//      //cabeza
//      pincel.fillStyle = 'darkgreen';
//      pincel.fillRect(200, 50, 350 ,300);  

//       //ojos
//     pincel.fillStyle = 'black';
//     pincel.fillRect(250, 110, 90, 90);
//     pincel.fillRect(410, 110, 90, 90);


//     //nariz
//     pincel.fillRect(340, 200, 70, 100);

//      //boca
//      pincel.fillRect(300, 240, 40, 110);
//      pincel.fillRect(410, 240, 40, 110);


// Ya practicamos bastante con rectángulos, es hora de diseñar otra figura. En 
// este nuevo desafío vamos a diseñar una escuadra (plantilla especial en forma
//      de un triángulo isósceles usada por arquitectos e ingenieros).

// pincel.beginPath();
// pincel.moveTo(50, 50);
// pincel.lineTo(50, 400);
// pincel.fill();


//<!-- escuadra.html -->
// pincel.fillStyle='black';
// pincel.beginPath();
// pincel.moveTo(50, 50);
// pincel.lineTo(50, 400);
// pincel.lineTo(400, 400);
// pincel.fill();

// pincel.fillStyle='white';
// pincel.beginPath();
// pincel.moveTo(100, 175);
// pincel.lineTo(100, 350);
// pincel.lineTo(275, 350);
// pincel.fill();

// Tenemos el siguiente código que declara la función dibujarCirculo. Esa
//  función permite diseñar en la pantalla una circunferencia en el eje X e Y, y
//   también nos permite definir su color.

// var pantalla = document.querySelector("canvas");
// var pincel = pantalla.getContext("2d");
// pincel.fillStyle = "lightgray";
// pincel.fillRect(0, 0, 600, 400);

// function dibujarCirculo(x, y, radio, color) {

//     pincel.fillStyle = color;
//     pincel.beginPath();
//     pincel.arc(x, y, radio, 0, 2*3.14);
//     pincel.fill();
// }
// function dibujarFlor(x,y) {
// dibujarCirculo(x, y+20, 10, "blue");
// dibujarCirculo(x, y, 10, "red");
// dibujarCirculo(x, y-20, 10, "yellow");
// dibujarCirculo(x-20, y, 10, "orange");
// dibujarCirculo(x+20, y, 10, "black");
// }
// dibujarFlor(300,200);


// A continuación sigue el código completo para que compares. Recuerda,
//  no existe la implementación perfecta de un código. Lo importante de la
//   función dibujarBarra es que cumpla con el objetivo propuesto.

// function dibujarRectangulo(x, y, base, altura, color) {
//     var pantalla = document.querySelector("canvas");
//     var pincel = pantalla.getContext("2d");

//     pincel.fillStyle=color;
//     pincel.fillRect(x,y, base, altura);
//     pincel.strokeStyle="black";
//     pincel.strokeRect(x,y, base, altura);
// }

// function escribirTexto(x , y, texto) {
//     var pantalla = document.querySelector("canvas");
//     var pincel = pantalla.getContext("2d");

//     pincel.font="15px Georgia";
//     pincel.fillStyle="black";
//     pincel.fillText(texto, x, y);    
// }

// function dibujarBarra(x, y, serie, colores, texto) {

//     escribirTexto(x, y - 10, texto);

//     var sumaAltura = 0;
//     for (var i = 0; i < serie.length; i++) {
//         var altura = serie[i];
//         dibujarRectangulo(x, y + sumaAltura, 50, altura, colores[i]);
//         sumaAltura = sumaAltura + altura;
//     }
// }

// var colores = ["blue","green","yellow", "red","gray"];
// var serie2009 = [6,47,41,3,3];
// var serie2019 = [81,9,3,3,4];

// dibujarBarra(50, 50, serie2009, colores, "2009");
// dibujarBarra(150, 50, serie2019, colores, "2019");

// Bueno el desafío es el siguiente, vamos a liberar que el usuario pueda alterar el 
// color de los círculos que son diseñados en la pantalla. Los colores que liberaremos 
// serán azul, rojo y verde (blue, red y green). Esa lista de colores te debe recordar
//  algo que ya vimos, los arrays en el anterior curso.

// var pantalla = document.querySelector("canvas");
//     var pincel = pantalla.getContext("2d");    
//     pincel.fillStyle = "grey";
//     pincel.fillRect(0,0,600,400); 
//     var colores = ["blue", "red", "green"];
//     var indiceColorActual = 0; // comienza con blue

//     function dibujarCirculo(evento){
//         var x = evento.pageX - pantalla.offsetLeft;
//         var y = evento.pageY - pantalla.offsetTop;    
//         pincel.fillStyle = colores[indiceColorActual];
//         pincel.beginPath();
//         pincel.arc(x,y,10,0,2*3.14);
//         pincel.fill();
//         console.log(x + "," + y);        
//     }

//     pantalla.onclick = dibujarCirculo;

//     function alterarColor() {
//         indiceColorActual++;
//         if(indiceColorActual>= colores.length) {
//              indiceColorActual = 0; //vuelve para el primer color, blue
//         }
//         return false; //menú contextual padrón de `canvas` no sea exhibido
//     }

//     pantalla.oncontextmenu = alterarColor;


    //
    var pantalla = document.querySelector('canvas');
    var pincel = pantalla.getContext('2d');

    pincel.fillStyle = 'grey';
    pincel.fillRect(0, 0, 600, 400);

    var puedoDibujar = false;

    //Variables para dibujar la paleta
    var xRojo = 0;
    var xVerde  = 50;
    var xAzul = 100;
    var yCuadrados = 0;
    var tamanhoCuadrados = 50;
    var colorActual = "blue";

    function dibujarCirculo(x,y,colorActual ) {

        if(puedoDibujar) {

            pincel.fillStyle = colorActual;
            pincel.beginPath();
            pincel.arc(x, y, 5, 0, 2 * 3.14);
            pincel.fill();

        }
    }

    //Función para dibujar cada uno de los cuadrados de la paleta
    function dibujarCuadrado(x, y, tamanho, color) {

        pincel.fillStyle = color;
        pincel.fillRect(x, y, tamanho, tamanho)
        pincel.fill();

    }

    //Función para dibujar la paleta de colores
    function dibujarPaletaColores() {

        dibujarCuadrado(xRojo, yCuadrados, tamanhoCuadrados, 'red');
        dibujarCuadrado(xVerde, yCuadrados, tamanhoCuadrados, 'green');
        dibujarCuadrado(xAzul, yCuadrados, tamanhoCuadrados, 'blue');

    }

    function habilitarDibujar() {

        puedoDibujar = true;

    }

    function deshabilitarDibujar() {

        puedoDibujar = false;

    }

    //Función para delimitar el área
    function puedeDisenharArea(xCoordenada,yCoordenada){

        if ((xCoordenada >= 0 && xCoordenada < (3*tamanhoCuadrados+5)) && 
            (yCoordenada >=0 && yCoordenada < (tamanhoCuadrados+5))) {

            return false;

        } else{

            return true;

        }

    }    

    function capturarMovimientoDelMouse(evento){

        var x = evento.pageX - pantalla.offsetLeft;
        var y = evento.pageY - pantalla.offsetTop;

        if (puedeDisenharArea(x,y)){

                dibujarCirculo(x,y,colorActual);

        }

    }

    function seleccionarColor(evento) {

        var x = evento.pageX - pantalla.offsetLeft;
        var y = evento.pageY - pantalla.offsetTop;

        //Cada condición altera el color de la variable colorActual

        //Comenzamos por la condición del eje Y que es común para todas
        if (y > yCuadrados && y < (yCuadrados + tamanhoCuadrados)) {

            if(x > xRojo && x < (xRojo + tamanhoCuadrados)) {

                colorActual = "red";
                console.log(colorActual);

            } else if (x > xVerde && x < (xVerde + tamanhoCuadrados)) {

                colorActual = "green";

            } else if(x > xAzul && x < (xAzul + tamanhoCuadrados)) {

                colorActual = "blue";

            }            


        }


    }

    pantalla.onmousemove = capturarMovimientoDelMouse;

    pantalla.onmousedown = habilitarDibujar;

    pantalla.onmouseup = deshabilitarDibujar;

    dibujarPaletaColores();

    pantalla.onclick = seleccionarColor;

