import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.get('http://localhost:8000/api/productos')
  .then(response => {
    const productos = response.data;
    const container = document.getElementById('productos-container');
    container.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos productos

    productos.forEach(producto => {
      const productoHTML = `
        <div class="col-md-4">
          <div class="card product-card">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text">$${producto.precio}</p>
              <a href="#" class="btn btn-primary">Ver Detalles</a>
            </div>
          </div>
        </div>
      `;
      container.innerHTML += productoHTML;
    });
  })
  .catch(error => {
    console.error('Error al obtener los productos:', error);
  });

