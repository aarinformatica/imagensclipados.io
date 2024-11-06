// Funções da sidebar
function openNav() {
    const sidebar = document.getElementById("mySidebar");
    const main = document.getElementById("main");
    if (sidebar && main) {
        sidebar.style.width = "250px";
        main.style.marginLeft = "250px";
    }
}

function closeNav() {
    const sidebar = document.getElementById("mySidebar");
    const main = document.getElementById("main");
    if (sidebar && main) {
        sidebar.style.width = "0";
        main.style.marginLeft = "0";
    }
}

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("initialVideo");
    const openBtn = document.querySelector('.openbtn');
    const closeBtn = document.querySelector('.closebtn');

    // Verifica se o modal e o vídeo existem antes de tentar acessá-los
    if (modal) {
        modal.style.display = "block";
    }

    if (video) {
        video.play();
    }

    if (openBtn) {
        openBtn.style.display = 'block';
        openBtn.addEventListener('click', openNav);
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeNav);
    }

    // Carrossel
    let slideIndex = 0;
    let autoSlideInterval;

    // Função para mostrar os slides automaticamente
    function showSlides() {
        const slides = document.querySelectorAll('.carousel-item');
        slides.forEach((slide, index) => {
            slide.style.display = 'none';
        });
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = 'block';
        autoSlideInterval = setTimeout(showSlides, 3000); // Muda a cada 3 segundos
    }

    // Função para mover os slides manualmente
    function moveSlide(direction) {
        clearTimeout(autoSlideInterval); // Para a mudança automática quando movido manualmente
        const slides = document.querySelectorAll('.carousel-item');
        slideIndex += direction;

        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        } else if (slideIndex >= slides.length) {
            slideIndex = 0;
        }

        slides.forEach((slide, index) => {
            slide.style.display = 'none';
        });
        slides[slideIndex].style.display = 'block';
        autoSlideInterval = setTimeout(showSlides, 3000); // Reinicia a mudança automática
    }

    showSlides(); // Inicia a apresentação de slides automaticamente
});
