function setDisplay(display_value){
    var displayBox = document.getElementById("display")
    displayBox.innerText = display_value
}

function getDisplay(){
    var displayBox = document.getElementById("display")
    return displayBox.innerText
}

function updateDisplay(display_value){
    var existingValue = getDisplay()
    var newValue = existingValue + display_value
    setDisplay(newValue)
}
