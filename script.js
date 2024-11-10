// Função para abrir/fechar a sidebar
function toggleNav() {
    const sidebar = document.getElementById("mySidebar");
    const toggleBtn = sidebar.querySelector('.menu-toggle-btn');
    if (sidebar && toggleBtn) {
        if (sidebar.classList.contains('expanded')) {
            sidebar.classList.remove('expanded');
            toggleBtn.innerHTML = 'Menu'; // Texto "Menu"
        } else {
            sidebar.classList.add('expanded');
            toggleBtn.innerHTML = 'X'; // Texto "Menu"
        }
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const modal = document.getElementById("videoModal");
    const video = document.getElementById("initialVideo");

    // Verifica se o modal e o vídeo existem antes de tentar acessá-los
    if (modal) {
        modal.style.display = "block";
    }

    if (video) {
        video.play();
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

    // Eventos dos botões do carrossel
    const prevButton = document.querySelector('.carousel-button-prev');
    const nextButton = document.querySelector('.carousel-button-next');

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            moveSlide(-1);
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            moveSlide(1);
        });
    }
});
/*sobre*/
function startAnimation() {
    const image = document.getElementById('image');
    const image2 = document.getElementById('image2');
    const video = document.getElementById('video');

    // Notificação para clicar no botão de som no player de vídeo
    const soundNotification = document.createElement('div');
    soundNotification.innerText = '🔊 Clique no botão de som para ativar o áudio!';
    soundNotification.style.position = 'absolute';
    soundNotification.style.bottom = '5px';
    soundNotification.style.left = '50%';
    soundNotification.style.transform = 'translateX(-50%)';
    soundNotification.style.backgroundColor = 'rgba(0,0,0,0.7)';
    soundNotification.style.color = '#ffffff';
    soundNotification.style.padding = '10px';
    soundNotification.style.borderRadius = '5px';
    soundNotification.style.zIndex = '1000';
    video.parentNode.insertBefore(soundNotification, video.nextSibling);

    setTimeout(() => {
        soundNotification.style.display = 'none';
    }, 5000); // Remove a notificação após 5 segundos

    setTimeout(() => {
        image.classList.add('hidden');
        image2.classList.remove('hidden');
        document.getElementById('text2').style.display = 'block';
        anime.timeline({loop: false})
            .add({
                targets: '#text2 .text',
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 500,
                easing: 'easeOutExpo',
                delay: (el, i) => 50 * i,
                begin: function() {
                    image2.style.transform = 'translateX(0)';
                    video.play(); // Reproduzir o vídeo quando a primeira imagem for exibida
                },
                update: function(anim) {
                    const maxTranslate = document.querySelector('.container').offsetWidth - image2.offsetWidth;
                    image2.style.transform = `translateX(${(anim.progress / 100) * maxTranslate}px)`;
                },
                complete: function() {
                    image2.style.transform = `translateX(${document.querySelector('.container').offsetWidth}px)`;
                }
            });
    }, 5000); // 5 segundos de delay antes de trocar a imagem e iniciar a animação do texto
}

document.addEventListener('DOMContentLoaded', (event) => {
    startAnimation();
});

let textWrapper = document.getElementById('text');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='text'>$&</span>");

let textWrapper2 = document.getElementById('text2');
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='text'>$&</span>");

