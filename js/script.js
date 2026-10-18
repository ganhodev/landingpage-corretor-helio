/* ==============================================
   CONFIGURAÇÃO — HÉLIO JUNIOR CORRETOR
   ================================================
   TODO: Confirmar número do WhatsApp com o Hélio
   Formato: DDI + DDD + número (só dígitos)
   Ex: Brasil(55) + Vila Velha/ES(27) + número
   ================================================ */
const CONFIG = {
    whatsapp: '5527996702221',
    googleMeuNegocio: null,
};


/* ==============================================
   IMÓVEIS — Cadastre cada imóvel aqui
   ================================================

   CAMPOS DISPONÍVEIS POR TIPO:

   Todos os tipos:
     id        → código único (ex: 'AP001')
     titulo    → nome do imóvel
     foto      → caminho da foto (ex: 'assets/images/imoveis/ap001.jpg')
                 Coloque a foto na pasta assets/images/imoveis/
     local     → localização (bairro, cidade)
     descricao → descrição do imóvel
     preco     → valor de venda ou aluguel/mês

   Residenciais (apartamentos, casas, aluguel):
     quartos   → número de quartos
     suites    → número de suítes (opcional)
     banheiros → número de banheiros
     garagem   → vagas de garagem (opcional)
     area      → tamanho em m²

   Comerciais:
     area      → tamanho em m²
     banheiros → número de banheiros
     garagem   → vagas (opcional)

   Terrenos:
     area      → tamanho em m²
     (sem quartos, suítes, banheiros)

   ================================================ */
const IMOVEIS = {

    apartamentos: {
        titulo: 'Apartamentos Disponíveis',
        lista: [
            {
                id: 'AP001',
                titulo: 'Apartamento 3 Quartos — Itaparica',
                foto: 'assets/images/imoveis/ap001.jpg',
                local: 'Itaparica, Vila Velha - ES',
                quartos: 3,
                suites: 1,
                banheiros: 2,
                garagem: 1,
                area: 85,
                preco: 'R$ 450.000',
                descricao: 'Apartamento em condomínio fechado com piscina, academia e área de lazer completa. Excelente localização, próximo ao comércio.',
            },
            {
                id: 'AP002',
                titulo: 'Apartamento 2 Quartos — Praia da Costa',
                foto: 'assets/images/imoveis/ap002.jpg',
                local: 'Praia da Costa, Vila Velha - ES',
                quartos: 2,
                suites: 1,
                banheiros: 1,
                garagem: 1,
                area: 68,
                preco: 'R$ 380.000',
                descricao: 'Apartamento a 3 quadras da praia, andar alto com vista parcial para o mar. Condomínio com portaria 24h.',
            },
        ],
    },

    casas: {
        titulo: 'Casas Disponíveis',
        lista: [
            {
                id: 'CA001',
                titulo: 'Casa em Condomínio — 4 Quartos',
                foto: 'assets/images/imoveis/ca001.jpg',
                local: 'Laranjeiras, Serra - ES',
                quartos: 4,
                suites: 2,
                banheiros: 3,
                garagem: 2,
                area: 180,
                preco: 'R$ 680.000',
                descricao: 'Casa de alto padrão em condomínio fechado, com área gourmet, piscina privativa e amplo quintal.',
            },
            {
                id: 'CA002',
                titulo: 'Casa 3 Quartos — Bairro República',
                foto: 'assets/images/imoveis/ca002.jpg',
                local: 'República, Vila Velha - ES',
                quartos: 3,
                suites: 1,
                banheiros: 2,
                garagem: 1,
                area: 130,
                preco: 'R$ 490.000',
                descricao: 'Casa com ótimo acabamento, quintal espaçoso e churrasqueira. Bairro tranquilo e seguro.',
            },
        ],
    },

    lancamentos: {
        titulo: 'Lançamentos — Grande Vitória',
        lista: [
            {
                id: 'LA001',
                titulo: 'Residencial Praia das Castanheiras',
                foto: 'assets/images/imoveis/la001.jpg',
                local: 'Vila Velha - ES',
                quartos: 2,
                suites: 1,
                banheiros: 2,
                area: 72,
                preco: 'A partir de R$ 320.000',
                descricao: 'Pré-lançamento com condições especiais. Entrega prevista 2026. Lazer completo: piscina, academia, playground e salão de festas.',
            },
            {
                id: 'LA002',
                titulo: 'Condomínio Park Laranjeiras',
                foto: 'assets/images/imoveis/la002.jpg',
                local: 'Laranjeiras, Serra - ES',
                quartos: 3,
                suites: 1,
                banheiros: 2,
                garagem: 1,
                area: 88,
                preco: 'A partir de R$ 410.000',
                descricao: 'Lançamento em área privilegiada da Serra. Plantas inteligentes, acabamento premium e excelente custo-benefício.',
            },
        ],
    },

    comercial: {
        titulo: 'Imóveis Comerciais',
        lista: [
            {
                id: 'CM001',
                titulo: 'Sala Comercial — 45m²',
                foto: 'assets/images/imoveis/cm001.jpg',
                local: 'Praia da Costa, Vila Velha - ES',
                area: 45,
                banheiros: 1,
                garagem: 1,
                preco: 'R$ 280.000',
                descricao: 'Sala em andar corporativo com ar-condicionado central, recepção compartilhada e segurança 24h.',
            },
            {
                id: 'CM002',
                titulo: 'Loja Comercial — 80m²',
                foto: 'assets/images/imoveis/cm002.jpg',
                local: 'Centro, Vila Velha - ES',
                area: 80,
                banheiros: 1,
                preco: 'R$ 420.000',
                descricao: 'Loja em ponto de alto fluxo no centro de Vila Velha. Frente ampla, fachada envidraçada, ideal para varejo ou serviços.',
            },
        ],
    },

    terrenos: {
        titulo: 'Terrenos Disponíveis',
        lista: [
            {
                id: 'TE001',
                titulo: 'Terreno — 300m²',
                foto: 'assets/images/imoveis/te001.jpg',
                local: 'Jardim Camburi, Vitória - ES',
                area: 300,
                preco: 'R$ 380.000',
                descricao: 'Terreno plano em área nobre, com toda infraestrutura disponível. Ideal para construção residencial ou comercial.',
            },
            {
                id: 'TE002',
                titulo: 'Terreno em Condomínio — 500m²',
                foto: 'assets/images/imoveis/te002.jpg',
                local: 'Laranjeiras, Serra - ES',
                area: 500,
                preco: 'R$ 290.000',
                descricao: 'Terreno em condomínio fechado de alto padrão. Ótima topografia, ruas asfaltadas e segurança 24h.',
            },
        ],
    },

    aluguel: {
        titulo: 'Imóveis para Alugar',
        lista: [
            {
                id: 'AL001',
                titulo: 'Apartamento 2 Quartos — Itaparica',
                foto: 'assets/images/imoveis/al001.jpg',
                local: 'Itaparica, Vila Velha - ES',
                quartos: 2,
                suites: 1,
                banheiros: 1,
                garagem: 1,
                area: 65,
                preco: 'R$ 1.800/mês',
                descricao: 'Apartamento mobiliado, próximo ao comércio e transporte público. Condomínio com portaria 24h e área de lazer.',
            },
            {
                id: 'AL002',
                titulo: 'Casa 3 Quartos — Laranjeiras',
                foto: 'assets/images/imoveis/al002.jpg',
                local: 'Laranjeiras, Serra - ES',
                quartos: 3,
                suites: 1,
                banheiros: 2,
                garagem: 2,
                area: 130,
                preco: 'R$ 2.800/mês',
                descricao: 'Casa espaçosa com quintal, churrasqueira e 2 vagas de garagem. Bairro tranquilo, seguro e bem localizado.',
            },
        ],
    },

};


