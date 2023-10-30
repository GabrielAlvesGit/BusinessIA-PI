document.addEventListener("DOMContentLoaded", function () {
    // Obtém os botões de login e cadastro
    let loginButton = document.getElementById("login-btn");
    let signupButton = document.querySelector(".signup-button");

    // Adiciona um ouvinte de evento de clique ao botão de login
    loginButton.addEventListener("click", function () {
        // Redireciona o usuário para a página de login
        window.location.href = "../pages/index.html";
    });

    // Adiciona um ouvinte de evento de clique ao botão de cadastro
    signupButton.addEventListener("click", function () {
        // Redireciona o usuário para a página de cadastro
        window.location.href = "signup.html";
    });

    if (localStorage.getItem("token") == null) {
        alert("Você precisa estar logado para acessar essa página");
        window.location.href = "../pages/login.html";
    }

    let userLogado = JSON.parse(localStorage.getItem("userLogado"));

    let logado = document.querySelector("#logado");
    logado.innerHTML = "olá $(userLogado.nome)";

    function voltar() {
        window.location.href = "../pages/business-ia-login.html";
    }
});
