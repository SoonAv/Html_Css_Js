var userName = document.querySelector('#user_name')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirnPassword = document.querySelector('#confirn_password')
var form = document.querySelector('form')

function showError(input,message){
    var parent = input.parentElement
    var small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = message
}          

function ShowSucces(input){
    var parent = input.parentElement
    var small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText = ''
}   
function CheckEmtyError(listInput){
    let isEmtyError = false
    listInput.forEach(function (input){
        input.value = input.value.trim()
        if(!(input.value)){
            showError(input, 'khong duoc de trong')
            isEmtyError = true
        } else {
            ShowSucces(input)
        }
    })
    return isEmtyError
}
function checkEmailError(){
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let isEmailError = !regexEmail.test(input.value)
    input.value = input.value.trim()
    
   
    if( regexEmail.test(input.value)){
        ShowSucces(input)
    } else {
        showError(input,'Email invalidate')
    }
    return regexEmail.test(input.value)
}

form.addEventListener('submit',function(e){
    e.preventDefault()
    let isEmtyError=  CheckEmtyError([userName, email, password, confirnPassword])
})