/* ==============================================
   MODAL — renderiza os cards de imóveis
   ============================================== */
function renderCard(imovel) {
    const base = `https://wa.me/${CONFIG.whatsapp}?text=`;
    const msg = `Olá, Hélio! Tenho interesse no imóvel abaixo:\n\n📍 ${imovel.titulo}\n📌 ${imovel.local}\n🔑 Cód. ${imovel.id}\n\nPode me dar mais informações?`;
    const url = base + encodeURIComponent(msg);

    // Specs dinâmicos — só mostra o campo se ele existir no cadastro
    const specs = [];
    if (imovel.quartos)   specs.push(`<span><i class="fas fa-bed"></i> ${imovel.quartos} quarto${imovel.quartos > 1 ? 's' : ''}</span>`);
    if (imovel.suites)    specs.push(`<span><i class="fas fa-star"></i> ${imovel.suites} suíte${imovel.suites > 1 ? 's' : ''}</span>`);
    if (imovel.banheiros) specs.push(`<span><i class="fas fa-bath"></i> ${imovel.banheiros} banheiro${imovel.banheiros > 1 ? 's' : ''}</span>`);
    if (imovel.garagem)   specs.push(`<span><i class="fas fa-car"></i> ${imovel.garagem} vaga${imovel.garagem > 1 ? 's' : ''}</span>`);
    if (imovel.area)      specs.push(`<span><i class="fas fa-ruler-combined"></i> ${imovel.area}m²</span>`);

    return `
        <div class="card-prop">
            <div class="card-prop-foto">
                <img
                    src="${imovel.foto}"
                    alt="${imovel.titulo}"
                    onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                >
                <div class="placeholder-foto-prop" style="display:none">
                    <i class="fas fa-image"></i>
                    <span>Adicione a foto em<br><code>assets/images/imoveis/${imovel.id.toLowerCase()}.jpg</code></span>
                </div>
                <span class="card-prop-badge">Cód. ${imovel.id}</span>
            </div>
            <div class="card-prop-body">
                <h4>${imovel.titulo}</h4>
                <p class="card-prop-local"><i class="fas fa-location-dot"></i> ${imovel.local}</p>
                ${specs.length ? `<div class="card-prop-specs">${specs.join('')}</div>` : ''}
                <p class="card-prop-desc">${imovel.descricao}</p>
                <p class="card-prop-preco">${imovel.preco}</p>
                <a href="${url}" class="btn-whatsapp-prop" target="_blank" rel="noopener">
                    <i class="fab fa-whatsapp"></i> Tenho interesse neste imóvel
                </a>
            </div>
        </div>
    `;
}

