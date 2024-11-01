

function crearProducto(prod) {
    //creamos el contenedor de la tarjeta
    let tarjeta = document.createElement("div");
    //le damos la clase card
    tarjeta.classList.add("card");
    //creamos la imagen
    let imagen = document.createElement("img");
    //le damos la clase card-img
    imagen.classList.add("card-img");
    //le damos la ruta de la imagen
    imagen.src = prod.imagen;
    //le damos el alt a la imagen
    imagen.alt = "Imagen de Pokemon";
    //creamos el numero de pokemon
    let numero = document.createElement("p");
    //le damos la clase card-number
    numero.classList.add("card-number");
    //le damos el contenido al parrafo de numero
    numero.innerText = prod.numero;
    //creamos el nombre del pokemon
    let nombre = document.createElement("h2");
    //le damos la clase card-title
    nombre.classList.add("card-title");
    //le damos el contenido al h2 de nombre
    nombre.innerText = prod.nombre;
    //creamos el tipo de pokemon
    const descripcion = document.createElement("p");
    descripcion.innerText = prod.descripcion;
    descripcion.classList.add("card-texto");
    //agregamos los elementos al contenedor de la tarjeta en orden
    tarjeta.appendChild(imagen);
   // tarjeta.appendChild(numero);
    tarjeta.appendChild(nombre);
    //tarjeta.appendChild(descripcion);
    //seleccionamos el contenedor principal y agregamos la tarjeta


    var a = document.createElement('a');
    var linkText = document.createTextNode(prod.nombre);
    a.appendChild(tarjeta);
    a.title = prod.nombre;
      a.href = "detalle.html?id="+prod.numero;


      
    let galeria = document.querySelector(".main-container");
    galeria.appendChild(a);
  }
  for (let i = 0; i < productos.length; i++) {
    crearProducto(productos[i]);
  }