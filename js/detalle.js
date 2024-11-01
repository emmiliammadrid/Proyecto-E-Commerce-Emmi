// Obtener el parámetro 'id' de la URL actual
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

for (let i = 0; i < productos.length; i++) {
    if (productos[i].numero == id){
        document.getElementById("nombre").innerHTML=productos[i].nombre
        document.getElementById("foto").src=productos[i].imagen
        document.getElementById("desc").innerHTML=productos[i].descripcion
    }
  }