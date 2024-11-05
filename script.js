function showModalMimos() {
    const modalMimos = document.getElementById('modal-mimos');
    modalMimos.style.display = 'flex';
    hideMimos(); // Limpa a tela
    hideChavePix(); // Limpa a tela
}

function closeModalMimos() {
    const modalMimos = document.getElementById('modal-mimos');
    modalMimos.style.display = 'none';
}

function showMimos() {
    const mimos = document.getElementById('mimos');
    const chavePix = document.getElementById('chave-pix');
    closeModalMimos(); // Fecha o modal antes de exibir a imagem
    hideChavePix(); // Garante que a chave Pix não esteja visível
    if (mimos) {
        mimos.style.display = 'block';
        mimos.classList.add('show');
    }
}

function showChavePix() {
    const chavePix = document.getElementById('chave-pix');
    const mimos = document.getElementById('mimos');
    closeModalMimos(); // Fecha o modal antes de exibir a chave Pix
    hideMimos(); // Garante que a imagem não esteja visível
    if (chavePix) {
        chavePix.style.display = 'block';
        chavePix.classList.add('show');
    }
}

function hideMimos() {
    const mimos = document.getElementById('mimos');
    if (mimos) {
        mimos.classList.remove('show');
        setTimeout(() => {
            mimos.style.display = 'none';
        }, 500); // Tempo da animação de saída
    }
}

function hideChavePix() {
    const chavePix = document.getElementById('chave-pix');
    if (chavePix) {
        chavePix.classList.remove('show');
        setTimeout(() => {
            chavePix.style.display = 'none';
        }, 500); // Tempo da animação de saída
    }
}

function showCarousel() {
    const carousel = document.getElementById('carousel');
    if (carousel) {
        carousel.style.display = 'block';
        carousel.classList.remove('hide');
        carousel.classList.add('show');
    }
    hideMimos(); // Garante que a imagem não esteja visível
    hideChavePix(); // Garante que a chave Pix não esteja visível
}

function hideCarousel() {
    const carousel = document.getElementById('carousel');
    if (carousel) {
        carousel.classList.remove('show');
        carousel.classList.add('hide');
        setTimeout(() => {
            carousel.style.display = 'none';
            carousel.classList.remove('hide');
        }, 500); // Tempo da animação de saída
    }
}

function toggleSocialIconsAndCarousel() {
    const socialIcons = document.getElementById('social-icons');
    if (socialIcons) {
        if (socialIcons.classList.contains('show')) {
            socialIcons.classList.remove('show');
            socialIcons.classList.add('hide');
            setTimeout(() => {
                socialIcons.style.display = 'none';
                socialIcons.classList.remove('hide');
            }, 500); // Tempo da animação de saída
        } else {
            socialIcons.style.display = 'flex';
            socialIcons.classList.add('show');
        }
    }

    hideCarousel(); // Esconder o carrossel
    hideMimos(); // Esconder a imagem de "Enviar Mimos"
    hideChavePix(); // Esconder a chave Pix
}

function hideSocialIcons() {
    const socialIcons = document.getElementById('social-icons');
    if (socialIcons) {
        socialIcons.classList.remove('show');
        socialIcons.classList.add('hide');
        setTimeout(() => {
            socialIcons.style.display = 'none';
            socialIcons.classList.remove('hide');
        }, 500); // Tempo da animação de saída
    }
}

function showTwitchEmbed() {
    const twitchEmbed = document.getElementById('twitch-embed');
    if (twitchEmbed) {
        twitchEmbed.style.display = 'block';
    }
}

function hideTwitchEmbed() {
    const twitchEmbed = document.getElementById('twitch-embed');
    if (twitchEmbed) {
        twitchEmbed.style.display = 'none';
    }
}
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
/*carroussel*/
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let currentIndex = 0;

    function showNextItem() {
        currentIndex = (currentIndex + 1) % totalItems;
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function showPrevItem() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    document.querySelector('.carousel-button-next').addEventListener('click', showNextItem);
    document.querySelector('.carousel-button-prev').addEventListener('click', showPrevItem);

    setInterval(showNextItem, 3000); // Altera a imagem a cada 3 segundos
});

