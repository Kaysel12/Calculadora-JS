const botonOperadores = document.querySelectorAll(".boton-operacion");
const numeros = document.querySelectorAll(".numeros");
const botonBorrarTodo = document.querySelector(".borrar-todo");
const borrar = document.querySelector(".borrar");

let displayActual = document.querySelector(".display__actual");
let displayAnterior = document.querySelector(".display__anterior");

let display = new Display;

numeros.forEach(numero =>{
    numero.addEventListener("click" , ()=>{
        display.obtenerValores(numero.innerHTML);
    });
});

borrar.addEventListener("click", ()=>{
    display.borrar();
});

botonBorrarTodo.addEventListener("click", ()=>{
    display.borrarTodo();
});

botonOperadores.forEach(boton=>{
    boton.addEventListener("click", ()=>{
       display.operacion(boton.value)
    });
})

// botonOperadores.forEach( operador =>{
//     operador.addEventListener("click", ()=>{
//         display.operadores(operador.innerHTML);
//     });
// });