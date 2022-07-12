const costBoleto=87;

// let personas = document.getElementById("personas")
// document.querySelector(".input#personas") PARA MANDARLO A LLAVAR POR ELEMENTO DE CSS


function precioTotal (){
    let personas = parseInt(document.querySelector("#personas").value);
    let dia = document.querySelector("#dia").value;

    if(dia == 2){
        total = costBoleto * personas /2;
    } else {
        total= costBoleto* personas;
    }

    document.querySelector("#total").innerHTML= "Cualquier cosa"



}