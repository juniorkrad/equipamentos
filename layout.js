document.addEventListener("DOMContentLoaded", () => {
    
    // Captura o ano atual automaticamente
    const anoAtual = new Date().getFullYear();

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
        <div style="opacity: 0.8; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px; font-size: 0.75rem;">
            Catálogo de Equipamentos
        </div>

        <div style="margin-bottom: 12px;">
            Desenvolvido por 
            
            <span style="white-space: nowrap;">
                <span class="material-symbols-outlined footer-icon">person</span>
                <strong>@juniorkrad</strong>,
            </span>

            <span style="white-space: nowrap;">
                <span class="material-symbols-outlined footer-icon">person</span>
                <strong>@fabiopsferreira</strong>
            </span>
            
            & 
            
            <span style="white-space: nowrap;">
                <span class="material-symbols-outlined footer-icon">smart_toy</span>
                <strong>Gemini</strong>
            </span>
        </div>

        <div style="font-size: 0.65rem; opacity: 0.5; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 8px; width: 80%; margin: 0 auto;">
            &copy; ${anoAtual} Infraestrutura & Monitoramento. Todos os direitos reservados.<br>
            Projeto registrado. Proibida a reprodução não autorizada.
        </div>
    `;

    // Inserir no DOM
    document.body.insertBefore(header, document.body.firstChild);
    document.body.appendChild(footer);

    // Avisa que o layout está pronto para o main.js rodar
    document.dispatchEvent(new Event('layoutCarregado'));
});