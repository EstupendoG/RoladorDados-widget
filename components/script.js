// CONTROLE DAS CONFIGURAÇÕES DOS DADOS (Quantidade, Tipo e Modificador) (lado Esquerdo)
//Quantidade de dados
let diceNum = 1 //Por padrão, a quantidade de dados é 1
const iDiceNum = document.querySelector("#diceNumInput") //Input
const dDiceNum = document.querySelector("#diceNumDisplay") //Display
iDiceNum.addEventListener("input" , () => {
    diceNum = Number(iDiceNum.value) //A variável diceNum possui a quantidade de dados escolhido pelo usuário
    dDiceNum.innerHTML = diceNum //Display
    
    displayRollInfo() //Atualiza informação de rolagem
})

//Tipo de dados
let diceType = 20; //Por padrão, o tipo de dado é o d20
const iDiceType = document.querySelector("#diceTypeInput") //Input
const dDiceType = document.querySelector("#diceTypeDisplay") //Display
iDiceType.addEventListener("input" , () => {
    //Cada valor do slider é convertido para um número de faces de um dado. A variável diceType possui o número de faces escolhido pelo usuário
    switch (Number(iDiceType.value)) {
        case 1:
            diceType = 4
            break
        case 2:
            diceType = 6
            break
        case 3:
            diceType = 8
            break
        case 4:
            diceType = 10
            break
        case 5:
            diceType = 12
            break
        case 6:
            diceType = 20
            break
        case 7:
            diceType = 100
            break
    }
    dDiceType.innerHTML = diceType //Display
    
    changeDice(iDiceType) //Atualiza a forma do dado
    displayRollInfo() //Atualiza informação de rolagem
})

//Modificador da rolagem
let rollModifier = 0 //Por padrão, o modificador é 0
const iRollMod = document.querySelector("#rollModInput") //Input
const dRollMod = document.querySelector("#rollModDisplay") //Display
iRollMod.addEventListener("input" , () => {
    rollModifier = Number(iRollMod.value) //A variável rollModifier possui o valor do modificador escolhido pelo usuário
    //Caso o modificador seja positivo, será exibido com um "+" no início :)
    if(rollModifier > 0){
        dRollMod.innerHTML = "+" + rollModifier
    }
    else{
        dRollMod.innerHTML = rollModifier
    }

    displayRollInfo() //Atualiza informação de rolagem
})

//Display das informações de rolagem
const dRollInfoMod = document.querySelector("#rollInfo-Mod") //Display 
let rollInfo //Contém a informação da rolagem
let rollInfoMod //Informações da rolagem + modificador

//Função que define a informação de rolagem
function setRollInfo() {
    rollInfo = diceNum + "d" + diceType
}


//Função que exibe a informação de rolagem
function displayRollInfo() {
    setRollInfo() //Define a informação

    //Se o modificador for positivo, coloca um "+" :)
    if (rollModifier > 0) {
        rollInfoMod = rollInfo + " + " + rollModifier
    }
    
    //Se o modificador for negativo, deixa ele positivo e coloca um "-" (importante deixar positivo para que o "-" padrão nn atrapalhe o estilo )
    else if (rollModifier < 0) {
        rollInfoMod = rollInfo + " - " + Math.abs(rollModifier)
    }
    
    else {
        rollInfoMod = rollInfo
    }
    
    //Exibe a informação da rolagem no display
    dRollInfoMod.innerHTML = rollInfoMod
}

// Botão para rolar dados
const rollBtn = document.querySelector("#rollDices")
rollBtn.addEventListener("click" , rollDices)



//EXIBIÇÃO DE RESULTADOS (Tipo e Resultados) (lado Direito)
//Rolagem de dados!!!!
const dRollInfo = document.querySelector("#rollInfo") //Display dos dados rolados (Ex.: 1d20)
const dRollRes = document.querySelector("#rollResults") //Display dos resultados das rolagens (Ex.: 1 3 6 10 20)
const dicesSound = document.querySelector("#dicesSfx") //Áduio do dado rolando
let rollRes = [0] // Resultado das rolagens

//FUNÇÃO QUE ROLA OS DADOS!!! (finalmente)
function rollDices() {

    //SoundEffect de dado rolando
    dicesSound.currentTime = 0
    dicesSound.play()
    
    setRollInfo() //Informação dos dados rolados
    dRollInfo.innerHTML = `${rollInfo} -->` //Exibindo os dados rolados (1d20 -->)
    
    rollRes = [] //Reiniciando os resultados

    //Para cada número de dados, uma rolagem é feita e o resultado é integrado no rollRes
    for(i = 1 ; i <= diceNum ; i++){
        let aRoll = Math.floor((Math.random() * diceType) + 1) //De 1 até o número de faces do dado
        rollRes.push(aRoll) //Adiciona o valor rolado ao rollRes
    }
    
    rollRes = rollRes.sort((a,b) => a-b) //Organizando os resultados em ordem crescente
    dRollRes.innerHTML = `${rollRes.join(" ")}` //Exibindo todos os resultados, substituindo a virgula (separador padrão de array) por um espaço

    displayResInDice() //Exibindo o valor no display de dado. Chama a função para exibir de acordo com o tipo de exibição que o usuario quer

}
