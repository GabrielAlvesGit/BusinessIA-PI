// 1º Captura os elementos relevantes do btnClick Proximo e
let emailNextButton = document.getElementById("email-next");
let senhaInput = document.getElementById("senha-input");
let confirmSenhaInput = document.getElementById("confirm-senha-input");
let submitButton = document.getElementById("submit-button");
let visibilityToggles = document.querySelectorAll(".visibility-toggle");

// 2º Captura os elementos visibilidade da senha em Cadastro  👁️
let btn = document.querySelector("#verSenha");
let btnConfimSenha = document.querySelector("#verConfirmSenha");

/* 3º Captura elementos relacionados ao formulário de cadastro*/
let email = document.querySelector("#email"); /*input*/
/* Troca as parte que tem Label vai ficar emailLabel!!!! */
let labelEmail = document.querySelector("#labelEmail");
let validaEmail = false;

let senha = document.querySelector("#senha");
let labelSenha = document.querySelector("#labelSenha");
let validaSenha = false;

let confirmSenha = document.querySelector("#confirmSenha");
let labelConfirmSenha = document.querySelector("#labelConfirmSenha");
let validaConfirmSenha = false;

/* 3º Msg de erros para cada Input - abaixo*/
let errorConfirmSenha = document.querySelector("#errorConfirmSenha");
let errorEmail = document.querySelector("#errorEmail");
let errorSenha = document.querySelector("#errorSenha");

/* 4º Msg de Error email e Msg de Sucesso email se os campos estiverem vazios ou se o cadastro for bem-sucedido */
let msgError = document.querySelector("#msgError");
let msgSucesso = document.querySelector("#msgSucesso");

// 1º Adiciona um ouvinte de evento ao botão "Próximo" do email
emailNextButton.addEventListener("click", function () {
    senhaInput.style.display = "block";
    confirmSenhaInput.style.display = "block";
    emailNextButton.style.display = "none";
    submitButton.style.display = "block";
});

// 2º Adicionando o btn ao minha class .material-symbols-outlined do icone olho para alternar a visibilidade da senha em Cadastro  👁️ let btn = document.querySelector('#verSenha');

btn.addEventListener("click", () => {
    let inputSenha = document.querySelector("#senha");
    let icon = document.querySelector(".material-symbols-outlined");

    if (inputSenha.getAttribute("type") === "password") {
        inputSenha.setAttribute("type", "text");
        icon.textContent = "visibility_off"; // Alterar o ícone para 'visibility_off'
    } else {
        inputSenha.setAttribute("type", "password");
        icon.textContent = "visibility"; // Alterar o ícone de volta para 'visibility'
    }
});

// 2º Captura o elemento do botão que controla a visibilidade da senha de confirmação let btnConfimSenha = document.querySelector('#verConfirmSenha'); 👁️

btnConfimSenha.addEventListener("click", () => {
    let inputConfimSenha = document.querySelector("#confirmSenha");

    if (inputConfimSenha.getAttribute("type") === "password") {
        inputConfimSenha.setAttribute("type", "text");
        btnConfimSenha.textContent = "visibility_off"; // Alterar o ícone para 'visibility_off'
    } else {
        inputConfimSenha.setAttribute("type", "password");
        btnConfimSenha.textContent = "visibility"; // Alterar o ícone de volta para 'visibility'
    }
});

/* 3º Captura elementos relacionados ao formulário de cadastro
let email = document.querySelector("#email");
let labelEmail = document.querySelector("#labelEmail");
let validaEmail = false;

let senha = document.querySelector("#senha");
let labelSenha = document.querySelector("#labelSenha");
let validaSenha = false;

let confirmSenha = document.querySelector("#confirmSenha");
let labelConfirmSenha = document.querySelector("#labelConfirmSenha");
let validaConfirmSenha = false;

Msg de erros
let errorConfirmSenha = document.querySelector('#errorConfirmSenha')
let errorEmail = document.querySelector('#errorEmail')
let errorSenha = document.querySelector('#errorSenha')
*/

