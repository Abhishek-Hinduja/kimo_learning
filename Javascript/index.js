var handlingform = document.getElementById("handlingform")
var inputField1 = document.getElementById("inputField1")
var inputField2 = document.getElementById("inputField2")
var resultField = document.getElementById("resultField")


handlingform.addEventListener("submit", function(e){
    if (!inputField1.value && !inputField2.value){
        alert("Please type value")
        
    }
    else{
        var result = inputField1.value/inputField2.value
        result = result * 100
        resultField.innerText = result + "%"
        e.preventDefault()
    }
})

