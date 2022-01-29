// // 1. Declara 2 variables numéricas (con el valor que desees), e indica cual es mayor
// // de los dos. Si son iguales indicarlo también. Ves cambiando los valores para
// // comprobar que funciona.
// let A = 2;
// let B = 2;
// if(A > B ){
//     console.log(`La variable "A" es mayor que "B"`);
// } else if(B > A){
//     console.log(`La variable "B" es mayor que "A"`);
// } else if(A === B) {
//     console.log(`Las dos variables son iguales`);
// }




// // 2. Declara un String que contenga tu nombre, después muestra un mensaje de
// // bienvenida por consola. Por ejemplo: si introduzco “Fernando”, me aparezca
// // “Bienvenido Fernando”.
// let nombre = "Javi";
// console.log(`Bienvenido ${nombre}`);





// // 3. Modifica la aplicación anterior, para que nos pida el nombre que queremos
// // introducir (recuerda usar prompt).
// let nombre = prompt(`Introduce tu nombre`);
// console.log(`Bienvenido ${nombre}`);





// // 4. Haz una aplicación que calcule el área de un círculo (pi*R2). El radio se pedirá
// // por teclado (recuerda pasar de String a double con parseDouble). Usa la
// // constante PI.
// let radio =parseFloat(prompt(`Introduce el radio`));
// let PI = 3.1416;
// console.log(`El área de un círculo de radio ${radio} es ${PI * Math.pow(radio, 2)}`);





// // 5. Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es,
// // también debemos indicarlo.
// let numero = parseFloat(prompt('Introduce un número para saber si es divisble entre 2'));

// if(numero%2 === 0) {
//     console.log(`El número ${numero} es divisible entre 2`);
// } else {
//     console.log(`El número ${numero} NO es divisible entre 2`);
// }





// // 6. Lee un número por teclado que pida el precio de un producto (puede tener
// // decimales) y calcule el precio final con IVA. El IVA sera una constante que sera
// // del 21%
// let precio = parseFloat(prompt(`Introduce el precio bruto del producto para calcularlo con IVA`));
// let IVA = 1.21;

// console.log(`Si al precio ${precio} le añadimos el IVA, se queda en ${precio * IVA}`);





// // 7. Muestra los números del 1 al 100 (ambos incluidos). Usa un bucle while.
// let i = 1;
// while(i <= 100) {
//     console.log(i);
//     i++;
// }




// // 8. Haz el mismo ejercicio anterior con un bucle for.
// for(let i=1 ; i<=100 ; i++) {
//     console.log(i);
// }




// // 9. Muestra los números del 1 al 100 (ambos incluidos) divisibles entre 2 y 3. Utiliza
// // el bucle que desees.
// for(let i=1 ; i<= 100 ; i++) {
//     if((i%2 === 0) && (i%3 === 0)) {
//         console.log(i);
//     }
// }




// // // 10. Realiza una aplicación que nos pida un número de ventas a introducir, después
// // // nos pedirá tantas ventas por teclado como número de ventas se hayan indicado.
// // // Al final mostrara la suma de todas las ventas. Piensa que es lo que se repite y lo
// // // que no.
// let sells = [];

// let sellsNum = parseInt(prompt(`Introduce el número de ventas que vas a hacer`));
// let total = 0;

// if(sellsNum !== 0){

//     for(let i=1 ; i<=sellsNum ; i++) {
//     sells[i] = parseInt(prompt(`Introduce el valor de la venta nº${i}`));
//     total = parseInt(total += sells[i]);
//     }
//     console.log(total);
// }





// // 11. Crea una aplicación que nos pida un día de la semana y que nos diga si es un día
// // laboral o no. Usa un switch para ello.
// let day = prompt(`Introduce el día de la semana para saber si es laboral`).toLowerCase();

// switch(day) {
//     case "lunes":
//     case "martes":
//     case "miercoles":
//     case "jueves":
//     case "viernes":
//         alert(`El ${day} es un día laboral`);
//         break;
//     case "sabado":
//     case "domingo":
//         alert(`El ${day} no se trabaja`);
//         break;
// };





// // 12. Escribe una aplicación con un String que contenga una contraseña cualquiera.
// // Después se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando
// // aciertes ya no pedirá más la contraseña y mostrará un mensaje diciendo
// // “Enhorabuena”. Piensa bien en la condición de salida (3 intentos y si acierta sale,
// // aunque le queden intentos).
// const password = 1234;
// let valid = false;
// let blocked = false;

// if((blocked === false) && (valid === false)) {
//     for(let i=3 ; i>0 ; i--) {
//         let passTry = prompt(`Introduce tu contraseña. Te quedan ${i} intentos.`);
//         if(passTry == password) {
//             valid = true;
//             alert(`Contraseña correcta, bienvenido`);
//             break;
//         }
//         if((passTry !== password)&&(i===1)){
//             blocked = true;
//             alert(`Tu cuenta se ha bloqueado`);
//             break;
//         }
//     }  
// }





// // 13. Crea una aplicación llamada CalculadoraInversa, nos pedirá 2 operandos (int) y
// // un signo aritmético (String), según este último se realizará la operación
// // correspondiente. Al final mostrara el resultado en un cuadro de dialogo.
// // Los signos aritméticos disponibles son:
// // +: suma los dos operandos.
// // -: resta los operandos.
// // *: multiplica los operandos.
// // /: divide los operandos, este debe dar un resultado con decimales (double)
// // ^: 1o operando como base y 2o como exponente.
// // %: módulo, resto de la división entre operando1 y operando2.

// function calculadora(num1,op,num2) {
//     if((!isNaN(num1)) && (!isNaN(num2))) {
//         switch (op) {
//             case "+" : 
//             return num1 + num2;
            
//             case "-" : 
//             return num1 - num2;
            
//             case "*" : 
//             return num1 * num2;
            
//             case "/" : 
//             return num1 / num2;
            
//             default :
//             return alert('Introduce un operador válido');
//         }
//     } else {
//         alert('Por favor introduce un número');
//     }         
// }

// let primerNum = parseFloat(prompt('Introduce el primer número'));
// let operador = prompt('Introduce el operador');
// let segundoNum = parseFloat(prompt('Introduce el segundo número'));

// alert(calculadora(primerNum, operador, segundoNum));
