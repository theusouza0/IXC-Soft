# Scripts para automação de processos para o sistema IXC Soft

O presente repositório tem como objetivo fornecer uma biblioteca de algoritmos relacionados á automação de processos relacionados ao sistema de ERP IXC Soft

## Arquivos:

```Finalizar Atendimentos.js```
 
> Arquivos responsável pela finalização em massa de atendimentos de suporte em progresso 

```finalizar-feedback.js```

> Arquivos responsável pela finalização em ordens de serviço de feedback pós manutenção em aberto


## Releases:

**check**:

Função de verificação do ID do atendimento da o.s, indicando o motivo pela qual a manutenção foi aberta

**Data** 23/11/23

**arquivo**: finalizar-feedback.js

--- 

**run**

Função que percorre a lista de ordens de serviço selecionando as linhas uma por uma

**Data** 24/11/23

**arquivo** finalizar-feedback.js

---

**separator**

Função que finaliza seletivamente os feedbacks, baseado no tipo de atendimento que gerou esse bd

**Data** 24/11/23

**arquivo** finalizar-feedback.js

## Fluxograma:

**finalizar-feedback.js**

## Informações para alterar:

## Utilização

1. Clone o repositório:

```git@github.com:theusouza0/IXC-Soft.git```

2. Abra o console de seu navegador na página corresponde

3. Cole o Código dentro do script correspondente

## Backups:

### Finalização não seletiva:

```
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
```