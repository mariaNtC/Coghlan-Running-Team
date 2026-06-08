// =====================================================================
// UTILIDAD: Sanitizar texto para prevenir XSS al usar innerHTML
// =====================================================================
function sanitizar(texto) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(String(texto)));
    return div.innerHTML;
}

// =====================================================================
// CLASES DE PRODUCTOS
// =====================================================================

class ProductoMembresia {
    constructor(id, nombre, precio, imagen, categoria, duracion) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.categoria = categoria;
        this.duracion = duracion;
    }

    renderizar() {
        return `
        <div class="idTiendaContainer justify-content-center">
          <div class="producto ${sanitizar(this.categoria)} idItemContainer">
            <div class="idItemImgContainer">
                <img src="${sanitizar(this.imagen)}" alt="${sanitizar(this.nombre)}" class="img-fluid idImg">
            </div>
            <div class="idTextContainer">
                <h3 class="idItemImgName text-center">
                    <p>${sanitizar(this.nombre)}</p>
                </h3>
                <div class="idItemImgDesc text-center">
                    <p class="idItemImgTextDesc">DURACIÓN: ${sanitizar(this.duracion)}</p>
                </div>
                <div class="idItemImgPrecio text-center">
                    <p>$${sanitizar(this.precio)}</p>
                </div>
                <div class="contenedorBotonesTienda">
                    <button class="botonComprar text-center justify-content-center"
                        data-id="${sanitizar(this.id)}"
                        data-nombre="${sanitizar(this.nombre)}"
                        data-precio="${sanitizar(this.precio)}"
                        data-imagen="${sanitizar(this.imagen)}"
                        data-categoria="${sanitizar(this.categoria)}">
                        UNITE
                    </button>
                    <div class="botonBorrarItem text-center">
                        <button class="botonQuitarId"
                            data-id="${sanitizar(this.id)}"
                            data-nombre="${sanitizar(this.nombre)}">
                            <img src="../images/tachoTienda.webp" class="img-fluid tachoTienda" alt="Quitar">
                        </button>
                    </div>
                </div>
            </div>
          </div>
        </div>`;
    }
}

class ProductoIndumentaria {
    constructor(id, nombre, precio, imagen, categoria, talle) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.categoria = categoria;
        this.talle = talle;
        this.talleSeleccionado = "";
    }

    renderizarIndumentaria() {
        return `
        <div class="indumentariaTiendaContainer">
            <div class="indumentariaItemContainer producto ${sanitizar(this.categoria)}">
                <div class="indumentariaItemImgContainer">
                    <img src="${sanitizar(this.imagen)}" class="img-fluid indumentariaImg" alt="${sanitizar(this.nombre)}">
                </div>
                <div class="indumentariaTextContainer">
                    <div class="indumentariaItemImgName text-center">
                        <p>${sanitizar(this.nombre)}</p>
                    </div>
                    <div class="indumentariaItemImgDesc text-center">
                        <p class="indumentariaItemImgTextDesc">Elige el talle:</p>
                    </div>
                    <form class="tallesContenedorTienda">
                        <input class="inputTalles" type="radio" id="S-${sanitizar(this.id)}" name="talles-${sanitizar(this.id)}">
                        <label class="labelInputTalles" for="S-${sanitizar(this.id)}">S</label><br>
                        <input class="inputTalles" type="radio" id="M-${sanitizar(this.id)}" name="talles-${sanitizar(this.id)}">
                        <label class="labelInputTalles" for="M-${sanitizar(this.id)}">M</label><br>
                        <input class="inputTalles" type="radio" id="L-${sanitizar(this.id)}" name="talles-${sanitizar(this.id)}">
                        <label class="labelInputTalles" for="L-${sanitizar(this.id)}">L</label><br>
                        <input class="inputTalles" type="radio" id="XL-${sanitizar(this.id)}" name="talles-${sanitizar(this.id)}">
                        <label class="labelInputTalles" for="XL-${sanitizar(this.id)}">XL</label><br>
                    </form>
                    <div class="indumentariaItemImgPrecio text-center">
                        <p>$${sanitizar(this.precio)}</p>
                    </div>
                </div>
                <div class="contenedorBotonesTienda">
                    <button class="botonComprar text-center justify-content-center"
                        data-id="${sanitizar(this.id)}"
                        data-nombre="${sanitizar(this.nombre)}"
                        data-precio="${sanitizar(this.precio)}"
                        data-imagen="${sanitizar(this.imagen)}"
                        data-categoria="${sanitizar(this.categoria)}"
                        data-talle="${sanitizar(this.talle)}">
                        COMPRAR
                    </button>
                    <button class="botonQuitarId"
                        data-id="${sanitizar(this.id)}"
                        data-nombre="${sanitizar(this.nombre)}">
                        <img src="../images/tachoTienda.webp" class="img-fluid tachoTienda" alt="Quitar">
                    </button>
                </div>
            </div>
        </div>`;
    }
}

