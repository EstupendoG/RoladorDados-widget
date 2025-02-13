//Selecionando o HTML
const html = document.documentElement

// TROCAR TEMA DA PÁGINA
let pageTheme //Tema da página
const iTheme = document.querySelectorAll("input[name='theme'].pagetheme-option") //Input dos temas
//Adiciona um eventlistener para cada input
iTheme.forEach(option =>{
    option.addEventListener("input" , () => {
        pageTheme = option.value
        changeTheme()
    })
})
function changeTheme() {
    //Muda o atributo data-theme do HTML para o valor da opção escolhida
    html.setAttribute("data-theme" , pageTheme)
}



// TROCAR COR DA PÁGINA
let pageColor //Cor da página
const colorOptions = document.querySelectorAll("input[name='color'].color-option") //Input's radio com a opção das cores
//Adiciona um eventlistener para cada opção de tema
colorOptions.forEach(option => {
    option.addEventListener("input" , () =>{
        pageColor = option.value
        changeColor()
    })
});

function changeColor() {
    //Muda a variável colorHL (do css) para o valor da opção escolhida
    html.style.setProperty("--colorHL" , `var(--${pageColor})`)

}



// TROCA TIPO DE RESULTADO
let resType // Tipo de Resultado
const iResType = document.querySelectorAll("input[name='display-type']") // Input
const dDiceNumber = document.querySelector("#dice-result-display") // Display
//Adiciona um eventListener para cada opção de exibição
iResType.forEach(option =>{
    option.addEventListener("input" , () => {
        resType = Number(option.value) // Muda o tipo de resultado
        displayResInDice() // Função que exibe o resultado
    })
})

//Função para exibir o resultado
function displayResInDice() {
    //Exibe algo diferente de acordo com o tipo de exibição solicitado
    switch(resType) {
        // Mostrar o menor valor + modificador
        case 1:
            dDiceNumber.innerHTML = Math.min(...rollRes) + rollModifier
            break
        // Mostra a soma dos valores + modificador
        case 2:
            let total = 0
            for(res of rollRes){
                total += res
            }
            dDiceNumber.innerHTML = total + rollModifier
            break
        //Mostra o maior valor + modificador
        case 3:
            dDiceNumber.innerHTML = Math.max(...rollRes) + rollModifier
            break
    }

    //Caso um dos resultados seja o valor máximo do dado, adiciona um brilho extra ao display
    if(rollRes.includes(diceType)){
        dDiceNumber.style.setProperty("text-shadow" , "0px 0px 20px white")
    }
    else{
        dDiceNumber.style.setProperty("text-shadow" , "0px 0px 15px var(--luz)")
    }
}



// TROCAR O DISPLAY DE DADO
const dDice = document.querySelector("#dice-display")
function changeDice(diceType) {
    //Retira o display de dado atual
    dDice.classList.remove("d4-display", "d6-display", "d8-display", "d10-display", "d12-display", "d20-display", "d100-display");
    //Pega o tipo de dado para alterar o display de dado
    switch (Number(diceType.value)) {
        //d4 (triângulo)
        case 1:
            dDice.classList.add("d4-display")
            break
        //d6 (quadrado)
        case 2:
            dDice.classList.add("d6-display")
            break
        //d8 (losângulo)
        case 3:
            dDice.classList.add("d8-display")
            break
        //d10 (hexágono assimétrico)
        case 4:
            dDice.classList.add("d10-display")
            break
        //d12 (decágono)
        case 5:
            dDice.classList.add("d12-display")
            break
        //d20 (hexágono)
        case 6:
            dDice.classList.add("d20-display")
            break
        //d100 (círculo)
        case 7:
            dDice.classList.add("d100-display")
            break
    }
}