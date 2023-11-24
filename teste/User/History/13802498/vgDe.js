const button = document.getElementsByClassName('fbutton');

//funcao sleep
function sleep(segundos) {
    return new Promise((resolve) => setTimeout(resolve, segundos * 1000));
}

let aux = ""
const t = document.getElementsByClassName('pPageStat');
for(let i=0;i<t[0].textContent.length;i++){
	if(t[0].textContent[i]=='/'){
        	let x = i;
        	aux += t[0].textContent[x+2];
        	aux += t[0].textContent[x+3];
        	console.log(aux);
    	}
}

function check(){
    for (let item in button) {
        if (button[item].textContent == "Editar") {
            button[item].click();
        }
    }
    
    let id_atendimento = document.querySelector("#id_ticket").value;
    if(id_atendimento == "638538"){
        console.log("Atendimento de alarmada!");
    }
}

function run(){
    const y = document.getElementsByClassName("bDiv_grid");
    id_atendimento = t[0].querySelector("table tbody");
    let aux = ""
    const l = document.getElementsByClassName('pPageStat');
    for(let i=0;i<t[0].textContent.length;i++){
        if(t[0].textContent[i]=='/'){
                let x = i;
                aux += t[0].textContent[x+2];
                aux += t[0].textContent[x+3];
                console.log(aux);
            }
    }
    let lines = id_atendimento.querySelectorAll("tr");
    for(let i=1;i<aux;i++){
        //await sleep(1);
        lines[i].classList.add("trSelected");
        lines[i-1].classList.remove("trSelected");

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
    for (let item in buttonS) {
        if (buttonS[item].textContent == "Salvar") {
            buttonS[item].click();
        }
    }

    a++;

    await sleep(2); 
};
