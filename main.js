import { products } from './modules/productos.js';
import { addToCart, renderCart, removeFromCart, cart } from './modules/cart.js';

// Crear contenedores en el DOM
const productsContainer = document.createElement('div');
productsContainer.id = 'products';
document.body.appendChild(productsContainer);

const cartContainer = document.createElement('div');
cartContainer.id = 'cart';
document.body.appendChild(cartContainer);

// Mostrar productos
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

// Manejar clicks en "Agregar al carrito"
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

// Manejar clicks en "Quitar" del carrito
cartContainer.addEventListener('click', e => {
  if (e.target.classList.contains('remove')) {
    const id = Number(e.target.dataset.id);
    removeFromCart(id);
    renderCart(cartContainer);
  }
});

// Render inicial
renderProducts();
renderCart(cartContainer);