class ProductoArticulos {
    constructor(id, nombre, precio, imagen, categoria, descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.categoria = categoria;
        this.descripcion = descripcion;
    }

    renderizarArticulos() {
        return `
        <div class="articuloTiendaContainer">
            <div class="articuloItemContainer producto ${sanitizar(this.categoria)}">
                <div class="articuloItemImgContainer">
                    <img src="${sanitizar(this.imagen)}" class="img-fluid articuloImg" alt="${sanitizar(this.nombre)}">
                </div>
                <div class="articuloTextContainer">
                    <div class="articuloItemImgName text-center">
                        <p>${sanitizar(this.nombre)}</p>
                    </div>
                    <div class="articuloItemImgDesc text-center">
                        <p class="articuloItemImgTextDesc">${sanitizar(this.descripcion)}</p>
                    </div>
                    <div class="articuloItemImgPrecio text-center">
                        <p>$${sanitizar(this.precio)}</p>
                    </div>
                </div>
                <div class="contenedorBotonesTienda">
                    <button class="botonComprar text-center justify-content-center"
                        data-id="${sanitizar(this.id)}"
                        data-nombre="${sanitizar(this.nombre)}"
                        data-precio="${sanitizar(this.precio)}"
                        data-imagen="${sanitizar(this.imagen)}"
                        data-categoria="${sanitizar(this.categoria)}"
                        data-descripcion="${sanitizar(this.descripcion)}">
                        COMPRAR
                    </button>
                    <button class="botonQuitarId"
                        data-id="${sanitizar(this.id)}"
                        data-nombre="${sanitizar(this.nombre)}">
                        <img src="../images/tachoTienda.webp" class="img-fluid tachoTienda" alt="Quitar">
                    </button>
                </div>
            </div>
        </div>`;
    }
}

// =====================================================================
// CARGA DE PRODUCTOS DESDE JSON (fetch)
// =====================================================================

let productosMembresias = [];
let productosIndumentaria = [];
let productosArticulos = [];

