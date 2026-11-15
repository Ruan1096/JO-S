document.addEventListener("DOMContentLoaded", () => {
    // 1. Efeito de iluminação nos links do Menu (ao passar o mouse e ao clicar)
    const menuLinks = document.querySelectorAll(".site-header .nav-menu a");

    menuLinks.forEach(link => {
        // Efeito ao passar o mouse (adiciona uma luz suave e eleva levemente)
        link.addEventListener("mouseenter", () => {
            link.style.textShadow = "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.5)";
            link.style.transform = "translateY(-2px)";
            link.style.transition = "all 0.3s ease";
        });

        // Remove o efeito ao tirar o mouse
        link.addEventListener("mouseleave", () => {
            link.style.textShadow = "none";
            link.style.transform = "translateY(0)";
        });

        // Efeito ao Clicar (Dá um clarão/pulso de luz branca rápida)
        link.addEventListener("click", () => {
            link.style.textShadow = "0 0 15px #ffffff, 0 0 30px #ffffff, 0 0 45px #ffffff";
            setTimeout(() => {
                link.style.textShadow = "none";
            }, 300);
        });
    });

    // 2. Efeito de iluminação no Botão "ORDER NOW" (Luz branca difusa no meio/ao redor)
    const orderButton = document.querySelector("section button");

    if (orderButton) {
        // Efeito ao passar o mouse (Gera um brilho branco ao redor do botão preto)
        orderButton.addEventListener("mouseenter", () => {
            orderButton.style.boxShadow = "0 0 15px rgba(255, 255, 255, 0.9), 0 0 30px rgba(255, 255, 255, 0.4)";
            orderButton.style.transition = "box-shadow 0.3s ease";
        });

        // Remove o brilho ao tirar o mouse
        orderButton.addEventListener("mouseleave", () => {
            orderButton.style.boxShadow = "none";
        });

        // Efeito ao Clicar (Efeito de flash de luz intensa no botão)
        orderButton.addEventListener("mousedown", () => {
            orderButton.style.boxShadow = "0 0 25px #ffffff, 0 0 50px rgba(255, 255, 255, 0.8)";
        });

        orderButton.addEventListener("mouseup", () => {
            orderButton.style.boxShadow = "0 0 15px rgba(255, 255, 255, 0.9)";
        });
    }
});