function abrirModal(categoria) {
    const dados = IMOVEIS[categoria];
    if (!dados) return;

    document.getElementById('modal-titulo').textContent = dados.titulo;

    const grid = document.getElementById('modal-grid');
    if (dados.lista && dados.lista.length > 0) {
        grid.innerHTML = dados.lista.map(renderCard).join('');
    } else {
        grid.innerHTML = `
            <div class="modal-vazio">
                <i class="fas fa-house-circle-xmark"></i>
                Nenhum imóvel cadastrado nesta categoria ainda.<br>
                Adicione imóveis no arquivo <strong>js/script.js</strong>.
            </div>
        `;
    }

    document.getElementById('modal-overlay').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function fecharModal() {
    document.getElementById('modal-overlay').classList.add('hidden');
    document.body.style.overflow = '';
}

function initModal() {
    // Abre o modal ao clicar em qualquer botão [data-modal]
    document.querySelectorAll('[data-modal]').forEach(btn => {
        btn.addEventListener('click', () => abrirModal(btn.dataset.modal));
    });

    // Fecha ao clicar no botão X
    document.getElementById('modal-fechar').addEventListener('click', fecharModal);

    // Fecha ao clicar fora do modal
    document.getElementById('modal-overlay').addEventListener('click', (e) => {
        if (e.target === document.getElementById('modal-overlay')) fecharModal();
    });

    // Fecha com a tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') fecharModal();
    });
}


/* ==============================================
   WHATSAPP — botões principais (hero, cta, float)
   ============================================== */
function configurarWhatsApp() {
    const msg = 'Olá, Hélio! Vi seu site e gostaria de mais informações sobre imóveis na Grande Vitória.';
    const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
    ['whatsapp-hero', 'whatsapp-cta', 'whatsapp-float'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.href = url;
    });
}


/* ==============================================
   GOOGLE MEU NEGÓCIO
   ============================================== */
function configurarGoogle() {
    const bloco = document.getElementById('bloco-google');
    const link  = document.getElementById('link-google');
    if (!CONFIG.googleMeuNegocio) {
        if (bloco) bloco.style.display = 'none';
        return;
    }
    if (link) link.href = CONFIG.googleMeuNegocio;
}


/* ==============================================
   HEADER — sólido ao rolar
   ============================================== */
function initHeader() {
    const header = document.getElementById('header');
    const check = () => header.classList.toggle('scrolled', window.scrollY > 60);
    window.addEventListener('scroll', check, { passive: true });
    check();
}


/* ==============================================
   MENU MOBILE
   ============================================== */
function initMenuMobile() {
    const btn   = document.getElementById('menu-btn');
    const menu  = document.getElementById('menu-mobile');
    const links = document.querySelectorAll('.menu-mobile-link');
    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
        const aberto = !menu.classList.contains('hidden');
        menu.classList.toggle('hidden');
        btn.querySelector('i').classList.toggle('fa-bars',  aberto);
        btn.querySelector('i').classList.toggle('fa-xmark', !aberto);
    });

    links.forEach(link => link.addEventListener('click', () => {
        menu.classList.add('hidden');
        btn.querySelector('i').classList.add('fa-bars');
        btn.querySelector('i').classList.remove('fa-xmark');
    }));
}


/* ==============================================
   SCROLL SUAVE
   ============================================== */
function initScrollSuave() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const alvo = document.querySelector(link.getAttribute('href'));
            if (alvo) { e.preventDefault(); alvo.scrollIntoView({ behavior: 'smooth' }); }
        });
    });
}


/* ==============================================
   ANIMAÇÕES DE ENTRADA
   ============================================== */
function initAnimacoes() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), i * 90);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}


/* ==============================================
   INICIALIZAÇÃO
   ============================================== */
document.addEventListener('DOMContentLoaded', () => {
    configurarWhatsApp();
    configurarGoogle();
    initModal();
    initHeader();
    initMenuMobile();
    initScrollSuave();
    initAnimacoes();
});
