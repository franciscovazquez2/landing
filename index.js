"use script"

const boton = document.getElementById("contador");
const boton_reset = document.getElementById("reset");
let result = document.getElementById("result");
let contador = 0;


boton.addEventListener("click", ()=>{
    contador++;
    result.innerHTML="cantidad de clicks:" + contador;
    boton_reset.classList.remove("hiden");
    console.log(result);
    
})

boton_reset.addEventListener("click",()=>{
    contador = 0;
    result.innerHTML="";
    boton_reset.classList.add("hiden");
})