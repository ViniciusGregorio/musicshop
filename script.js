
const form = document.getElementById("formContato");
const msg = document.getElementById("msg");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  msg.textContent = "Mensagem enviada com sucesso!";
  msg.style.color = "green";
  form.reset();
});
