export const products = [
  {
    id: 1,
    nombre: 'Salted Caramel Brownie',
    precio: 5.5,
    categoria: 'Dulce',
  },
  {
    id: 2,
    nombre: 'Sandwiches calientes',
    precio: 4.0,
    categoria: 'Salado',
  },
  {
    id: 3,
    nombre: 'Lemon Pie',
    precio: 5.0,
    categoria: 'Dulce',
  },
  {
    id: 4,
    nombre: 'Red Velvet Cake',
    precio: 4.5,
    categoria: 'Tecnología',
  },
  {
    id: 5,
    nombre: 'Classic Tiramisu',
    precio: 5.5,
    categoria: 'Dulce',
  },
  {
    id: 6,
    nombre: 'Waffle with Berries',
    precio: 6.5,
    categoria: 'Dulce',
  },
];

export function renderProducts(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  products.forEach(({ id, nombre, precio, categoria }) => {
    const card = document.createElement('div');
    card.className =
      'bg-white shadow-md rounded-lg p-4 flex flex-col gap-2 w-full sm:w-64';

    card.innerHTML = `
      <h3 class="text-lg font-semibold text-gray-800">${nombre}</h3>
      <p class="text-sm text-gray-500">Categoría: ${categoria}</p>
      <p class="text-md font-medium text-gray-700">Precio: $${precio}</p>
      <button
        class="btn-add mt-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
        data-id="${id}"
      >
        Agregar al carrito
      </button>
    `;

    container.appendChild(card);
  });
}
