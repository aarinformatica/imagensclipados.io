function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.menu-button');
    buttons.forEach((button, index) => {
        setTimeout(() => {
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        }, index * 200); // Atraso de 200ms entre cada botão
    });
});
/*mimoa*/
const phrases = [
    "Obrigado pelo seu apoio!",
    "Sua contribuição faz a diferença!",
    "Obrigado por ajudar a comunidade!",
    "Sua generosidade é incrível!",
    "Agradecemos seu suporte!",
    "Por que o esqueleto não foi ao baile? Porque não tinha 'corpo' para ir com ele!",
    "Por que o computador foi ao médico? Porque estava com um 'vírus'!",
    "Qual é o animal mais antigo? A 'zebra', porque está em preto e branco!",
    "Por que o livro de matemática está triste? Porque tem muitos problemas!",
    "O que o zero disse para o oito? Adorei o seu cinto!",
    "Qual é o cúmulo da paciência? Costurar um botão na camisa de força!",
    "Por que o policial não usa sabão? Porque ele prefere deter gente!",
    "Por que o lápis não se mexe? Porque ele é feito de madeira!",
    "Por que o astrônomo não come estrelas? Porque ele prefere cometas!",
    "Como o mar se saúda? Ele diz: 'Oi, onda vai?'",
    "Por que a foto foi presa? Porque ela foi 'revelada'!",
    "O que o pontinho verde disse para o pontinho vermelho? Sou mais maduro que você!",
    "Por que o pintinho não toma banho? Porque ele já é limpinho!",
    "Qual é o cúmulo da força? Dobrar a esquina!",
    "O que o tomate foi fazer no banco? Tirar extrato!"
];

document.getElementById('envioMimosShowQrCodeBtn').addEventListener('click', function() {
    const contentDiv = document.getElementById('envioMimosContentQrCode');
    if (contentDiv) {
        contentDiv.innerHTML = `<img id="envioMimosQrCodeImg" src="https://raw.githubusercontent.com/aarinformatica/imagensclipados.io/refs/heads/main/pixlucas.jpg" alt="QR Code">`;
        toggleBackButton(true);
        changeTitle(getRandomPhrase());
    } else {
        console.error('Elemento envioMimosContentQrCode não encontrado');
    }
});

document.getElementById('envioMimosShowPixKeyBtn').addEventListener('click', function() {
    const contentDiv = document.getElementById('envioMimosContentPix');
    if (contentDiv) {
        contentDiv.innerHTML = `<p class="envio-mimos-pix-key">Chave PIX: 01d6f03e-965f-4cd4-81f3-942e86d3c438</p>`;
        toggleBackButton(true);
        changeTitle(getRandomPhrase());
    } else {
        console.error('Elemento envioMimosContentPix não encontrado');
    }
});

document.getElementById('envioMimosBackBtn').addEventListener('click', function() {
    const contentQrCodeDiv = document.getElementById('envioMimosContentQrCode');
    const contentPixDiv = document.getElementById('envioMimosContentPix');
    if (contentQrCodeDiv) contentQrCodeDiv.innerHTML = '';
    if (contentPixDiv) contentPixDiv.innerHTML = '';
    toggleBackButton(false);
    changeTitle("Escolha uma Opção");
});

function toggleBackButton(show) {
    const backBtn = document.getElementById('envioMimosBackBtn');
    const options = document.querySelector('.envio-mimos-options');
    if (backBtn && options) {
        if (show) {
            backBtn.classList.remove('envio-mimos-hidden');
            options.classList.add('envio-mimos-hidden');
        } else {
            backBtn.classList.add('envio-mimos-hidden');
            options.classList.remove('envio-mimos-hidden');
        }
    } else {
        console.error('Elemento envioMimosBackBtn ou envio-mimos-options não encontrado');
    }
}

function changeTitle(newTitle) {
    const mainTitle = document.getElementById('envioMimosMainTitle');
    if (mainTitle) {
        mainTitle.textContent = newTitle;
    } else {
        console.error('Elemento envioMimosMainTitle não encontrado');
    }
}

