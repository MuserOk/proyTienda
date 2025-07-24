// Carrito de compras
export let cart = [];

// Agregar productos al carrito
export function addToCart(...items) {
  for (const item of items) {
    const exist = cart.find(p => p.id === item.id);
    if (exist) {
      exist.cantidad += 1;
    } else {
      cart = [...cart, { ...item, cantidad: 1 }];
    }
  }
}

// Quitar producto del carrito por id
export function removeFromCart(id) {
  cart = cart.filter(producto => producto.id !== id);
}

// Mostrar el contenido del carrito en pantalla
export function renderCart(container) {
  container.innerHTML = "";
  for (const { nombre, precio, cantidad, id } of cart) {
    const total = precio * cantidad;
    const div = document.createElement("div");
    div.innerHTML = `
      <p><strong>${nombre}</strong> - $${precio} x ${cantidad} = $${total}</p>
      <button class="remove" data-id="${id}">Quitar</button>
    `;
    container.appendChild(div);
  }
}
