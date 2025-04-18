const dDice = document.querySelector("#dice-display") //Display de Dado
const iRollQuery = document.querySelector("#rollInfo") //Input da rolagem

const dRollRes = document.querySelector("#rollResults") //Display dos resultados das rolagens (Ex.: 1 3 6 10 20)
const diceSfx = new Audio("../assets/sounds/dice-roll.mp3") //Efeito sonoro do dado rolando

//Ao clicar no grande dado, será construída a rollQuery
dDice.addEventListener("click" , buildRollQuery)

//CONSTRUTOR DA ROLLQUERY
function buildRollQuery(){    
    let rollQuery = (iRollQuery.value) //Valor do input
    
    let mid = rollQuery.indexOf("d") //Encontra o índice do número "d" no input
    
    rollQuery = rollQuery.split("") //Transforma o valor do input em um array
    
    //Verifica se o array não está vazio
    if(rollQuery.length <= 0){
        dRollRes.innerHTML = "<- Digite o valor aqui"
        return
    }
    
    //Define o lado esquerdo (número de dados)
    let leftSide = rollQuery.slice(0 , mid) //Do índice 0 até o índice do "d"
    leftSide = Number(leftSide.join("")) //Junta em string e transforma em número
    leftSide <= 0 ? leftSide = 1 : false //Se estiver vazio, considera como 1

    //Define o lado direito (número de faces do dado)
    let rightSide = rollQuery.slice(mid+1) //Do índice do "d" até o fim
    rightSide = Number(rightSide.join("")) //Junta em string e transforma em número

    //Verifica se um dos lados possui letras ou se o mid existe
    if(isNaN(leftSide) || isNaN(rightSide) || mid < 0){
        dRollRes.innerHTML = "Valor Inválido!"
        return
    }

    //Verifica se um dos lados possui um valor alto demais
    else if(leftSide >= 50 || rightSide >= 500){
        dRollRes.innerHTML = "Valor muito alto!"
        return
    }

    //Verifica se o lado direito possui valor
    else if(rightSide <= 1){
        dRollRes.innerHTML = "Valor muito baixo!"
        return
    }

    //Aciona a função de rolagem de dados
    rollDices(leftSide , rightSide)

}

//FUNÇÃO QUE ROLA OS DADOS!!! (finalmente)
let rollRes = [] 
function rollDices(diceNum , diceType) {
    rollRes = [] //Reiniciando os resultados

    diceSfx.play() //Efeito sonoro de dado rolando

    //Para cada número de dados, uma rolagem é feita e o resultado é integrado no rollRes
    for(i = 1 ; i <= diceNum ; i++){
        let aRoll = Math.floor((Math.random() * diceType) + 1) //De 1 até o número de faces do dado
        rollRes.push(aRoll) //Adiciona o valor rolado ao rollRes
    }
    
    rollRes = rollRes.sort((a,b) => a-b) //Organizando os resultados em ordem crescente
    dRollRes.innerHTML = `${rollRes.join(" ")}` //Exibindo todos os resultados, substituindo a virgula (separador padrão de array) por um espaço

    displayResInDice(rollRes, diceType) //Exibindo o resultado no display de dado
    changeDice(diceType) //Atualiza a forma do dado
}
