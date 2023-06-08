console.log("Se cargo el JS");
// Comentario de una linea
/* 
Son comentarios
Multilinea
Para variables, puedo utilizar:
var, let 
Para constantes:
const -> No podemos cambiar o modificar su valor.
*/
// Voy a guardar en una constante, el elemento del 
// "documento" que tenga
// como id = num1
// INPUTS
const inputNum1 = 
document.getElementById("num1");
const inputNum2 = document.getElementById("num2");
const inputTotal = document.getElementById("total");
// SELECT
const selectOperador = document.getElementById("operador");
// Boton
const btn = document.getElementById("btn");

// Mensaje
const mensaje = document.getElementById("mensaje");

// OBTENER VALORES DE INICIO DE LOS INPUTS
// VAMOS A UTILIZAR MATH
const num1 = Math.ceil(Math.random() * 10); 
const num2 = Math.ceil(Math.random() * 10);
// SETEAR VALORES DE INICIO DE LOS INPUTS
inputNum1.value = num1;
inputNum2.value = num2;
console.log(num1, num2); 

// Voy a agregar un evento al hacer click al boton
// Tipo de evento, function de lo que va hacer
// function() {} -> Funcion anonima (no tiene nombre)
// () => {} -> Funcion flecha (arrow function)
//function saludar(...) {}
btn.addEventListener('click', function() {
    console.log("Click en el select", selectOperador.value);
    // Obtener el operador
    const operador = selectOperador.value;
    // Intenta convertir el valor de texto a un numero entero
    const valorUsuario = parseInt(inputTotal.value);

    // Dentro de los parentesis va la condicion
    // Dentro de las llaves, va el codigo a ejecutar
    if (isNaN(valorUsuario)) {
        // El usuario no esta ingresando un numero
        // Terminamos la ejecución de la funcion
        alert("Pues no es un número, no puedo hacer nada. Sorry.");
        return;
    }

    let resultadoCorrecto;

    // El valor a evaluar, es el "operador"
    switch(operador) {
        case "+":
            // Cada case, es una condicion
            resultadoCorrecto = num1 + num2;
            break;
        case "-":
            resultadoCorrecto = num1 - num2;
            break;
        case "*":
            resultadoCorrecto = num1 * num2;
            break;
        case "/":
            resultadoCorrecto = num1 / num2;
            break;  
    }

    // Si el resultado es correcto, y es igual a lo que metio el usuario
    // = = Dos iguales -> Compara el valor, sin comparar el tipo
    // = = = Tres iguales -> Compara el valor, y  el tipo (Numero, Texto -> String)
    if (valorUsuario === resultadoCorrecto) {
        mensaje.textContent = "Si sabes hacer operaciones. Felicidades.";
    } else {
        mensaje.textContent = "No sabes hacer operaciones. Sorry.";
    }


    /**
       if (operador === "+") {}
       if (operador === "-") {}
     */

  
    
  
});