async function cargarProductosDesdeJSON() {
    try {
        const response = await fetch('../js/productos.json');
        if (!response.ok) throw new Error('No se pudo cargar productos.json');
        const datos = await response.json();

        datos.forEach(p => {
            if (p.categoria === 'membresia') {
                productosMembresias.push(new ProductoMembresia(p.id, p.nombre, p.precio, p.imagen, p.categoria, p.duracion));
            } else if (p.categoria === 'indumentaria') {
                productosIndumentaria.push(new ProductoIndumentaria(p.id, p.nombre, p.precio, p.imagen, p.categoria, p.talle || ''));
            } else if (p.categoria === 'articulos') {
                productosArticulos.push(new ProductoArticulos(p.id, p.nombre, p.precio, p.imagen, p.categoria, p.descripcion || ''));
            }
        });

        renderizarProductosMembresias();
        renderizarProductosIndumentaria();
        renderizarProductosArticulos();

    } catch (error) {
        // Fallback: instanciar productos hardcodeados si falla el fetch
        productosMembresias = [
            new ProductoMembresia(0, "MEMBRESÍA DE 1 MES",   25000,  "../images/indexImg/shop/logoW2tienda.png", "membresia", "1 MES"),
            new ProductoMembresia(1, "MEMBRESÍA DE 6 MESES", 144000, "../images/indexImg/shop/logoW2tienda.png", "membresia", "6 MESES"),
            new ProductoMembresia(2, "MEMBRESÍA DE 12 MESES",264000, "../images/indexImg/shop/logoW2tienda.png", "membresia", "12 MESES"),
        ];
        productosIndumentaria = [
            new ProductoIndumentaria(3, "Remera Naranja CRT- Tribal Heart",  15000, "../images/indexImg/shop/shop3.jpg", "indumentaria", ""),
            new ProductoIndumentaria(4, "Campera Naranja CRT- Tribal Heart", 40000, "../images/indexImg/shop/shop2.jpg", "indumentaria", ""),
            new ProductoIndumentaria(5, "Remera Negra CRT- Tribal Heart",    15000, "../images/indexImg/shop/shop1.jpg", "indumentaria", ""),
        ];
        productosArticulos = [
            new ProductoArticulos(6, "Botella CRT", 4000, "../images/indexImg/shop/articuloBotellaTienda.png", "articulos", "Botella de plástico endurecido de 500cc."),
        ];

        renderizarProductosMembresias();
        renderizarProductosIndumentaria();
        renderizarProductosArticulos();
    }

    // Registrar eventos de compra luego de renderizar los productos
    agregarEvento(eventoAgregarAlCarrito, 'botonComprar', 'click');
    agregarEvento(eliminarProductoDelCarrito, 'botonQuitarId', 'click');
}

// =====================================================================
// RENDERIZADO DE PRODUCTOS EN EL DOM
// =====================================================================

function renderizarProductosMembresias() {
    const contenedor = document.getElementById('productosMembresias');
    if (!contenedor) return;
    productosMembresias.forEach(p => { contenedor.innerHTML += p.renderizar(); });
}

function renderizarProductosIndumentaria() {
    const contenedor = document.getElementById('productosIndumentaria');
    if (!contenedor) return;
    productosIndumentaria.forEach(p => { contenedor.innerHTML += p.renderizarIndumentaria(); });
}

function renderizarProductosArticulos() {
    const contenedor = document.getElementById('productosArticulos');
    if (!contenedor) return;
    productosArticulos.forEach(p => { contenedor.innerHTML += p.renderizarArticulos(); });
}

// =====================================================================
// CARRITO
// =====================================================================

let carrito = [];

function renderizarPrecioTotalDOM(total) {
    const el = document.getElementById('costoFinalDOM');
    if (el) el.innerHTML = `<p>$${total}</p>`;
}
function renderizarPrecioTotalModal(total) {
    const el = document.getElementById('costoFinalModal');
    if (el) el.innerHTML = `<p>$${total}</p>`;
}
function renderizarProductosDOM(length) {
    const el = document.getElementById('productosFinalDOM');
    if (el) el.innerHTML = `<p>${length}</p>`;
}
function renderizarMembresiaDOM(nombre) {
    const el = document.getElementById('membresiaFinalDOM');
    if (!el) return;
    el.innerHTML = nombre ? `<p>${sanitizar(nombre)}</p>` : `<p>Elige tu membresía</p>`;
}
function renderizarCantidadDeProductosDOM(cantidad) {
    const el = document.getElementById('cantidadFinalDOM');
    if (el) el.innerHTML = `<p>${cantidad}</p>`;
}

