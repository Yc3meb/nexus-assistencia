document.addEventListener("DOMContentLoaded", function() {
    const moreInfoBtn = document.getElementById("more-info-btn");
    const modal = document.getElementById("modal");
    const closeModal = document.querySelector(".close");
    const slides = document.querySelectorAll(".slide");
    const slidesContainer = document.querySelector(".slides");
    let slideIndex = 0;

    // Evento para abrir o modal
    moreInfoBtn.addEventListener("click", function() {
        modal.style.display = "block";
    });

    // Evento para fechar o modal
    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Fecha o modal se clicar fora do conteúdo
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    // Animação de digitação no título
    const typedText = document.getElementById("typed-text");
    const text = "Bem-vindo à Nexus Assistência";
    let index = 0;

    function type() {
        if (index < text.length) {
            typedText.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    type();

    // Slider de imagens
    function showSlides(n) {
        slides.forEach(slide => slide.classList.remove("active"));
        slideIndex = (n + slides.length) % slides.length;
        slides[slideIndex].classList.add("active");
        slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    document.querySelector(".prev").addEventListener("click", function() {
        showSlides(slideIndex - 1);
    });

    document.querySelector(".next").addEventListener("click", function() {
        showSlides(slideIndex + 1);
    });

    showSlides(slideIndex);

    // Efeito de rolagem no cabeçalho
    window.addEventListener("scroll", function() {
        const header = document.querySelector("header");
        header.style.backgroundPosition = `${window.scrollY / 2}px`;
    });

    // Adiciona transições suaves ao cabeçalho
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.transform = "scale(1.1)";
        });

        link.addEventListener("mouseout", () => {
            link.style.transform = "scale(1)";
        });
    });

    // Adiciona um menu de navegação responsivo
    const nav = document.querySelector("nav");
    const toggleButton = document.createElement("button");
    toggleButton.innerHTML = "<i class='fas fa-bars'></i>";
    toggleButton.classList.add("toggle-button");
    nav.appendChild(toggleButton);

    toggleButton.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    // Fecha o menu ao clicar fora
    document.addEventListener("click", function(event) {
        if (!nav.contains(event.target) && !toggleButton.contains(event.target)) {
            nav.classList.remove("active");
        }
    });
});