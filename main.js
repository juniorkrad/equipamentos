// --- BANCO DE DADOS DOS EQUIPAMENTOS ---
const equipamentos = [
    {
        id: "dlink_dir610",
        fabricante: "D-Link",
        logo: "imagens/logos/d-link.png",
        modelo: "DIR610",
        imagem: "imagens/equipamentos/dlink_dir610.gif", 
        specs: {
            "LAN": "(4 portas) (fast - 10/100)",
            "Wi-Fi 2.4GHz": "✅ (baixa velocidade) (alto alcance)",
            "Wi-Fi 5GHz": "❌ (alta velocidade) (baixo alcance)",
            "Telefonia": "❌ (não possui)",
            "PON (Fibra)": "❌ (porta PON)",
            "Wi-Fi Plus": "✅ (recomendado)",
            "Precisa ONU": "✅ (sim)",
            "Alta Velocidade": "❌ (limitado a 100Mb)"
        },
        obs: "Equipamento recomendado para utilização do serviço **Wi-Fi Plus**."
    },
    {
        id: "huawei_eg8145v5",
        fabricante: "Huawei",
        modelo: "EG8145V5",
        // Sem logo definida
        imagem: "imagens/equipamentos/ont-huawei.png",
        specs: {
            "LAN": "4 Portas - GIGA (10/100/1000)",
            "Wi-Fi 2.4GHz": "✅",
            "Wi-Fi 5GHz": "✅",
            "Telefonia": "✅ 1 Porta",
            "PON (Fibra)": "✅ Sim (GPON)"
        },
        obs: "Equipamento padrão para planos acima de 500Mb."
    },
    {
        id: "tplink_wr840",
        fabricante: "TP-Link",
        logo: "imagens/logos/tp-link.png",
        modelo: "WR840",
        imagem: "imagens/equipamentos/tplink_wr840.gif", 
        specs: {
            "LAN": "(4 portas) (fast - 10/100)",
            "Wi-Fi 2.4GHz": "✅ (baixa velocidade) (alto alcance)",
            "Wi-Fi 5GHz": "❌ (alta velocidade) (baixo alcance)",
            "Telefonia": "❌ (não possui)",
            "PON (Fibra)": "❌ (porta PON)",
            "Wi-Fi Plus": "✅ (recomendado)",
            "Precisa ONU": "✅ (sim)",
            "Alta Velocidade": "❌ (limitado a 100Mb)"
        },
        obs: ""
    }
];


// --- LÓGICA DO SISTEMA ---
document.addEventListener('layoutCarregado', () => {
    const select = document.getElementById('equipamento-select');
    const mainContainer = document.getElementById('conteudo-principal');

    // 1. Mapa de Ícones (Chave -> Material Symbol)
    function getIconePorChave(chave) {
        const mapa = {
            "LAN": "lan", 
            "Wi-Fi 2.4GHz": "wifi",
            "Wi-Fi 5GHz": "wifi", 
            "Telefonia": "call",
            "PON (Fibra)": "cable", 
            "Wi-Fi Plus": "wifi_tethering", 
            "Precisa ONU": "hub", 
            "Alta Velocidade": "rocket_launch"
        };
        return mapa[chave] || "info";
    }

    // 2. Função para formatar os valores (Lógica Inteligente de Portas + Formatação Geral)
    function formatarValor(texto) {
        let prefixoPortas = "";

        // --- A. LÓGICA INTELIGENTE DE PORTAS ---
        // Verifica se o texto contém a palavra "portas" e extrai o número
        if (texto.toLowerCase().includes("portas")) {
            const match = texto.match(/(\d+)\s*([Pp]ortas)/); 
            if (match) {
                const qtd = parseInt(match[1], 10);
                
                // NOTA: Usei margin: 0 4px para ficar IDÊNTICO ao alinhamento do ✅ e ❌ abaixo
                if (qtd >= 4) {
                    // 4 ou mais: Ícone Check Verde
                    prefixoPortas = `<span class="material-symbols-outlined" style="vertical-align: middle; margin: 0 4px; color: #2e7d32;">check_circle</span>`;
                } else {
                    // Menos de 4: Ícone Error Amarelo (Atenção)
                    prefixoPortas = `<span class="material-symbols-outlined" style="vertical-align: middle; margin: 0 4px; color: #fbc02d;">error</span>`;
                }
            }
        }

        // --- B. LÓGICA PADRÃO (Substitui emojis e formata Check/X) ---
        // Garante a limpeza de emojis antigos
        texto = texto.replace("4️⃣🚪", "4 portas");

        // Formata Check Verde (✅)
        if (texto.includes("✅")) {
            texto = texto.replace(/✅/g, `<span class="material-symbols-outlined" style="color: #2e7d32; vertical-align: middle; margin: 0 4px;">check_circle</span>`);
        }
        // Formata X Vermelho (❌)
        if (texto.includes("❌")) {
            texto = texto.replace(/❌/g, `<span class="material-symbols-outlined" style="color: #c62828; vertical-align: middle; margin: 0 4px;">cancel</span>`);
        }

        // Retorna o ícone de status da porta (se houver) + o texto formatado
        return prefixoPortas + texto;
    }

    // 3. Popular o Menu Suspenso
    equipamentos.forEach(eq => {
        const option = document.createElement('option');
        option.value = eq.id;
        option.textContent = `${eq.fabricante} - ${eq.modelo}`;
        select.appendChild(option);
    });

    // 4. Função para Renderizar
    function renderizarEquipamento(id) {
        const item = equipamentos.find(e => e.id === id);
        
        if (!item) return;

        // Gerar linhas da tabela
        let linhasTabela = '';
        for (const [chave, valor] of Object.entries(item.specs)) {
            
            // Pega o ícone baseado no nome da especificação
            const iconeNome = getIconePorChave(chave);
            
            // Cria o HTML do ícone com estilo inline para alinhar
            const iconeHTML = `<span class="material-symbols-outlined" style="vertical-align: middle; margin-right: 8px; color: var(--md-sys-color-primary);">${iconeNome}</span>`;

            // Formata o valor
            const valorFormatado = formatarValor(valor);

            linhasTabela += `
                <tr>
                    <td style="font-size: 1.1em; display: flex; align-items: center;">
                        ${iconeHTML} ${chave}
                    </td>
                    <td>${valorFormatado}</td>
                </tr>
            `;
        }

        // LÓGICA DA LOGO
        const fabricanteHTML = item.logo 
            ? `<img src="${item.logo}" alt="${item.fabricante}" class="brand-logo">`
            : `<h2>${item.fabricante}</h2>`;

        const html = `
            <div class="equipment-card">
                <div class="card-image-area">
                    <img src="${item.imagem}" alt="Visualização ${item.modelo}" onerror="this.src='https://via.placeholder.com/400x300?text=Imagem+N%C3%A3o+Encontrada'">
                </div>

                <div class="card-details-area">
                    
                    ${fabricanteHTML}

                    <h1>${item.modelo}</h1>

                    <table class="specs-table">
                        <tbody>
                            ${linhasTabela}
                        </tbody>
                    </table>

                    ${item.obs ? `<div class="obs-box"><strong>Observação:</strong> ${item.obs}</div>` : ''}
                </div>
            </div>
        `;

        mainContainer.style.opacity = 0;
        
        setTimeout(() => {
            mainContainer.innerHTML = html;
            mainContainer.style.opacity = 1;
            mainContainer.style.transition = "opacity 0.3s ease-in";
        }, 150);
    }

    select.addEventListener('change', (e) => {
        renderizarEquipamento(e.target.value);
    });
});