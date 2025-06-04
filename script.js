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
    }
}

function closeModal(articleId) {
    const modal = document.getElementById(articleId + 'Modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
}

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

    // Função para fechar a janela/aba após 10 segundos
setTimeout(function() {
    // Adiciona efeito de fade out
    document.body.classList.add('fade-out');
    
    // Aguarda a animação terminar e então fecha
    setTimeout(function() {
        // Tenta fechar a janela atual
        window.close();
        
        // Se não conseguir fechar (por questões de segurança do navegador),
        // redireciona para uma página em branco ou volta para a página anterior
        setTimeout(function() {
            if (window.history.length > 1) {
                window.history.back();
            } else {
                window.location.href = 'about:blank';
            }
        }, 100);
    }, 1000); // Aguarda 1 segundo para o fade out completar
}, 10000); // 10 segundos

    // Debug
    console.log('Script carregado com sucesso');
    console.log('Elementos encontrados:');
    console.log('- Hamburguer:', document.querySelector('.hamburger') ? 'OK' : 'NÃO ENCONTRADO');
    console.log('- Nav:', document.querySelector('.nav') ? 'OK' : 'NÃO ENCONTRADO');
    console.log('- Cards:', document.querySelectorAll('.card').length + ' encontrados');
    console.log('- Rolling:', document.getElementById('rolling') ? 'OK' : 'NÃO ENCONTRADO');
});