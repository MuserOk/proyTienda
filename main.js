
import { products } from './modules/productos.js';
import { addToCart, renderCart, removeFromCart, cart } from './modules/cart.js';


const productsContainer = document.createElement('div');
productsContainer.id = 'products';
document.body.appendChild(productsContainer);

const cartContainer = document.createElement('div');
cartContainer.id = 'cart';
document.body.appendChild(cartContainer);


function renderProducts() {
  productsContainer.innerHTML = '';
  for (const product of products) {
    const div = document.createElement('div');
    div.innerHTML = `
      <p><strong>${product.nombre}</strong> - $${product.precio}</p>
      <button class="add" data-id="${product.id}">Agregar al carrito</button>
    `;
    productsContainer.appendChild(div);
  }
}


productsContainer.addEventListener('click', e => {
  if (e.target.classList.contains('add')) {
    const id = Number(e.target.dataset.id);
    const product = products.find(p => p.id === id);
    if (product) {
      addToCart(product);
      renderCart(cartContainer);
    }
  }
});


cartContainer.addEventListener('click', e => {
  if (e.target.classList.contains('remove')) {
    const id = Number(e.target.dataset.id);
    removeFromCart(id);
    renderCart(cartContainer);
  }
});


renderProducts();
renderCart(cartContainer);

/* 
Hola equipo de desarrollo:
Mi nombre es Kevin R. y necesito que desarrollen un simulador de una 
tienda virtual simple que funcione en el navegador y esté 
hecho completamente en JavaScript moderno.

Quiero un código bien organizado, dividido en módulos (import/export), y que responda a acciones del usuario (eventos).

 Requerimientos del sistema
1.  Catálogo de productos
Debe haber al menos 6 productos (cada uno con: id, nombre, precio, categoría).

Mostrar los productos en una lista o tarjetas dentro del HTML.

Cada producto debe tener un botón para agregarlo al carrito.

Toda la lista de productos debe estar en un archivo llamado products.js.

2. Carrito de compras
Crear un objeto o array que represente el carrito.

Al hacer clic en “Agregar al carrito”, el producto debe añadirse al carrito.

Mostrar el contenido del carrito en pantalla:

Nombre del producto

Precio unitario

Cantidad

Precio total del producto (precio * cantidad)

Permitir quitar productos del carrito con un botón.

Este comportamiento debe estar manejado en el archivo cart.js.

3. Total y descuentos
Calcular y mostrar el total de la compra.

Si el total supera los $1000, aplicar un 10% de descuento.

El cálculo debe estar en un archivo llamado checkout.js.

4. ✅ Finalizar compra
Un botón “Finalizar compra” debe:

Mostrar un resumen final (productos, total con y sin descuento).

Vaciar el carrito automáticamente.

Mostrar un mensaje de agradecimiento.

Todo este flujo también debe manejarse en checkout.js.

5. Uso obligatorio de temas vistos
Módulos (import/export): separar claramente la lógica entre archivos.

Eventos (click): para botones de agregar, quitar y finalizar.(recomendacion usar delegacion de eventos)

Desestructuración: usar al acceder a propiedades de objetos (const { nombre, precio } = producto).

Spread operator(propagacion):

Para clonar productos al agregarlos al carrito.

Para actualizar listas de forma inmutable.

Rest parameters: usarlo en al menos una función, por ejemplo para agregar varios productos al carrito de una vez.

*/

