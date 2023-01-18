document.addEventListener('DOMContentLoaded', () => {
    pintarProductos();

    if (localStorage.getItem('carrito')) {
        carrito = obtenerCarritoStorage();
        console.log(carrito)
        actualizarCarrito(carrito);
    }
});