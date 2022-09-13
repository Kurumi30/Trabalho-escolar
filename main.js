let button = document.getElementById('button');
button.addEventListener('click', function click() {
    button.style.background = 'purple'
})

function redirect() {

    let username = document.getElementsByClassName('user-input');
    let password = document.getElementsByClassName('pass-input');

    if(username[0].value == "Rita" && password[0].value == "1234567890") {
        alert("Login realizado com sucesso!");
        window.location.href = "./HTML/index2.html";
    } else {
        alert("Usuário ou senha incorretos");
    }
}

function CPF() {
    
}