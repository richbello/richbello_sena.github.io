document.getElementById('productoForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const descripcion = document.getElementById('descripcion').value;
    const imagen = document.getElementById('imagen').value;

    // Crear el objeto de datos
    const datosProducto = {
        nombre: nombre,
        precio: precio,
        descripcion: descripcion,
        imagen: imagen // Este campo es opcional
    };

    // Hacer la solicitud POST con Axios
    axios.post('http://localhost:8000/api/productos', datosProducto)
        .then(response => {
            alert('Producto creado exitosamente');
            console.log(response.data);
        })
        .catch(error => {
            console.error('Hubo un error al crear el producto:', error);
            alert('Error al crear el producto');
        });
});
