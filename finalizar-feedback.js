const button = document.getElementsByClassName('fbutton');

//funcao sleep
function sleep(segundos) {
    return new Promise((resolve) => setTimeout(resolve, segundos * 1000));
}

let aux = ""
for(let i=0;i<button[0].textContent.length;i++){
	if(button[0].textContent[i]=='/'){
        	let x = i;
        	aux += button[0].textContent[x+2];
        	aux += button[0].textContent[x+3];
        	console.log(aux);
    	}
}


//encaminha x feedbacks determinado na let item pra cada id que estiver na lista acima
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
    document.querySelector("#mensagem").value = "Feedback finalizado, O.S de alarmada devido problemas externos";
    
    await sleep(1);

    const buttonS = document.getElementsByClassName('disab');
    for (let item in button) {
        if (button[item].textContent == "Salvar") {
            button[item].click();
        }
    }

    a++;

    await sleep(2); 
    };
