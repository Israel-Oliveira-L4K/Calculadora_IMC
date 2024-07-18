let inputNome = document.getElementById("nome");
let inputAltura = document.getElementById("altura");
let inputPeso = document.getElementById("peso");

let resultado = document.getElementById("resultado");

function calcular(){
    let nome = inputNome.value;
    let altura = inputAltura.value;
    let peso = inputPeso.value;

    if (nome !== "" && altura !== "" && peso !== ""){
        let calculo = (peso / (altura * altura)).toFixed(2);
        
        let classificacao = "";
        if (calculo < 18.5){
            classificacao = "abaixo do peso.";
        }else if (calculo < 25){
            classificacao = "com peso ideal";
        }else if (calculo < 30){
            classificacao = "levemente acima do peso";
        }else if (calculo < 35){
            classificacao = "com obesidade grau I";
        }else if (calculo < 40){
            classificacao = "com obesidade grau II"
        }else{
            classificacao = "com obesidade grau III";
        }

        resultado.innerHTML = `<p>${nome} seu IMC é ${calculo} e você está ${classificacao}.</p>`
        resultado.style.padding = "20px";
    }else {
        resultado.innerText = "Preencha todos os campos!!"
        resultado.style.padding = "20px";
    }
}