function agruparProductos(carrito) {
    const agrupados = [];
    carrito.forEach(producto => {
        const encontrado = agrupados.find(p =>
            p.id === producto.id &&
            p.nombre === producto.nombre &&
            p.imagen === producto.imagen &&
            p.precio === producto.precio &&
            p.talle === producto.talle &&
            p.categoria === producto.categoria
        );
        if (encontrado) {
            encontrado.cantidad += producto.cantidad;
        } else {
            agrupados.push({ ...producto });
        }
    });
    return agrupados;
}

function mostrarCarritoDOM() {
    const carritoDOM = document.getElementById("carrito");
    if (!carritoDOM) return;
    carritoDOM.innerHTML = "";

    const productosAgrupados = agruparProductos(carrito);
    let cantidadProductos = 0;

    productosAgrupados.forEach(producto => {
        carritoDOM.innerHTML += `
            <div class="contenedorProductosCarrito">
                <div class="contenedorImgCarrito">
                    <img class="carritoModalImg" src="${sanitizar(producto.imagen)}" alt="${sanitizar(producto.nombre)}">
                </div>
                <div class="contenedorDatosProductoCarrito">
                    <h3 class="h3ProductosCarrito">${sanitizar(producto.nombre)}</h3>
                    ${producto.talle ? `<p class="textoH3PruductosCarrito">Talle: <strong>${sanitizar(producto.talle)}</strong></p>` : ''}
                    <div class="contenedorCantidadProdcutosCarrito">
                        <button class="botonQuitarDelCarrito"
                            data-id="${sanitizar(producto.id)}"
                            data-nombre="${sanitizar(producto.nombre)}"
                            data-precio="${sanitizar(producto.precio)}"
                            data-imagen="${sanitizar(producto.imagen)}"
                            data-categoria="${sanitizar(producto.categoria)}"
                            data-talle="${sanitizar(producto.talle || '')}">-</button>
                        <p class="textoH3PruductosCarrito">Cantidad: <strong>${producto.cantidad}</strong></p>
                        <button class="botonAumentarCantidad text-center justify-content-center"
                            data-id="${sanitizar(producto.id)}"
                            data-nombre="${sanitizar(producto.nombre)}"
                            data-precio="${sanitizar(producto.precio)}"
                            data-imagen="${sanitizar(producto.imagen)}"
                            data-categoria="${sanitizar(producto.categoria)}"
                            data-talle="${sanitizar(producto.talle || '')}">+</button>
                    </div>
                    <p class="textoH3PruductosCarritoPrecio">Precio unitario: <strong>$${producto.precio}</strong></p>
                    <p class="textoH3PruductosCarritoTotal">Total: <strong>$${producto.precio * producto.cantidad}</strong></p>
                </div>
            </div>`;
        cantidadProductos += producto.cantidad;
    });

    renderizarCantidadDeProductosDOM(cantidadProductos);

    const total = carrito.reduce((acc, p) => acc + (p.precio * p.cantidad), 0);
    renderizarPrecioTotalDOM(total);
    renderizarPrecioTotalModal(total);
    renderizarProductosDOM(carrito.length);

    if (carrito.length === 0) {
        const modalCarrito = document.getElementById('modalCarrito');
        if (modalCarrito) modalCarrito.style.display = 'none';
        mostrarToastCarritoVacio();
    }

    agregarEventoAumentarCantidad();
    agregarEventoEliminarProducto();
}

function agregarEventoAumentarCantidad() {
    document.querySelectorAll('.botonAumentarCantidad').forEach(boton => {
        boton.addEventListener('click', function(e) {
            const idProducto = e.currentTarget.getAttribute('data-id');
            const talle = e.currentTarget.getAttribute('data-talle');

            const indice = carrito.findIndex(p =>
                p.id === idProducto && (p.talle === talle || p.talle === undefined)
            );

            if (indice !== -1) {
                if (carrito[indice].categoria === 'membresia' && carrito[indice].cantidad >= 1) {
                    mostrarToastMembresiaExistente();
                    return;
                }
                carrito[indice].cantidad++;
                guardarCarritoEnLocalStorage();
                mostrarCarritoDOM();
                mostrarToastAñadir();
            }
        });
    });
}

