window.addEventListener("beforeunload" , () => {
    localStorage.setItem("pageTheme" , pageTheme)
    localStorage.setItem("pageColor" , pageColor)
    localStorage.setItem("resType" , resType)
})

window.addEventListener("DOMContentLoaded" , () => {
    pageTheme = localStorage.getItem("pageTheme")
    if(!pageTheme){
        pageTheme = "light"
    }
    document.querySelector("input[value='" + pageTheme +"'].pagetheme-option").checked = true
    changeTheme()
    
    pageColor = localStorage.getItem("pageColor")
    if(!pageColor){
        pageColor = "rosa"
    }
    document.querySelector("input[value='" + pageColor + "'].color-option").checked = true
    changeColor()

    resType = Number(localStorage.getItem("resType"))
    if(!resType){
        resType = 2
    }
    document.querySelector("input[value='" + resType + "'].display-types-option").checked = true
})