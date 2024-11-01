const formulario = document.querySelector("#login-form");
// const formulario = document.getElementById("login-form");
const nombreUsuario = "admin";
const passwordUsuario = "123456";

formulario.onsubmit = function loginUsuario(evento) {
  evento.preventDefault();
  const usuario = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  if (nombreUsuario === usuario && passwordUsuario === password) {
    alert("Bienvenido a Euphoria");
    window.location.href = "producto.html";
  } else {
    alert("Usuario y/o contraseña incorrecto");
  }
};