function agregarEventoEliminarProducto() {
    document.querySelectorAll('.botonQuitarDelCarrito').forEach(boton => {
        boton.addEventListener('click', function(e) {
            const idProducto = e.currentTarget.getAttribute('data-id');
            const talle = e.currentTarget.getAttribute('data-talle');

            const indice = carrito.findIndex(p =>
                p.id === idProducto && (p.talle === talle || p.talle === undefined)
            );

            if (indice !== -1) {
                carrito[indice].cantidad--;
                if (carrito[indice].cantidad === 0) {
                    if (carrito[indice].categoria === 'membresia') {
                        localStorage.removeItem('nombreMembresia');
                        renderizarMembresiaDOM('');
                    }
                    carrito.splice(indice, 1);
                }
                guardarCarritoEnLocalStorage();
                mostrarCarritoDOM();
                mostrarToastEliminar();
            }
        });
    });
}

function agregarEvento(evento, clase, eventoString) {
    document.getElementsByClassName(clase) &&
    Array.from(document.getElementsByClassName(clase)).forEach(el => {
        el.addEventListener(eventoString, evento);
    });
}

function inicializarCarritoDesdeLocalStorage() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        try {
            carrito = JSON.parse(carritoGuardado);
            mostrarCarritoDOM();
        } catch(e) {
            localStorage.removeItem('carrito');
        }
    }
}

function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// =====================================================================
// DOMContentLoaded — Inicialización principal
// =====================================================================

window.addEventListener('DOMContentLoaded', () => {

    inicializarCarritoDesdeLocalStorage();

    const nombreMembresiaGuardada = localStorage.getItem('nombreMembresia');
    renderizarMembresiaDOM(nombreMembresiaGuardada);

    // Cargar productos desde JSON y registrar eventos de compra
    cargarProductosDesdeJSON();

    // Modal: abrir y cerrar
    const abrirCarrito    = document.getElementById('abrirCarritoTOP');
    const iconoCarrito    = document.getElementById('iconoCarrito');
    const modalCarrito    = document.getElementById('modalCarrito');
    const botonCerrarModal = document.getElementById('botonCerrarModal');
    const vaciarCarritoBtnTOP = document.getElementById('vaciarCarritoTOP');
    const vaciarCarritoBtn    = document.getElementById('vaciarCarrito');
    const pagarCarritoBtn     = document.getElementById('pagarCarrito');

    if (abrirCarrito) {
        abrirCarrito.addEventListener('click', () => {
            if (carrito.length <= 0) { mostrarToastCarritoVacio(); return; }
            modalCarrito.style.display = 'block';
        });
    }
    if (iconoCarrito) {
        iconoCarrito.addEventListener('click', () => {
            if (carrito.length <= 0) { mostrarToastCarritoVacio(); return; }
            modalCarrito.style.display = 'block';
        });
    }
    if (botonCerrarModal) {
        botonCerrarModal.addEventListener('click', () => { modalCarrito.style.display = 'none'; });
    }
    window.addEventListener('click', (e) => {
        if (e.target === modalCarrito) modalCarrito.style.display = 'none';
    });
    if (vaciarCarritoBtnTOP) {
        vaciarCarritoBtnTOP.addEventListener('click', () => {
            if (carrito.length <= 0) { mostrarToastCarritoVacio(); return; }
            swalVaciarCarrito();
        });
    }
    if (vaciarCarritoBtn) {
        vaciarCarritoBtn.addEventListener('click', () => { swalVaciarCarrito(); });
    }
    if (pagarCarritoBtn) {
        pagarCarritoBtn.addEventListener('click', () => { swalPagarCarrito(); });
    }
});

// =====================================================================
// EVENTO AGREGAR AL CARRITO
// =====================================================================