function showComingSoon() {
    const comingSoon = document.getElementById('coming-soon');
    if (comingSoon) {
        comingSoon.style.display = 'block';
        comingSoon.classList.add('show');
    }
}

function hideComingSoon() {
    const comingSoon = document.getElementById('coming-soon');
    if (comingSoon) {
        comingSoon.classList.remove('show');
        setTimeout(() => {
            comingSoon.style.display = 'none';
        }, 500); // Tempo da animação de saída
    }
}


/*conteudo em breve*/
function showComingSoon() {
    const comingSoon = document.getElementById('coming-soon');
    if (comingSoon) {
        comingSoon.style.display = 'block';
        setTimeout(() => comingSoon.classList.add('show'), 10); // Pequeno atraso para acionar a transição
    }
}

function hideComingSoon() {
    const comingSoon = document.getElementById('coming-soon');
    if (comingSoon) {
        comingSoon.classList.remove('show');
        setTimeout(() => comingSoon.style.display = 'none', 500); // Tempo da animação de saída
    }
}

// Atualizar funções de clique do menu para ocultar a tela "Conteúdo em Breve"
function showCarousel() {
    const carousel = document.getElementById('carousel');
    if (carousel) {
        carousel.style.display = 'block';
        carousel.classList.remove('hide');
        carousel.classList.add('show');
    }
    hideMimos();
    hideChavePix();
    hideComingSoon(); // Garante que a tela "Conteúdo em Breve" não esteja visível
}

function hideCarousel() {
    const carousel = document.getElementById('carousel');
    if (carousel) {
        carousel.classList.remove('show');
        carousel.classList.add('hide');
        setTimeout(() => {
            carousel.style.display = 'none';
            carousel.classList.remove('hide');
        }, 500); // Tempo da animação de saída
    }
}

function toggleSocialIconsAndCarousel() {
    const socialIcons = document.getElementById('social-icons');
    if (socialIcons) {
        if (socialIcons.classList.contains('show')) {
            socialIcons.classList.remove('show');
            socialIcons.classList.add('hide');
            setTimeout(() => {
                socialIcons.style.display = 'none';
                socialIcons.classList.remove('hide');
            }, 500); // Tempo da animação de saída
        } else {
            socialIcons.style.display = 'flex';
            socialIcons.classList.add('show');
        }
    }

    hideCarousel();
    hideMimos();
    hideChavePix();
    hideComingSoon(); // Garante que a tela "Conteúdo em Breve" não esteja visível
}

function hideSocialIcons() {
    const socialIcons = document.getElementById('social-icons');
    if (socialIcons) {
        socialIcons.classList.remove('show');
        socialIcons.classList.add('hide');
        setTimeout(() => {
            socialIcons.style.display = 'none';
            socialIcons.classList.remove('hide');
        }, 500); // Tempo da animação de saída
    }
}

function showTwitchEmbed() {
    const twitchEmbed = document.getElementById('twitch-embed');
    if (twitchEmbed) {
        twitchEmbed.style.display = 'block';
    }
    hideComingSoon(); // Garante que a tela "Conteúdo em Breve" não esteja visível
}

function hideTwitchEmbed() {
    const twitchEmbed = document.getElementById('twitch-embed');
    if (twitchEmbed) {
        twitchEmbed.style.display = 'none';
    }
}
/*remover o conteudo em breve ao clicar em enviar mimos*/
function showComingSoon() {
    const comingSoon = document.getElementById('coming-soon');
    if (comingSoon) {
        comingSoon.style.display = 'block';
        setTimeout(() => comingSoon.classList.add('show'), 10); // Pequeno atraso para acionar a transição
    }
}

