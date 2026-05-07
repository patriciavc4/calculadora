//Programamos algo semejante a c
function suma(){
// documento = pagina = documentos científicos en los 90's
//Programar del lado del cliente - javascript
// Programar del lado del servidor - javascript, PHP, Java, Python, C#, etc.
let n1 = document.getElementById("n1").value;
let n2 = document.getElementById("n2").value;

if(n1 === "" || n2 === ""){
document.getElementById("resultado").innerHTML = "Por favor ingrese ambos números";
return;
}

let resultado = parseInt(n1) + parseInt(n2);
//accedemos al parrafo que tiene un id = resultado y modificamos el contenido
document.getElementById("resultado").innerHTML = resultado;
}

function resta(){
let n1 = document.getElementById("n1").value;
let n2 = document.getElementById("n2").value;

if(n1 === "" || n2 === ""){
document.getElementById("resultado").innerHTML = "Por favor ingrese ambos números";
return;
}

let resultado = parseInt(n1) - parseInt(n2);
document.getElementById("resultado").innerHTML = resultado;

}

function multiplicacion(){
let n1 = document.getElementById("n1").value;
let n2 = document.getElementById("n2").value;

if(n1 === "" || n2 === ""){
document.getElementById("resultado").innerHTML = "Por favor ingrese ambos números";
return;
}

let resultado = parseInt(n1) * parseInt(n2);
document.getElementById("resultado").innerHTML = resultado;
}

function division(){
let n1 = document.getElementById("n1").value;
let n2 = document.getElementById("n2").value;

if(n1 === "" || n2 === ""){
document.getElementById("resultado").innerHTML = "Por favor ingrese ambos números";
return;
}

if(parseInt(n2) === 0){
document.getElementById("resultado").innerHTML = "Error: No se puede dividir entre cero";
return;
}

let resultado = parseInt(n1) / parseInt(n2);
document.getElementById("resultado").innerHTML = resultado;
}