function eventoAgregarAlCarrito(e) {
    const id         = e.currentTarget.getAttribute('data-id');
    const nombre     = e.currentTarget.getAttribute('data-nombre');
    const precio     = parseFloat(e.currentTarget.getAttribute('data-precio'));
    const categoria  = e.currentTarget.getAttribute('data-categoria');
    const imagen     = e.currentTarget.getAttribute('data-imagen');
    const descripcion = e.currentTarget.getAttribute('data-descripcion');

    const existeMembresiaEnCarrito = carrito.some(p => p.categoria === 'membresia');

    if (categoria === 'indumentaria') {
        const radioChecked = document.querySelectorAll(`input[name="talles-${id}"]:checked`);
        if (radioChecked.length === 0) { mostrarToastElijeTalle(); return; }
        const talleSeleccionado = radioChecked[0].id.split('-')[0];

        // FIX: corregido typo "iamgen" -> "imagen"
        const productoExistente = carrito.find(p =>
            p.nombre === nombre &&
            p.precio === precio &&
            p.categoria === categoria &&
            p.imagen === imagen &&
            p.talle === talleSeleccionado
        );

        if (productoExistente) {
            productoExistente.cantidad++;
        } else {
            carrito.push({ id, nombre, precio, cantidad: 1, imagen, categoria, talle: talleSeleccionado });
        }

    } else if (categoria === 'membresia' && existeMembresiaEnCarrito) {
        mostrarToastMembresiaExistente();
        return;

    } else if (categoria === 'membresia') {
        carrito.push({ id, nombre, precio, imagen, cantidad: 1, categoria });
        renderizarMembresiaDOM(nombre);
        localStorage.setItem('nombreMembresia', nombre);

    } else if (categoria === 'articulos') {
        const artExistente = carrito.find(p => p.id === id && p.categoria === 'articulos');
        if (artExistente) {
            artExistente.cantidad++;
        } else {
            carrito.push({ id, nombre, precio, imagen, cantidad: 1, descripcion, categoria });
        }
    }

    mostrarEstelaVerde();
    guardarCarritoEnLocalStorage();
    mostrarCarritoDOM();
    mostrarToastAñadir();
}

// =====================================================================
// EVENTO ELIMINAR PRODUCTO (botón tacho de la tienda)
// =====================================================================

function eliminarProductoDelCarrito(e) {
    const idProducto = e.currentTarget.getAttribute('data-id');
    const radioTalles = document.querySelectorAll(`input[name="talles-${idProducto}"]:checked`);
    const talleSeleccionado = radioTalles.length > 0 ? radioTalles[0].id.split('-')[0] : null;

    const indice = carrito.findIndex(p =>
        p.id === idProducto &&
        (p.talle === talleSeleccionado || (p.talle === undefined && talleSeleccionado === null))
    );

    if (indice !== -1) {
        carrito[indice].cantidad--;
        if (carrito[indice].cantidad === 0) {
            carrito.splice(indice, 1);
            localStorage.removeItem('nombreMembresia');
            renderizarMembresiaDOM('');
            mostrarEstelaRoja();
            mostrarToastEliminar();
        }
        guardarCarritoEnLocalStorage();
        mostrarCarritoDOM();
    } else {
        mostrarToastProdcutoInexistente();
    }
}

// =====================================================================
// VACIAR / PAGAR CARRITO
// =====================================================================

function vaciarCarrito() {
    localStorage.clear();
    carrito = [];
    renderizarMembresiaDOM('');
    mostrarEstelaRoja();
    mostrarCarritoDOM();
}

function pagarCarrito() {
    localStorage.clear();
    carrito = [];
    renderizarMembresiaDOM('');
    mostrarEstelaVerde();
    mostrarCarritoDOM();
}

// =====================================================================
// TOASTS (Toastify)
// =====================================================================

