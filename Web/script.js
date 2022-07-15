const password = document.getElementById('password')
const passwordCheck = document.getElementById('password2')
const form = document.getElementById('form')
form.addEventListener('submit', (e)=>{
    e.preventDefault()

    checkPass()
})
function SetError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message
    formControl.className = 'form-control error'

};
function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
 }
function checkPass(){
    const passVal = password.value
    const pass2Val = passwordCheck.value
     
    if(passVal === ''){
         SetError(password, "Password can't be Empty")
    }else{
         setSuccess(password)
    }
     if(pass2Val === ''){
         SetError(passwordCheck, "Password can't be Empty")
    }else if(passVal !== pass2Val){
        SetError(passwordCheck,'Password Does not Match')
    }else{
         setSuccess(passwordCheck)
    }
    
}