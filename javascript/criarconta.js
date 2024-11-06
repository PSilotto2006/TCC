document
  .getElementById("createAccountForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Lógica de validação do formulário aqui
    window.location.href = "login.html";
  });
document
  .getElementById("createAccountForm")
  .addEventListener("submit", function (event) {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmar-senha").value;

    if (password !== confirmPassword) {
      event.preventDefault(); // Impede o envio do formulário
      alert("Passwords do not match! Please, try again.");
    }
  });
