const dDice = document.querySelector("#dice-display")
const iRollQuery = document.querySelector("#rollInfo")
const inputTemplate = /^(\d*)d(\d+)$/i


//EXIBIÇÃO DE RESULTADOS (Tipo e Resultados) (lado Direito)
//Rolagem de dados!!!!
const dRollRes = document.querySelector("#rollResults") //Display dos resultados das rolagens (Ex.: 1 3 6 10 20)
const dicesSound = document.querySelector("#dicesSfx") //Áduio do dado rolando


dDice.addEventListener("click" , buildRollQuery)

function buildRollQuery(){    
    let rollQuery = (iRollQuery.value)
    
    let mid = rollQuery.indexOf("d")
    
    rollQuery = rollQuery.split("")
    if(rollQuery.length === 0){
        dRollRes.innerHTML = "<- Digite o valor aqui"
        return
    }
    
    let leftSide = rollQuery.slice(0 , mid)
    leftSide = Number(leftSide.join(""))
    leftSide <= 0 ? leftSide = 1 : false

    let rightSide = rollQuery.slice(mid+1)
    rightSide = Number(rightSide.join(""))

    if(isNaN(leftSide) || isNaN(rightSide) || mid < 0){
        dRollRes.innerHTML = "Valor Inválido!"
        return
    }

    else if(leftSide >= 50 || rightSide >= 500){
        dRollRes.innerHTML = "Valor muito alto!"
        return
    }

    else if(rightSide <= 1){
        dRollRes.innerHTML = "Valor muito baixo!"
        return
    }

    rollDices(leftSide , rightSide)

}

let rollRes = [] //Reiniciando os resultados
//FUNÇÃO QUE ROLA OS DADOS!!! (finalmente)
function rollDices(diceNum , diceType) {
    rollRes = []



    //Para cada número de dados, uma rolagem é feita e o resultado é integrado no rollRes
    for(i = 1 ; i <= diceNum ; i++){
        let aRoll = Math.floor((Math.random() * diceType) + 1) //De 1 até o número de faces do dado
        rollRes.push(aRoll) //Adiciona o valor rolado ao rollRes
    }
    
    rollRes = rollRes.sort((a,b) => a-b) //Organizando os resultados em ordem crescente
    dRollRes.innerHTML = `${rollRes.join(" ")}` //Exibindo todos os resultados, substituindo a virgula (separador padrão de array) por um espaço

    displayResInDice(rollRes, diceType)
    changeDice(diceType) //Atualiza a forma do dado
}
