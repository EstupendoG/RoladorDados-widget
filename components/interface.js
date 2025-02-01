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
    //Pega o tipo de dado para alterar o display de dado
    switch (Number(diceType.value)) {
        //d4 (triângulo)
        case 1:
            dDice.style.setProperty("clip-path" , "polygon(50% 10%, 0% 85%, 100% 85%")
            break
        //d6 (quadrado)
        case 2:
            dDice.style.setProperty("clip-path" , "polygon(10% 10% , 90% 10%, 90% 90%, 10% 90%")
            break
        //d8 (losângulo)
        case 3:
            dDice.style.setProperty("clip-path" , "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)")
            break
        //d10 (hexágono assimétrico)
        case 4:
            dDice.style.setProperty("clip-path" , "polygon(50% 0%, 100% 40%, 100% 60%, 50% 100%, 0% 60%, 0% 40%)")
            break
        //d12 (decágono)
        case 5:
            dDice.style.setProperty("clip-path" , "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)")
            break
        //d20 (hexágono)
        case 6:
            dDice.style.setProperty("clip-path" , "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)")
            break
        //d100 (círculo)
        case 7:
            dDice.style.setProperty("clip-path" , "circle(50%)")
            break
    }
}