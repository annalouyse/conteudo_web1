
let qtdcliques =  0;
let segundos = 0
let cliquesporminuto = 0


function handleClick(){
   qtdcliques+=1;
   let elementoqtdcliques = document.getElementById("quantidade-cliques");
   elementoqtdcliques.innerText = qtdcliques;

}
window.onload= ()=>{
    cronometro();
}
function cronometro(){

    setTimeout(()=>{
        segundos += 1

        let elementocronometro = document.getElementById("cronometro")
        elementocronometro.innerText = segundos;

        calculacliquesporminuto()

    cronometro();
    },1000)
}

function calculacliquesporminuto(){
    cliquesporminuto = (qtdcliques / (segundos / 60)).toFixed();
    
    let elementocliquesporminuto = document.getElementById("cpm")
    elementocliquesporminuto.innerText = cliquesporminuto;
}