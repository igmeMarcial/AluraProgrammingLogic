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

function dibujarRectangulo(x, y, base, altura, color) {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");

    pincel.fillStyle=color;
    pincel.fillRect(x,y, base, altura);
    pincel.strokeStyle="black";
    pincel.strokeRect(x,y, base, altura);
}

function escribirTexto(x , y, texto) {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");

    pincel.font="15px Georgia";
    pincel.fillStyle="black";
    pincel.fillText(texto, x, y);    
}

function dibujarBarra(x, y, serie, colores, texto) {

    escribirTexto(x, y - 10, texto);

    var sumaAltura = 0;
    for (var i = 0; i < serie.length; i++) {
        var altura = serie[i];
        dibujarRectangulo(x, y + sumaAltura, 50, altura, colores[i]);
        sumaAltura = sumaAltura + altura;
    }
}

var colores = ["blue","green","yellow", "red","gray"];
var serie2009 = [6,47,41,3,3];
var serie2019 = [81,9,3,3,4];

dibujarBarra(50, 50, serie2009, colores, "2009");
dibujarBarra(150, 50, serie2019, colores, "2019");



