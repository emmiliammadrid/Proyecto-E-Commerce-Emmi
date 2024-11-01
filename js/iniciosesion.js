// Seleccionamos los enlaces por su ID
const changePasswordLink = document.getElementById('change-password');
const deleteAccountLink = document.getElementById('delete-account');

// Añadimos un evento de clic al enlace "cambiar contraseña"
changePasswordLink.addEventListener('click', function(event) {
    event.preventDefault(); // Evitamos que el enlace recargue la página
    const nombre = document.getElementById('nombre').value; // Tomamos el nombre del input
    if (nombre) {
        alert(`Hola ${nombre}, vamos a cambiar tu contraseña.`);
    } else {
        alert('Por favor, ingresa tu nombre antes de cambiar la contraseña.');
    }
});

// Añadimos un evento de clic al enlace "eliminar cuenta"
deleteAccountLink.addEventListener('click', function(event) {
    event.preventDefault(); // Evitamos que el enlace recargue la página
    const confirmDelete = confirm('¿Estás seguro de que quieres eliminar tu cuenta?');
    if (confirmDelete) {
        alert('Tu cuenta ha sido eliminada.');
    } else {
        alert('Has cancelado la eliminación de tu cuenta.');
    }
});
// Función para guardar el usuario en el localStorage
function guardarUsuario(usuario) {
    // Guarda el usuario directamente en localStorage
    localStorage.setItem('usuario', JSON.stringify(usuario));
}

// Crear el objeto usuario con la información
let usuario = {
    nombre: document.getElementById('nombre').value,
    email: document.getElementById('email').value,
    contraseña: document.getElementById('contraseña').value,
    fechaInicioSesion: new Date().toLocaleString()  
};

// Guardar el usuario en localStorage
guardarUsuario(usuario);
