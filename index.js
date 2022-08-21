document.getElementById('btn').addEventListener('click', function(){
    const inputEmail =document.getElementById('input-email')
    const inputEmailText =inputEmail.value
    console.log(inputEmailText);
    const inputPassword =document.getElementById('input-password')
    const inputPasswordText =inputPassword.value
    console.log(inputPasswordText);
    if (inputEmailText==="gmail.com"  && inputPasswordText==="12345") {
        alert("Success!")
        window.location='./bank.html'
    }
    else{
        alert("Error!")
        inputEmail.value= " " ;
        inputPassword.value=" ";
    }
})

