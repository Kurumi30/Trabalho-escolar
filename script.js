//const { validate } = require('cpf-check')

let button = document.getElementById('button');
button.addEventListener('click', function click() {
    button.style.background = 'purple'
})

function redirect() {
	let cpf = document.getElementsByClassName('pass-input');

    let username = document.getElementsByClassName('user-input');
    let password = document.getElementsByClassName('pass-input');

	if(username[0].value) {
		if(password[0].value == "1234567890" /*|| validate(cpf) == true*/) {
			alert("Seja bem vindo!");
			confirm("Esse é o meu projeto! Espero que goste, professor(a) " + username[0].value + "!");
			window.location.href = "./HTML/index2.html";
		} else {
			alert("Usuário ou senha incorretos, por favor tente novamente!");
		}
	}

}
redirect()
