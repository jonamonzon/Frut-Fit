const botonBeneficios = document.querySelector(".boton-beneficios");
const modalBeneficios = document.querySelector("#modalBeneficios");
const cerrarBeneficios = document.querySelector("#cerrarBeneficios");

botonBeneficios.onclick = () => {
    modalBeneficios.style.display = "flex";
};

cerrarBeneficios.onclick = () => {
    modalBeneficios.style.display = "none";
};

modalBeneficios.onclick = (e) => {
    if (e.target === modalBeneficios) {
        modalBeneficios.style.display = "none";
    }
};
const botonPedido = document.querySelector(".boton-pedido");

botonPedido.onclick = () => {
    const mensaje = encodeURIComponent(
        "Hola, quiero hacer un pedido de Frut-Fit."
    );

    const whatsapp = `https://wa.me/5493434164316?text=${mensaje}`;

    window.open(whatsapp, "_blank");
};