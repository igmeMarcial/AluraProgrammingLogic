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
pincel.fillStyle='black';
pincel.beginPath();
pincel.moveTo(50, 50);
pincel.lineTo(50, 400);
pincel.lineTo(400, 400);
pincel.fill();

pincel.fillStyle='white';
pincel.beginPath();
pincel.moveTo(100, 175);
pincel.lineTo(100, 350);
pincel.lineTo(275, 350);
pincel.fill();
