// --- BANCO DE DADOS DOS EQUIPAMENTOS ---
const equipamentos = [
    {
        id: "dlink_dir610",
        categoria: "ROTEADOR", 
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
        id: "tplink_wr840",
        categoria: "ROTEADOR", 
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
    },
    {
        id: "furukawa_420_10r",
        categoria: "ONU", 
        fabricante: "Furukawa",
        logo: "imagens/logos/furukawa.png",
        modelo: "420-10R",
        imagem: "imagens/equipamentos/furukawa_420.gif", 
        specs: {
            "LAN": "(1 porta) (giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "❌ (baixa velocidade) (alto alcance)",
            "Wi-Fi 5Ghz": "❌ (alta velocidade) (baixo alcance)",
            "Telefonia": "❌ (não possui)",
            "Fibra": "✅ (porta PON)",
            "Wi-Fi Plus": "❌ (não recomendado)",
            "Precisa Roteador": "✅ (sim)",
            "Alta Velocidade": "✅ (ultrapassa 100Mb)"
        },
        obs: ""
    },
    {
        id: "furukawa_100",
        categoria: "ONU", 
        fabricante: "Furukawa",
        logo: "imagens/logos/furukawa.png",
        modelo: "100",
        imagem: "imagens/equipamentos/furukawa_100.gif", 
        specs: {
            "LAN": "(1 porta) (giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "❌ (baixa velocidade) (alto alcance)",
            "Wi-Fi 5Ghz": "❌ (alta velocidade) (baixo alcance)",
            "Telefonia": "❌ (não possui)",
            "Fibra": "✅ (porta PON)",
            "Wi-Fi Plus": "❌ (não recomendado)",
            "Precisa Roteador": "✅ (sim)",
            "Alta Velocidade": "✅ (ultrapassa 100Mb)"
        },
        obs: ""
    },
    {
        id: "furukawa_630",
        categoria: "ONU", 
        fabricante: "Furukawa",
        logo: "imagens/logos/furukawa.png",
        modelo: "630",
        imagem: "imagens/equipamentos/furukawa_630.gif", 
        specs: {
            "LAN": "(1 porta) (giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "❌ (baixa velocidade) (alto alcance)",
            "Wi-Fi 5Ghz": "❌ (alta velocidade) (baixo alcance)",
            "Telefonia": "❌ (não possui)",
            "Fibra": "✅ (porta PON)",
            "Wi-Fi Plus": "❌ (não recomendado)",
            "Precisa Roteador": "✅ (sim)",
            "Alta Velocidade": "✅ (ultrapassa 100Mb)"
        },
        obs: ""
    },
    {
        id: "furukawa_423_41w",
        categoria: "ONT", 
        fabricante: "Furukawa",
        logo: "imagens/logos/furukawa.png",
        modelo: "423-41W/AC",
        imagem: "imagens/equipamentos/furukawa_423.gif", 
        specs: {
            "LAN": "(4 portas) (giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ (baixa velocidade) (alto alcance)",
            "Wi-Fi 5Ghz": "✅ (alta velocidade) (baixo alcance)",
            "Telefonia": "✅ (não possui)",
            "Fibra": "✅ (porta PON)",
            "Wi-Fi Plus": "❌ (não recomendado)",
            "Precisa Roteador": "❌ (não)",
            "Alta Velocidade": "✅ (ultrapassa 100Mb)"
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
            "Wi-Fi 2.4Ghz": "wifi", 
            "Wi-Fi 5GHz": "wifi", 
            "Wi-Fi 5Ghz": "wifi", 
            "Telefonia": "call",
            "PON (Fibra)": "cable", 
            "Fibra": "cable", 
            "Wi-Fi Plus": "wifi_tethering", 
            "Precisa ONU": "hub", 
            "Precisa Roteador": "router", 
            "Alta Velocidade": "rocket_launch"
        };
        return mapa[chave] || "info";
    }

    // 2. Função para formatar os valores (Lógica Inteligente de Portas + Formatação Geral)
    function formatarValor(texto) {
        let prefixoPortas = "";

        // --- A. LÓGICA INTELIGENTE DE PORTAS ---
        if (texto.toLowerCase().includes("porta")) {
            const match = texto.match(/(\d+)\s*([Pp]ortas?)/); 
            if (match) {
                const qtd = parseInt(match[1], 10);
                
                if (qtd >= 4) {
                    prefixoPortas = `<span class="material-symbols-outlined" style="vertical-align: middle; margin: 0 4px; color: #2e7d32;">check_circle</span>`;
                } else {
                    prefixoPortas = `<span class="material-symbols-outlined" style="vertical-align: middle; margin: 0 4px; color: #fbc02d;">error</span>`;
                }
            }
        }

        // --- B. LÓGICA PADRÃO ---
        texto = texto.replace("4️⃣🚪", "4 portas");

        if (texto.includes("✅")) {
            texto = texto.replace(/✅/g, `<span class="material-symbols-outlined" style="color: #2e7d32; vertical-align: middle; margin: 0 4px;">check_circle</span>`);
        }
        if (texto.includes("❌")) {
            texto = texto.replace(/❌/g, `<span class="material-symbols-outlined" style="color: #c62828; vertical-align: middle; margin: 0 4px;">cancel</span>`);
        }

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
            const iconeNome = getIconePorChave(chave);
            const iconeHTML = `<span class="material-symbols-outlined" style="vertical-align: middle; margin-right: 8px; color: var(--md-sys-color-primary);">${iconeNome}</span>`;
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

        // LÓGICA DO BADGE
        const categoriaHTML = item.categoria 
            ? `<div class="category-badge">${item.categoria}</div>` 
            : '';

        const html = `
            <div class="equipment-card">
                <div class="card-image-area">
                    <img src="${item.imagem}" alt="Visualização ${item.modelo}" onerror="this.src='https://via.placeholder.com/400x300?text=Imagem+N%C3%A3o+Encontrada'">
                </div>

                <div class="card-details-area">
                    
                    <div class="card-header">
                        ${fabricanteHTML}
                        ${categoriaHTML}
                    </div>

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