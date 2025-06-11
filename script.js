// ============= MENU HAMBURGUER =============
const hamburguer = document.querySelector('.hamburger');
const navList = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav li');

if (hamburguer && navList) {
    hamburguer.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
}

if (navItems.length > 0) {
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navList) {
                navList.classList.remove('active');
            }
        });
    });
}

// ============= FUNÇÕES DE MODAL =============
function openModal(articleId) {
    const modal = document.getElementById(articleId + 'Modal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';

        // Adiciona um estado ao histórico do navegador
        history.pushState({ modalOpen: true, articleId: articleId }, '', `#${articleId}`);
    }
}

function closeModal(articleId) {
    const modal = document.getElementById(articleId + 'Modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';

        // Volta um passo no histórico apenas se for modal (evita sair do site)
        if (history.state?.modalOpen) {
            history.back();
        }
    }
}

window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = 'none';
            document.body.style.overflow = 'auto';

            if (history.state?.modalOpen) {
                history.back();
            }
        }
    }
};

// Detecta quando o usuário toca em "voltar"
window.onpopstate = function(event) {
    if (!event.state || !event.state.modalOpen) {
        // Fecha qualquer modal aberto
        const modals = document.getElementsByClassName('modal');
        for (let i = 0; i < modals.length; i++) {
            modals[i].style.display = 'none';
        }
        document.body.style.overflow = 'auto';
    }
};


// ============= CARDS INTERATIVOS =============
function isMobile() {
    return window.innerWidth <= 768;
}

function toggleCard(card) {
    if (isMobile()) {
        card.classList.toggle('mobile-flipped');
    }
}

// ============= SLIDER INFINITO =============
function initSlider() {
    const rolling = document.getElementById('rolling');
    if (rolling) {
        const originalContent = rolling.innerHTML;
        rolling.innerHTML = originalContent + originalContent;
    }
}

// ============= INICIALIZAÇÃO =============
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar cards
    const cards = document.querySelectorAll('.card');
    if (cards.length > 0) {
        cards.forEach(card => {
            card.addEventListener('click', function() {
                toggleCard(this);
            });
        });

        window.addEventListener('resize', function() {
            if (!isMobile()) {
                cards.forEach(card => {
                    card.classList.remove('mobile-flipped');
                });
            }
        });
    }

    // Inicializar slider
    initSlider();

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const loading = document.getElementById('loading');
    const successScreen = document.getElementById('successScreen');

});
    // Debug
    console.log('Script carregado com sucesso');
    console.log('Elementos encontrados:');
    console.log('- Hamburguer:', document.querySelector('.hamburger') ? 'OK' : 'NÃO ENCONTRADO');
    console.log('- Nav:', document.querySelector('.nav') ? 'OK' : 'NÃO ENCONTRADO');
    console.log('- Cards:', document.querySelectorAll('.card').length + ' encontrados');
    console.log('- Rolling:', document.getElementById('rolling') ? 'OK' : 'NÃO ENCONTRADO');
});