// Este trecho de código adiciona ouvintes de eventos para os campos de entrada de email, senha e confirmação de senha,
// verificando a validade dos campos à medida que o usuário digita e fornecendo feedback em tempo real.
// Ele também atualiza a aparência dos campos e exibe mensagens de erro ou sucesso, dependendo da validação.

/* 3º Email*/
email.addEventListener("keyup", () => {
    if (email.value.length <= 2) {
        labelEmail.setAttribute("style", "color: red");
        email.setAttribute("style", "border-color: red");
        errorEmail.innerHTML =
            'Por favor, insira um endereço de email válido.</br> O endereço de email deve conter o caractere "@example.com". </br>O endereço de email deve conter pelo menos um número. </br> ';
        errorEmail.setAttribute("style", "color: red");
        errorEmail.style.display = "block";
        errorEmail.style.fontSize = "13.3px";
        validaEmail = false;
    } else {
        labelEmail.setAttribute("style", "color: green");
        email.setAttribute("style", "border-color: green");
        errorEmail.innerHTML = "O E-mail é válido.";
        errorEmail.setAttribute("style", "color: green");
        validaEmail = true;
    }
});
/* 3º Senha*/
senha.addEventListener("keyup", () => {
    if (senha.value.length <= 5) {
        labelSenha.setAttribute("style", "color: red");
        senha.setAttribute("style", "border-color: red");
        errorSenha.innerHTML = "A senha é inválida.";
        errorSenha.setAttribute("style", "color: red");
        errorSenha.style.display = "block";
        validaSenha = false;
    } else {
        labelSenha.setAttribute("style", "color: green");
        senha.setAttribute("style", "border-color: green");
        errorSenha.innerHTML = "A senha é válida.";
        errorSenha.setAttribute("style", "color: green");
        validaSenha = true;
    }
});
/* 3º Senha confirm*/
confirmSenha.addEventListener("keyup", () => {
    if (senha.value != confirmSenha.value) {
        labelConfirmSenha.setAttribute("style", "color: red");
        confirmSenha.setAttribute("style", "border-color: red");
        errorConfirmSenha.innerHTML =
            "A confirmação de senha não corresponde à senha digitada.";
        errorConfirmSenha.setAttribute("style", "color: red");
        errorConfirmSenha.style.display = "block";
        validaConfirmSenha = false;
    } else {
        labelConfirmSenha.setAttribute("style", "color: green");
        confirmSenha.setAttribute("style", "border-color: green");
        errorConfirmSenha.innerHTML = "A confirmação de senha é válida.";
        errorConfirmSenha.setAttribute("style", "color: green");
        validaConfirmSenha = true;
    }
});

/* 4º Msg de Error email e Msg de Sucesso email se os campos estiverem vazios ou se o cadastro for bem-sucedido
let msgError = document.querySelector("#msgError");
let msgSucesso = document.querySelector("#msgSucesso");
*/
// Função "cadastrar" é chamada quando o usuário tenta se cadastrar. Ela verifica se o email, senha e confirmação de senha são válidos
// e, se forem, armazena os detalhes do usuário em localStorage, exibe uma mensagem de sucesso e redireciona o usuário para a página de login
// após um atraso de 30 segundos. Se algum campo for inválido, exibe uma mensagem de erro correspondente.
function cadastrar() {
    if (validaEmail && validaSenha && validaConfirmSenha) {
        //Criando um lista no Local Storage
        let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");

        listaUser.push({
            emailCad: email.value,
            senhaCad: senha.value,
        });

        localStorage.setItem("listaUser", JSON.stringify(listaUser));

        msgSucesso.setAttribute("style", "display: block");
        msgSucesso.innerHTML = "<strong>Cadastrando com sucesso!</strong>";
        msgError.setAttribute("style", "display: none");
        msgError.innerHTML = " ";

        /* Diricionar o usuario para o Sign in e add um mini delei de
        setTimeout(() => {
          window.location.href = "../pages/login.html";
          }, 3000);*/

        window.open("../pages/login.html");
    } else {
        msgError.setAttribute("style", "display: block");
        msgError.innerHTML =
            "<strong>Preencha todos os campos corretamente antes de cadastrar</strong>";
        msgSucesso.setAttribute("style", "display: none");
        msgSucesso.innerHTML = " ";
    }
}