function mostrarToastCarritoVaciado() {
    Toastify({ text: "Se ha vaciado el carrito", close: true, position: "left", gravity: "bottom", duration: 2000,
        style: { background: "linear-gradient(to right,#e65b5b, #ec8b8b)" } }).showToast();
}
function mostrarToastCarritoVacio() {
    Toastify({ text: "No hay productos en el carrito", close: true, position: "left", gravity: "bottom", duration: 1500,
        style: { background: "linear-gradient(to right, #e6ba5b, #ffd884)" } }).showToast();
}
function mostrarToastAñadir() {
    Toastify({ text: "Producto Agregado", close: true, position: "left", gravity: "bottom", duration: 900,
        style: { background: "linear-gradient(to right, #60e65b, #8af786)" } }).showToast();
}
function mostrarToastEliminar() {
    Toastify({ text: "Producto Eliminado", close: true, position: "left", gravity: "bottom", duration: 900,
        style: { background: "linear-gradient(to right, #e65b5b, #ec8b8b)" } }).showToast();
}
function mostrarToastProdcutoInexistente() {
    Toastify({ text: "No existe el producto en el carrito", close: true, position: "left", gravity: "bottom", duration: 1500,
        style: { background: "linear-gradient(to right, #e6ba5b, #ffd884)" } }).showToast();
}
function mostrarToastMembresiaExistente() {
    Toastify({ text: "Ya tienes una membresía en el carrito, elimina la actual para agregar otra.", close: true, position: "left", gravity: "bottom", duration: 1500,
        style: { background: "linear-gradient(to right, #e6ba5b, #ffd884)" } }).showToast();
}
function mostrarToastElijeTalle() {
    Toastify({ text: "Debes seleccionar el talle", close: true, position: "left", gravity: "bottom", duration: 1500,
        style: { background: "linear-gradient(to right, #e6ba5b, #ffd884)" } }).showToast();
}
function mostrarToastCompraConcretada() {
    Toastify({ text: "Que lo disfrutes! :)", close: true, position: "left", gravity: "bottom", duration: 1500,
        style: { background: "linear-gradient(to right, #00b09b, #96c93d)" } }).showToast();
}

// =====================================================================
// SWEET ALERTS
// =====================================================================

function swalVaciarCarrito() {
    Swal.fire({
        title: "ATENCIÓN!", text: "¿Deseas vaciar el carrito?", icon: "warning",
        showCancelButton: true, background: "#fff5ee", color: "#e97100",
        confirmButtonColor: "#e97100", cancelButtonColor: "#d33", confirmButtonText: "Confirmar"
    }).then(result => {
        if (result.isConfirmed) {
            vaciarCarrito();
            mostrarToastCarritoVaciado();
            Swal.fire({ text: "El carrito ha sido vaciado.", color: "#e97100", confirmButtonColor: "#e97100", icon: "success" });
        }
    });
}

function swalPagarCarrito() {
    Swal.fire({
        title: "ATENCIÓN!", text: "¿Deseas efectuar el pago?", icon: "warning",
        showCancelButton: true, color: "#e97100",
        confirmButtonColor: "#e97100", cancelButtonColor: "#d33", confirmButtonText: "Pagar"
    }).then(result => {
        if (result.isConfirmed) {
            pagarCarrito();
            mostrarToastCompraConcretada();
            Swal.fire({ text: "Gracias por tu compra!", color: "#e97100", confirmButtonColor: "#e97100", icon: "success" });
        }
    });
}

// =====================================================================
// ANIMACIÓN ESTELA CARRITO
// =====================================================================

function mostrarEstelaVerde() {
    const icono = document.getElementById('iconoCarrito');
    if (!icono) return;
    icono.classList.add('estela-verde');
    setTimeout(() => icono.classList.remove('estela-verde'), 300);
}

function mostrarEstelaRoja() {
    const icono = document.getElementById('iconoCarrito');
    if (!icono) return;
    icono.classList.add('estela-roja');
    setTimeout(() => icono.classList.remove('estela-roja'), 300);
}
