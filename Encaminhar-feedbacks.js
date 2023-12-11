const button = document.getElementsByClassName('fbutton'); // captura os botões da página

//funcao sleep
function sleep(segundos) {
    return new Promise((resolve) => setTimeout(resolve, segundos * 1000));
}

let colaboradores = [211,308,306,307,155,255,203,313]


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

let x = parseInt(aux)/colaboradores.length
x = Math.floor(x)

console.log(x)

let b = 0

for (let index = 0; index < colaboradores.length; index++) {

    console.log("Colaborador: "+colaboradores[index]);
    b=0;

    while (b<x) {
        console.log("Volta: "+b);

        for (let item in button) {
            if (button[item].textContent == "Encaminhar (Alterar setor)") {
                button[item].click();
            }
        }
        await sleep(1);
        document.querySelector("#id_setor").value = 5;
    
        await sleep(1);
        document.querySelector("#id_tecnico").value = colaboradores[index];
    
        await sleep(1);
        document.querySelector("#id_assunto").value = 205;
    
        await sleep(1);
        document.querySelector("#mensagem").value = "Feedback reencaminhado mediante reestruturação de o.s";
        
        await sleep(1);
    
        const buttonS = document.getElementsByClassName('disab');
        for (let item in buttonS) {
            if (buttonS[item].textContent == "Salvar") {
                buttonS[item].click();
            }
        }
    
        b++;
    
        await sleep(2); 
    };
    
}
