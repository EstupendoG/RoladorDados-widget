//Selecionando o HTML
let html = document.documentElement


// TROCAR TEMA DA PÁGINA
let themeOptions = document.querySelectorAll("input[name='theme'].pagetheme-option") //Input's radio com a opção dos temas

//Adiciona um eventlistener para cada opção de tema
themeOptions.forEach(option =>{
    option.addEventListener("input" , () => {
        //Muda o atributo data-theme do HTML para o valor da opção escolhida
        html.setAttribute("data-theme" , option.value)
    })
})

// TROCAR COR DA PÁGINA
let colorOptions = document.querySelectorAll("input[name='color'].color-option") //Input's radio com a opção das cores

//Adiciona um eventlistener para cada opção de tema
colorOptions.forEach(option => {
    option.addEventListener("input" , () =>{
        //Muda a variável colorHL (do css) para o valor da opção escolhida
        html.style.setProperty("--colorHL" , `var(--${option.value})`)
    })
});

let diceDisplay = document.querySelector("#dice-display")
function changeDiceDisplay(diceType) {
    switch (Number(diceType.value)) {
        case 1:
            diceDisplay.style.setProperty("clip-path" , "polygon(50% 10%, 0% 85%, 100% 85%")
            break
        case 2:
            diceDisplay.style.setProperty("clip-path" , "polygon(10% 10% , 90% 10%, 90% 90%, 10% 90%")
            break
        case 3:
            diceDisplay.style.setProperty("clip-path" , "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)")
            break
        case 4:
            diceDisplay.style.setProperty("clip-path" , "polygon(50% 0%, 100% 40%, 100% 60%, 50% 100%, 0% 60%, 0% 40%)")
            break
        case 5:
            diceDisplay.style.setProperty("clip-path" , "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)")
            break
        case 6:
            diceDisplay.style.setProperty("clip-path" , "polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)")
            break
        case 7:
            diceDisplay.style.setProperty("clip-path" , "circle(50%)")
            break
    }
}