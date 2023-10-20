//Alteração das propriedades de funcionamento do método confirm().
window.confirm = function (){ return true }

//Declarando na variável button o elemento principal de botões do IXC Soft.
const button = document.getElementsByClassName('fbutton')

//Função sleep
function sleep(segundos) {
    return new Promise((resolve) => setTimeout(resolve, segundos * 1000));
  }  

let i = 0; //Contador
let quantity = 30 //Quantia de repetições
while (i < quantity) { 
    for (let i in button) {
        if (button[i].textContent == "Interagir") { //Identificar o elemento com texto "Interagir"
            button[i].click(); //Clique em "Interagir"
            }
        }
    await sleep(1); //Pausa para carregamento da página 


    //Selecionar primeiro elemento na página com ID "id_resposta"
    document.querySelector("#id_resposta").value = 105;
    await sleep(1);  

    document.querySelector("#mensagem").value = "Atendimento/OS finalizado em massa via API/BOT.";
    await sleep(1); 

    document.querySelector("#su_status").value = "S";
    await sleep(1); 

    document.querySelector("#existe_pendencia_externa").value = "I";
    await sleep(1);  

    //Clicar no botão salvar da página
    document.querySelector("#\\32 _form > div.tDiv > button:nth-child(1)").click(); 
    i++; //Incrementar
    await sleep(1);

    document.querySelector(".pPageButtons > .fa-refresh").click();
    await sleep(2);
};