function getRandomPhrase() {
    return phrases[Math.floor(Math.random() * phrases.length)];
}
/*chatloudas*/
document.addEventListener('DOMContentLoaded', function() {
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');

    // Conteúdo específico extraído do site
    const siteContent = {
        "sobre nós": "Somos uma empresa dedicada a fornecer os melhores serviços.",
        "produtos": "Oferecemos uma variedade de produtos de alta qualidade.",
        "contato": "Você pode entrar em contato conosco pelo e-mail contato@empresa.com.",
        "xm4": `
            **XM4 - Loadout Longo Alcance**:
            - Lente: REFLETORA ACCU-SPOT
            - Coronha: CORONHA EQUILIBRADA
            - Carregador: CARREGADOR ESTENDIDO I
            - Cano: CANO LONGO
            - Cabo: EMPUNHADURA DE SAQUE RÁPIDO
            ![XM4 Loadout](https://api.wzhub.gg/storage/uploads/loadouts/1730122666_836a4d40-7997-4bd2-9272-caf415ed87b7.png)`,
        "krig c": `
            **KRIG C - Loadout Longo Alcance**:
            - Cabo: EMPUNHADURA ERGONÓMICA
            - Carregador: CARREGADOR ESTENDIDO I
            - Lente: MICRORREFLETORA KEPLER
            - Cano: CANO REFORÇADO
            - Acoplamento: EMPUNHADURA VERTICAL
            ![KRIG C Loadout](https://api.wzhub.gg/storage/uploads/loadouts/guns/default/1731606810_2046568b-e128-4e54-b069-ad71f6352acf.png)`,
        "pp-919": `
            **PP-919 - Curto Alcance**:
            - Boca: COMPENSADOR
            - Cabo: EMPUNHADURA ERGONÓMICA
            - Coronha: CORONHA EQUILIBRADA
            - Carregador: CARREGADOR RÁPIDO II
            - Cano: CANO REFORÇADO
            ![AS VAL Loadout](https://api.wzhub.gg/storage/uploads/loadouts/1730123883_a4f1cb0b-7779-488d-9e71-32340c9e2a64.png)`,      
        "as val": `
            **AS VAL - Todas as distâncias**:
            - Cabo: EMPUNHADURA DE ASSALTO
            - Coronha: CORONHA EQUILIBRADA
            - Carregador: CARREGADOR ESTENDIDO II
            - Mods de disparo: MOLAS DE RECUO
            - Acoplamento: EMPUNHADURA VERTICAL
            ![AS VAL Loadout](https://api.wzhub.gg/storage/uploads/loadouts/1729978745_6aeba133-cef4-4f51-8f99-c995f24ab702.png)`,
        "model l": `
            **MODEL L - Longo Alcance**:
            - Coronha: CORONHA EQUILIBRADA
            - Cabo: EMPUNHADURA ERGONÓMICA
            - Lente: MICRORREFLETORA KEPLER
            - Boca: COMPENSADOR TRANSPOSTO
            - Cano: CANO REFORÇADO
            <p>
            **Longo Alcance 2**:
            - Cabo: EMPUNHADURA ERGONÓMICA
            - Lente: MICRORREFLETORA KEPLER
            - Boca: COMPENSADOR TRANSPOSTO
            - Acoplamento: EMPUNHADURA RANGER
            - Cano: CANO REFORÇADO
            ![MODEL L Loadout](https://api.wzhub.gg/storage/uploads/loadouts/1730123341_31025017-d24b-4732-b2cb-0c20c816b142.png)`
    };

    sendBtn.addEventListener('click', function() {
        const userText = userInput.value.trim();
        if (userText) {
            addMessage(userText, 'user-message');
            userInput.value = '';
            getBotResponse(userText);
        }
    });

    userInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendBtn.click();
        }
    });

    function addMessage(text, className) {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${className}`;
        if (className === 'bot-message' && text.includes('![XM4 Loadout]')) {
            const parts = text.split('![XM4 Loadout]');
            messageElement.innerHTML = `<p>${parts[0]}</p><img src="${parts[1].match(/\((.*?)\)/)[1]}" alt="XM4 Loadout">`;
        } else if (className === 'bot-message' && text.includes('![KRIG C Loadout]')) {
            const parts = text.split('![KRIG C Loadout]');
            messageElement.innerHTML = `<p>${parts[0]}</p><img src="${parts[1].match(/\((.*?)\)/)[1]}" alt="KRIG C Loadout">`;
        } else if (className === 'bot-message' && text.includes('![AS VAL Loadout]')) {
            const parts = text.split('![AS VAL Loadout]');
            messageElement.innerHTML = `<p>${parts[0]}</p><img src="${parts[1].match(/\((.*?)\)/)[1]}" alt="AS VAL Loadout">`;
        } else if (className === 'bot-message' && text.includes('![MODEL L Loadout]')) {
            const parts = text.split('![MODEL L Loadout]');
            messageElement.innerHTML = `<p>${parts[0]}</p><img src="${parts[1].match(/\((.*?)\)/)[1]}" alt="MODEL L Loadout">`;
        } else {
            messageElement.textContent = text;
        }
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function getBotResponse(input) {
        let response = "Desculpe, não encontrei uma resposta para sua pergunta.";
        for (const key in siteContent) {
            if (input.toLowerCase().includes(key)) {
                response = siteContent[key];
                break;
            }
        }
        addMessage(response, 'bot-message');
    }
});
/*redes sociais*/
const socialButtons = document.querySelectorAll('.social-button');

const effects = ['effect-wobble', 'effect-bounce', 'effect-shake'];

socialButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        const effect = effects[Math.floor(Math.random() * effects.length)];
        button.classList.add(effect);
    });

    button.addEventListener('mouseout', () => {
        effects.forEach(effect => button.classList.remove(effect));
    });
});
/*quem é o clipados*/
let clipadosCard = document.querySelector(".clipados-card");

clipadosCard.addEventListener("mousemove", (event) => {
    let x = event.offsetX;
    let y = event.offsetY;
    let w = clipadosCard.clientWidth;
    let h = clipadosCard.clientHeight;

    clipadosCard.style.setProperty("--x-clipados", x / w);
    clipadosCard.style.setProperty("--y-clipados", y / h);
});