function hideComingSoon() {
    const comingSoon = document.getElementById('coming-soon');
    if (comingSoon) {
        comingSoon.classList.remove('show');
        setTimeout(() => comingSoon.style.display = 'none', 500); // Tempo da animação de saída
    }
}

function showMimos() {
    const mimos = document.getElementById('mimos');
    const chavePix = document.getElementById('chave-pix');
    closeModalMimos(); // Fecha o modal antes de exibir a imagem
    hideChavePix(); // Garante que a chave Pix não esteja visível
    hideComingSoon(); // Garante que a tela "Conteúdo em Breve" não esteja visível
    if (mimos) {
        mimos.style.display = 'block';
        mimos.classList.add('show');
    }
}

function showChavePix() {
    const chavePix = document.getElementById('chave-pix');
    const mimos = document.getElementById('mimos');
    closeModalMimos(); // Fecha o modal antes de exibir a chave Pix
    hideMimos(); // Garante que a imagem não esteja visível
    hideComingSoon(); // Garante que a tela "Conteúdo em Breve" não esteja visível
    if (chavePix) {
        chavePix.style.display = 'block';
        chavePix.classList.add('show');
    }
}
/*remove conteudo em breve*/
function showComingSoon() {
    const comingSoon = document.getElementById('coming-soon');
    if (comingSoon) {
        comingSoon.style.display = 'block';
        setTimeout(() => comingSoon.classList.add('show'), 10); // Pequeno atraso para acionar a transição
    }
}

function hideComingSoon() {
    const comingSoon = document.getElementById('coming-soon');
    if (comingSoon) {
        comingSoon.classList.remove('show');
        setTimeout(() => comingSoon.style.display = 'none', 500); // Tempo da animação de saída
    }
}

function showModalMimos() {
    const modalMimos = document.getElementById('modal-mimos');
    modalMimos.style.display = 'flex';
    hideMimos(); // Limpa a tela
    hideChavePix(); // Limpa a tela
    hideComingSoon(); // Garante que a tela "Conteúdo em Breve" não esteja visível
}

function closeModalMimos() {
    const modalMimos = document.getElementById('modal-mimos');
    modalMimos.style.display = 'none';
}

function showMimos() {
    const mimos = document.getElementById('mimos');
    const chavePix = document.getElementById('chave-pix');
    closeModalMimos(); // Fecha o modal antes de exibir a imagem
    hideChavePix(); // Garante que a chave Pix não esteja visível
    if (mimos) {
        mimos.style.display = 'block';
        mimos.classList.add('show');
    }
}

function showChavePix() {
    const chavePix = document.getElementById('chave-pix');
    const mimos = document.getElementById('mimos');
    closeModalMimos(); // Fecha o modal antes de exibir a chave Pix
    hideMimos(); // Garante que a imagem não esteja visível
    if (chavePix) {
        chavePix.style.display = 'block';
        chavePix.classList.add('show');
    }
}
/*modal com video*/
function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('modal');
    const video = document.getElementById('clipadosVideo');
    modal.style.display = 'none';
    video.pause(); // Pausa o vídeo ao fechar o modal
    video.currentTime = 0; // Reinicia o vídeo ao fechar o modal
}

// Fecha o modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}
/*para o video*/
function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('modal');
    const video = document.getElementById('clipadosVideo');
    modal.style.display = 'none';
    video.pause(); // Pausa o vídeo ao fechar o modal
    video.currentTime = 0; // Reinicia o vídeo ao fechar o modal
}

document.getElementById('clipadosVideo').addEventListener('play', function() {
    const notification = document.getElementById('unmuteNotification');
    setTimeout(() => {
        notification.style.display = 'none';
    }, 5000); // Oculta a notificação após 5 segundos
});

// Fecha o modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}
/*sidebar*/
    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.getElementById("overlay").style.display = "block";
    }

    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("overlay").style.display = "none";
    }
