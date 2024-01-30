const button = document.getElementsByClassName('fbutton'); // captura os botões da página

//funcao sleep
function sleep(segundos) {
    return new Promise((resolve) => setTimeout(resolve, segundos * 1000));
}

//=================================================

let aux = "" // Verifica a quantidade de o.s da lista
const t = document.getElementsByClassName('pPageStat');
for(let i=0;i<t[0].textContent.length;i++){
	if(t[0].textContent[i]=='/'){
        	let x = i;
        	aux += t[0].textContent[x+2];
        	aux += t[0].textContent[x+3];
            aux += t[0].textContent[x+4]; //alterar
        	console.log(aux);
    	}
}

let a = 0
while (a<aux) {
    for (let item in button) {
        if (button[item].textContent == "Finalizar") {
            button[item].click();
        }
    }
    await sleep(1);
    document.querySelector("#id_resposta").value = 1;

    await sleep(1);
    document.querySelector("#gera_comissao").removeAttribute("checked");

    await sleep(1);
    const fina = document.querySelector("#finaliza_processo");
    fina.checked = true;


    await sleep(1);
    document.querySelector("#mensagem").value = "Finalização de o.s em massa, devido o encerramento de encaminhamento de e-mails pela action";
    
    await sleep(1);

    const buttonS = document.getElementsByClassName('disab');
    for (let item in buttonS) {
        if (buttonS[item].textContent == "Salvar") {
            buttonS[item].click();
        }
    }

    a++;

    await sleep(2); 
};