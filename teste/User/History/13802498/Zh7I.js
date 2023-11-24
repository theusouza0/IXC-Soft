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
        	console.log(aux);
    	}
}

let a = 0
while (a<aux) {
    //=================================================================
    // prototipo de função para filtragem por assunto
    for (let item in button) {
        if (button[item].textContent == "Editar") {
            button[item].click();
            break;
        }
    }

    await sleep(1)

    const id_atendimento = document.querySelector("#id_ticket_label").value;
    console.log(id_atendimento);

    if(id_atendimento == "O.S. - ONU Alarmada" || id_atendimento == "TERCEIRIZADA - O.S. - ONU Alarmada" || id_atendimento =="O.S. - Sinal fora do padrão" || id_atendimento=="O.S - Problema de energia (Fonte/ONU)"){
        console.log("Atendimento alarmada!");

        await sleep(2);
        const close = document.getElementById("su_oss_chamado_btn_close");
        close.click();

        console.log("Pós BD físico identificado, finalizando...!");

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
        document.querySelector("#mensagem").value = "Feedback finalizado, O.S devido problemas externos";
        
        await sleep(1);
    
        const buttonS = document.getElementsByClassName('disab');
        for (let item in buttonS) {
            if (buttonS[item].textContent == "Salvar") {
                buttonS[item].click();
            }
        }
        

    }
    else{
        console.log("não é alarmada!")

        await sleep(2);
        const close = document.getElementById("su_oss_chamado_btn_close");
        close.click();
        
        await sleep(1);
        const buttonA = document.getElementsByClassName('fbutton');
        for (let item in buttonA) {
            if (buttonA[item].textContent == "Analisar") {
                buttonA[item].click();
            }
        }

        await sleep(1);
        document.querySelector("#id_setor").value = 5;
        
        await sleep(1);
        document.querySelector("#id_tecnico").value = 211; // ALTERAR PARA SEU ID!!!
        
        await sleep(1);
        document.querySelector("#mensagem").value = "Feedback encaminhado para análise manual";
        
        await sleep(1);
        document.querySelector("#data_inicio").value = "00000000000000"; 

        await sleep(1);
        document.querySelector("#data_final").value = "00000000000000";

        await sleep(1);
        const buttonS = document.getElementsByClassName('disab');

        for (let item in buttonS) {
            if (buttonS[item].textContent == "Salvar") {
                buttonS[item].click();
            }
        }
    }

    a++;

    await sleep(2); 
}
//=================================================================

function run(){ // função para percorrer e selecionar 
    const y = document.getElementsByClassName("bDiv_grid");
    id_atendimento = t[0].querySelector("table tbody");
   
    let lines = id_atendimento.querySelectorAll("tr");
    for(let i=1;i<aux;i++){
        //await sleep(1);
        lines[i].classList.add("trSelected");
        lines[i-1].classList.remove("trSelected");

    }
}
//=================================================================
