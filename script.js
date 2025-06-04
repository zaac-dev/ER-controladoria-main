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

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const loading = document.getElementById('loading');
    const successScreen = document.getElementById('successScreen');

    // Define a URL atual para o campo _next (redireciona para a mesma página)
    const nextInput = document.querySelector('input[name="_next"]');
    nextInput.value = window.location.href;

    // Verifica se existe parâmetro de sucesso na URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        showSuccessMessage();
    }

    form.addEventListener('submit', function(e) {
        // Mostra loading
        submitBtn.disabled = true;
        loading.style.display = 'inline-block';
        submitBtn.textContent = 'Enviando...';

        // Adiciona parâmetro de sucesso à URL de retorno
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set('success', 'true');
        nextInput.value = currentUrl.toString();

        // O formulário será enviado normalmente
        // Quando retornar, a página detectará o parâmetro e mostrará a mensagem
    });

    function showSuccessMessage() {
        // Remove o parâmetro da URL sem recarregar
        const url = new URL(window.location.href);
        url.searchParams.delete('success');
        window.history.replaceState({}, document.title, url.toString());

        // Mostra a tela de sucesso
        successScreen.classList.add('show');
        
        // Função para fechar após 10 segundos
        setTimeout(function() {
            successScreen.classList.add('fade-out');
            
            setTimeout(function() {
                window.close();
                
                setTimeout(function() {
                    if (window.history.length > 1) {
                        window.history.back();
                    } else {
                        // Volta para o formulário limpo
                        successScreen.classList.remove('show', 'fade-out');
                        form.reset();
                    }
                }, 100);
            }, 1000);
        }, 10000);
    }
});
    // Debug
    console.log('Script carregado com sucesso');
    console.log('Elementos encontrados:');
    console.log('- Hamburguer:', document.querySelector('.hamburger') ? 'OK' : 'NÃO ENCONTRADO');
    console.log('- Nav:', document.querySelector('.nav') ? 'OK' : 'NÃO ENCONTRADO');
    console.log('- Cards:', document.querySelectorAll('.card').length + ' encontrados');
    console.log('- Rolling:', document.getElementById('rolling') ? 'OK' : 'NÃO ENCONTRADO');
});