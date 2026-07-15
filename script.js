/* ===================================
   MOTORS AYSA FUTURE EDITION
=================================== */

/* ===================================
   PARTICLES JS
=================================== */

particlesJS("particles-js", {

    particles: {

        number: {

            value: 80,

            density: {

                enable: true,

                value_area: 800

            }

        },

        color: {

            value: "#00e5ff"

        },

        shape: {

            type: "circle"

        },

        opacity: {

            value: 0.4

        },

        size: {

            value: 3

        },

        line_linked: {

            enable: true,

            distance: 150,

            color: "#00e5ff",

            opacity: 0.3,

            width: 1

        },

        move: {

            enable: true,

            speed: 2

        }

    }

});

/* ===================================
   HEADER SCROLL
=================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        header.style.background =
            "rgba(5,8,22,.90)";

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.3)";

    } else {

        header.style.background =
            "rgba(5,8,22,.55)";

        header.style.boxShadow =
            "none";

    }

});

/* ===================================
   CONTADORES ANIMADOS
=================================== */

const counters =
document.querySelectorAll(".counter");

let started = false;

window.addEventListener("scroll", () => {

    const stats =
    document.querySelector(".stats");

    const position =
    stats.getBoundingClientRect().top;

    if(position < window.innerHeight && !started){

        counters.forEach(counter => {

            let target =
            parseInt(counter.dataset.target);

            let count = 0;

            let speed =
            target / 100;

            let interval =
            setInterval(() => {

                count += speed;

                if(count >= target){

                    counter.innerText = target;

                    clearInterval(interval);

                }else{

                    counter.innerText =
                    Math.floor(count);

                }

            },20);

        });

        started = true;

    }

});

/* ===================================
   SCROLL REVEAL
=================================== */

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

const hiddenElements =
document.querySelectorAll(

".service-card,.product-card,.promo-box,.tech-item,.stat-card"

);

hiddenElements.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

/* ===================================
   CARRITO DE COMPRAS
=================================== */

const cartBtn =
document.querySelector(".cart-btn");

const cartSidebar =
document.querySelector(".cart-sidebar");

const closeCart =
document.querySelector("#close-cart");

const cartItems =
document.querySelector("#cart-items");

const cartCount =
document.querySelector("#cart-count");

const cartTotal =
document.querySelector("#cart-total");

const addButtons =
document.querySelectorAll(".add-cart");

let carrito = [];

cartBtn.addEventListener("click", () => {

    cartSidebar.classList.add("active");

});

closeCart.addEventListener("click", () => {

    cartSidebar.classList.remove("active");

});

addButtons.forEach(button => {

    button.addEventListener("click", () => {

        const nombre =
        button.dataset.name;

        const precio =
        parseFloat(button.dataset.price);

        carrito.push({

            nombre,
            precio

        });

        actualizarCarrito();

    });

});

function actualizarCarrito() {

    cartItems.innerHTML = "";

    let total = 0;

    carrito.forEach((producto, index) => {

        total += producto.precio;

        const item = document.createElement("div");

        item.classList.add("cart-item");

        item.innerHTML = `
            <div class="cart-info">
                <h4>${producto.nombre}</h4>
                <p>S/ ${producto.precio}</p>
            </div>

            <button class="remove-item" data-index="${index}">
                <i class="fas fa-trash"></i>
            </button>
        `;

        cartItems.appendChild(item);

    });

    // Agregar evento a los botones eliminar
    const botonesEliminar = document.querySelectorAll(".remove-item");

    botonesEliminar.forEach(btn => {

        btn.addEventListener("click", () => {

            const index = btn.dataset.index;

            carrito.splice(index, 1);

            actualizarCarrito();

        });

    });

    if (cartCount) {
        cartCount.innerText = carrito.length;
    }

    cartTotal.innerText = total.toFixed(2);

}

/* ===================================
   WHATSAPP COMPRA
=================================== */

const buyBtn =
document.querySelector("#buy-btn");

buyBtn.addEventListener("click", () => {

    if(carrito.length === 0){

        alert(
        "Tu carrito está vacío."
        );

        return;
    }

    let mensaje =
    "Hola MOTORS AYSA,%0A%0ADeseo comprar:%0A";

    let total = 0;

    carrito.forEach(producto => {

        mensaje +=
        "- " +
        producto.nombre +
        " (S/" +
        producto.precio +
        ")%0A";

        total += producto.precio;

    });

    mensaje +=
    "%0ATotal: S/" +
    total.toFixed(2);

    window.open(

    `https://wa.me/51993463795?text=${mensaje}`

    );

});

/* ===================================
   EFECTO 3D PRODUCTOS
=================================== */

const products =
document.querySelectorAll(".product-card");

products.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const centerX =
        rect.width / 2;

        const centerY =
        rect.height / 2;

        const rotateX =
        (y - centerY) / 15;

        const rotateY =
        (centerX - x) / 15;

        card.style.transform =

        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-10px)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =

        `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        translateY(0px)
        `;

    });

});

/* ===================================
   BOTON TOP
=================================== */

const topBtn =
document.createElement("button");

topBtn.innerHTML =
'<i class="fas fa-arrow-up"></i>';

topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        topBtn.classList.add("active");

    }else{

        topBtn.classList.remove("active");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});