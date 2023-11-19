let numeroMagix = Math.round(Math.random() * 50)
let intentos = 8

console.log(numeroMagix)

const inputDelJuego = document.querySelector(".input-juego")
const buttonDeAdivinar = document.querySelector(".btn-juego")

buttonDeAdivinar.addEventListener("click",()=>{
    if( inputDelJuego.value == 0){
        alert("ingresa otro")
    }else if ( inputDelJuego.value == numeroMagix){
        if(confirm(`Ganaste! El número era ${numeroMagix}. Jugar de nuevo?`)){
            location.reload();
        }else{
            location.reload();
        }
    }else if (inputDelJuego.value != numeroMagix && intentos == 1){
        if(confirm(`Perdiste! El número era ${numeroMagix}. Jugar de nuevo?`)){
            location.reload();
        }else{
            location.reload();
        }
    }else if (inputDelJuego.value > numeroMagix){
        intentos--
        if(intentos == 1){
            alert(`El número magico es menor. Te queda ${intentos} intento...`);
        }else{
            alert(`El número magico es menor. Te quedan ${intentos} intentos...`);
        }
        inputDelJuego.value="";
    }else if (inputDelJuego.value < numeroMagix){
        intentos--
        if(intentos == 1){
            alert(`El número magico es mayor. Te queda ${intentos} intento...`);
        }else{
            alert(`El número magico es mayor. Te quedan ${intentos} intentos...`);
        }
        inputDelJuego.value="";
    }
})
