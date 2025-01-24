// CONTROLE DAS CONFIGURAÇÕES DOS DADOS (Quantidade, Tipo e Modificador)
//Display da quantidade de dados
let diceNumSlide = document.querySelector("#diceNumInput")
let diceNumDisplay = document.querySelector("#diceNumDisplay")
let diceNum = 1 //Por padrão, a quantidade de dados é 1
diceNumSlide.addEventListener("input" , () => {
    diceNum = Number(diceNumSlide.value) //A variável diceNum possui a quantidade de dados escolhido pelo usuário
    diceNumDisplay.innerHTML = diceNum //Exibe a quantidade de dados
    
    setRollInfo()
})

//Display do tipo de dados
let diceTypeSlide = document.querySelector("#diceTypeInput")
let diceTypeDisplay = document.querySelector("#diceTypeDisplay")
let diceType = 20; //Por padrão, o tipo de dado é o d20
diceTypeSlide.addEventListener("input" , () => {
    //Cada valor do slider é convertido para um número de faces de um dado. A variável diceType possui o número de faces escolhido pelo usuário
    switch (Number(diceTypeSlide.value)) {
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
    diceTypeDisplay.innerHTML = diceType //Exibe o tipo dos dados
    
    setRollInfo()
    changeDiceDisplay(diceTypeSlide)
})

//Display do modificador da rolagem
let rollModSlider = document.querySelector("#rollModInput")
let rollModDisplay = document.querySelector("#rollModDisplay")
let rollModifier = 0 //Por padrão, o modificador é 0
rollModSlider.addEventListener("input" , () => {
    rollModifier = Number(rollModSlider.value) //A variável rollModifier possui o valor do modificador escolhido pelo usuário
    //Caso o modificador seja positivo, será exibido com um "+" no início :)
    if(rollModifier > 0){
        rollModDisplay.innerHTML = "+" + rollModifier
    }
    else{
        rollModDisplay.innerHTML = rollModifier
    }

    setRollInfo()
})

//FUNÇÃO PARA DISPLAY DA INFORMAÇÃO DA ROLAGEM
let rollInfoModDisplay = document.querySelector("#rollInfo-Mod") //Display 
let rollInfo //Contém a informação da rolagem
function setRollInfo() {
    rollInfo = diceNum + "d" + diceType
    
    //Se o modificador for positivo, coloca um "+" :)
    if (rollModifier > 0) {
        rollInfo = rollInfo + " + " + rollModifier
    }
    
    //Se o modificador for negativo, deixa ele positivo e coloca um "-" (importante deixar positivo para que o "-" padrão nn atrapalhe o estilo )
    else if (rollModifier < 0) {
        rollInfo = rollInfo + " - " + Math.abs(rollModifier)
    }
    
    //Exibe a informação da rolagem no display
    rollInfoModDisplay.innerHTML = rollInfo
}

let rollBtn = document.querySelector("#rollDices")
rollBtn.addEventListener("click" , () => {

})





let rollInfoDisplay = document.querySelector("#rollInfo")