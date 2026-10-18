# 🏠 Landing Page — Corretor Hélio Junior

Landing page profissional desenvolvida para **Hélio Junior**, corretor de imóveis atuando na Grande Vitória - ES.

![Preview do projeto](preview-projeto.png)

![Preview do projeto](preview-projeto2.png)

---

## 🚀 Tecnologias

- HTML5
- CSS3 (variáveis customizáveis)
- JavaScript puro
- [Tailwind CSS](https://tailwindcss.com/) via CDN
- [Font Awesome](https://fontawesome.com/) via CDN
- [Google Fonts](https://fonts.google.com/) — Playfair Display + Inter

---

## ✨ Funcionalidades

- Layout responsivo (mobile e desktop)
- Modal de imóveis por categoria (Apartamentos, Casas, Lançamentos, Comercial, Terrenos, Aluguel)
- Botão flutuante do WhatsApp com animação de pulso
- Mensagem automática no WhatsApp por imóvel específico
- Animações de entrada ao rolar a página
- Header que fica sólido ao rolar
- Integração com Google Meu Negócio (opcional)

---

## 📁 Estrutura

```
corretor-helio-junior/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    └── images/
        └── imoveis/   ← fotos dos imóveis
```

---

## ⚙️ Como personalizar

### WhatsApp
Em `js/script.js`, altere o número:
```js
const CONFIG = {
    whatsapp: '5527999999999', // DDI + DDD + número
};
```

### Cadastrar imóveis
Em `js/script.js`, na seção `IMOVEIS`, adicione ou edite os imóveis de cada categoria. Cada imóvel aceita os campos:
- `titulo`, `local`, `descricao`, `preco`
- `quartos`, `suites`, `banheiros`, `garagem`, `area`
- `foto` → caminho da imagem em `assets/images/imoveis/`

### Cores
Em `css/style.css`, edite as variáveis no topo:
```css
:root {
    --dourado:       #C9A84C;
    --navy-escuro:   #060F1E;
}
```

---

## 🌐 Deploy

> 🚧 **Projeto em construção** — em breve hospedado na [Vercel](https://vercel.com/) com domínio próprio.

---

## 📄 Licença

Projeto desenvolvido por [ganhodev](https://github.com/ganhodev). Uso restrito ao cliente.
