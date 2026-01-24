document.addEventListener("DOMContentLoaded", () => {
    
    // --- CABEÇALHO ---
    const header = document.createElement('header');
    header.innerHTML = `
        <div class="brand">
            <img src="imagens/banner.png" alt="Logo Projeto" class="logo-banner" onerror="this.style.display='none'; this.insertAdjacentHTML('afterend', '<h3>Catálogo NOC</h3>')">
        </div>

        <div class="header-title">
            Catálogo de Equipamentos
        </div>

        <select id="equipamento-select" class="md-select">
            <option value="" disabled selected>Selecione um equipamento...</option>
        </select>
    `;

    // --- RODAPÉ ---
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p>&copy; 2026 Infraestrutura & Monitoramento | Desenvolvido internamente</p>
    `;

    // Inserir no DOM
    document.body.insertBefore(header, document.body.firstChild);
    document.body.appendChild(footer);

    // Avisa que o layout está pronto para o main.js rodar
    document.dispatchEvent(new Event('layoutCarregado'));
});