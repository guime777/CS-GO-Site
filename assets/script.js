document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o recarregamento da página

    const username = document.getElementById("username").value.trim();

    if (!username) {
        alert("Por favor, insira seu nome de usuário.");
        return;
    }

    // Exibe uma mensagem de boas-vindas
    alert(`Bem-vindo, ${username}!`);
});
