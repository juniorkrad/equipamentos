// --- BANCO DE DADOS DOS EQUIPAMENTOS ---
const equipamentos = [
    // --- ROTEADORES EXISTENTES ---
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
    // --- NOVOS ROTEADORES CADASTRADOS ---
    {
        id: "tplink_archer_c5",
        categoria: "ROTEADOR",
        fabricante: "TP-Link",
        logo: "imagens/logos/tplink.png",
        modelo: "ARCHER C5",
        imagem: "imagens/equipamentos/tplink_archer-c5.gif",
        specs: {
            "LAN": "(4 portas) (giga - 100/1000)",
            "Wi-Fi 2.4GHz": "✅ (baixa velocidade) (alto alcance)",
            "Wi-Fi 5GHz": "✅ (alta velocidade) (baixo alcance)",
            "Telefonia": "❌ (não possui)",
            "Fibra": "❌ (porta PON)",
            "Wi-Fi Plus": "❌ (não recomendado)",
            "Precisa ONU": "✅ (sim)",
            "Alta Velocidade": "✅ (ultrapassa 100Mb)"
        },
        obs: ""
    },
    {
        id: "greatek_ac1200",
        categoria: "ROTEADOR",
        fabricante: "Greatek",
        logo: "imagens/logos/greatek.png",
        modelo: "AC1200",
        imagem: "imagens/equipamentos/greatek_ac1200.gif",
        specs: {
            "LAN": "(4 portas) (giga - 100/1000)",
            "Wi-Fi 2.4GHz": "✅ (baixa velocidade) (alto alcance)",
            "Wi-Fi 5GHz": "✅ (alta velocidade) (baixo alcance)",
            "Telefonia": "❌ (não possui)",
            "Fibra": "❌ (porta PON)",
            "Wi-Fi Plus": "❌ (não recomendado)",
            "Precisa ONU": "✅ (sim)",
            "Alta Velocidade": "✅ (ultrapassa 100Mb)"
        },
        obs: ""
    },
    {
        id: "mercusys_ac1200",
        categoria: "ROTEADOR",
        fabricante: "Mercusys",
        logo: "imagens/logos/mercusys.png",
        modelo: "AC1200",
        imagem: "imagens/equipamentos/mercusys_ac1200.gif",
        specs: {
            "LAN": "(4 portas) (giga - 100/1000)",
            "Wi-Fi 2.4GHz": "✅ (baixa velocidade) (alto alcance)",
            "Wi-Fi 5GHz": "✅ (alta velocidade) (baixo alcance)",
            "Telefonia": "❌ (não possui)",
            "Fibra": "❌ (porta PON)",
            "Wi-Fi Plus": "❌ (não recomendado)",
            "Precisa ONU": "✅ (sim)",
            "Alta Velocidade": "✅ (ultrapassa 100Mb)"
        },
        obs: ""
    },
    {
        id: "mercusys_mw301r",
        categoria: "ROTEADOR",
        fabricante: "Mercusys",
        logo: "imagens/logos/mercusys.png",
        modelo: "MW301R",
        imagem: "imagens/equipamentos/mercusys_mw301r.gif",
        specs: {
            "LAN": "(4 portas) (giga - 100/1000)",
            "Wi-Fi 2.4GHz": "✅ (baixa velocidade) (alto alcance)",
            "Wi-Fi 5GHz": "✅ (alta velocidade) (baixo alcance)",
            "Telefonia": "❌ (não possui)",
            "Fibra": "❌ (porta PON)",
            "Wi-Fi Plus": "❌ (não recomendado)",
            "Precisa ONU": "✅ (sim)",
            "Alta Velocidade": "✅ (ultrapassa 100Mb)"
        },
        obs: ""
    },
    {
        id: "trendnet_tew731br",
        categoria: "ROTEADOR",
        fabricante: "Trendnet",
        logo: "imagens/logos/tendnet.png",
        modelo: "TEW-731BR",
        imagem: "imagens/equipamentos/trendnet_tew-731br.gif",
        specs: {
            "LAN": "(4 portas) (fast - 10/100)",
            "Wi-Fi 2.4GHz": "✅ (baixa velocidade) (alto alcance)",
            "Wi-Fi 5GHz": "❌ (alta velocidade) (baixo alcance)",
            "Telefonia": "❌ (não possui)",
            "Fibra": "❌ (porta PON)",
            "Wi-Fi Plus": "✅ (recomendado)",
            "Precisa ONU": "✅ (sim)",
            "Alta Velocidade": "❌ (limitado a 100Mb)"
        },
        obs: ""
    },
    // --- ONUs FURUKAWA ---
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
        modelo: "GPON 630-10B",
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
    },
    // --- PARKS ---
    {
        id: "parks_fiberlink_101",
        categoria: "ONU", 
        fabricante: "Parks",
        logo: "imagens/logos/parks.png",
        modelo: "FIBERLINK 101",
        imagem: "imagens/equipamentos/parks_101.gif", 
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
        id: "parks_fiberlink_410",
        categoria: "ONT", 
        fabricante: "Parks",
        logo: "imagens/logos/parks.png",
        modelo: "FIBERLINK 410 AC1200",
        imagem: "imagens/equipamentos/parks_410.gif", 
        specs: {
            "LAN": "(4 portas) (giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ (baixa velocidade) (alto alcance)",
            "Wi-Fi 5Ghz": "✅ (alta velocidade) (baixo alcance)",
            "Telefonia": "✅ (possui)",
            "Fibra": "✅ (porta PON)",
            "Wi-Fi Plus": "❌ (não recomendado)",
            "Precisa Roteador": "❌ (não)",
            "Alta Velocidade": "✅ (ultrapassa 100Mb)"
        },
        obs: ""
    },
    {
        id: "parks_fiberlink_411",
        categoria: "ONT", 
        fabricante: "Parks",
        logo: "imagens/logos/parks.png",
        modelo: "FIBERLINK 411",
        imagem: "imagens/equipamentos/parks_411.gif", 
        specs: {
            "LAN": "(4 portas) (giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ (baixa velocidade) (alto alcance)",
            "Wi-Fi 5Ghz": "✅ (alta velocidade) (baixo alcance)",
            "Telefonia": "✅ (possui)",
            "Fibra": "✅ (porta PON)",
            "Wi-Fi Plus": "❌ (não recomendado)",
            "Precisa Roteador": "❌ (não)",
            "Alta Velocidade": "✅ (ultrapassa 100Mb)"
        },
        obs: ""
    },
    {
        id: "parks_fiberlink_501",
        categoria: "ONT", 
        fabricante: "Parks",
        logo: "imagens/logos/parks.png",
        modelo: "FIBERLINK 501",
        imagem: "imagens/equipamentos/parks_501.gif", 
        specs: {
            "LAN": "(2 portas) (giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ (baixa velocidade) (alto alcance)",
            "Wi-Fi 5Ghz": "✅ (alta velocidade) (baixo alcance)",
            "Telefonia": "✅ (possui)",
            "Fibra": "✅ (porta PON)",
            "Wi-Fi Plus": "❌ (não recomendado)",
            "Precisa Roteador": "❌ (não)",
            "Alta Velocidade": "✅ (ultrapassa 100Mb)"
        },
        obs: ""
    },
    // --- NOKIA ---
    {
        id: "nokia_140w",
        categoria: "ONT", 
        fabricante: "Nokia",
        logo: "imagens/logos/nokia.png",
        modelo: "140W",
        imagem: "imagens/equipamentos/nokia_140w.gif", 
        specs: {
            "LAN": "(4 portas) (giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ (baixa velocidade) (alto alcance)",
            "Wi-Fi 5Ghz": "✅ (alta velocidade) (baixo alcance)",
            "Telefonia": "✅ (possui)",
            "Fibra": "✅ (porta PON)",
            "Wi-Fi Plus": "❌ (não recomendado)",
            "Precisa Roteador": "❌ (não)",
            "Alta Velocidade": "✅ (ultrapassa 100Mb)"
        },
        obs: ""
    },
    {
        id: "nokia_1425ga",
        categoria: "ONT", 
        fabricante: "Nokia",
        logo: "imagens/logos/nokia.png",
        modelo: "1425GA",
        imagem: "imagens/equipamentos/nokia_1425ga.gif", 
        specs: {
            "LAN": "(4 portas) (giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ (baixa velocidade) (alto alcance)",
            "Wi-Fi 5Ghz": "✅ (alta velocidade) (baixo alcance)",
            "Telefonia": "✅ (possui)",
            "Fibra": "✅ (porta PON)",
            "Wi-Fi Plus": "❌ (não recomendado)",
            "Precisa Roteador": "❌ (não)",
            "Alta Velocidade": "✅ (ultrapassa 100Mb)"
        },
        obs: ""
    },
    {
        id: "nokia_g2425ga",
        categoria: "ONT", 
        fabricante: "Nokia",
        logo: "imagens/logos/nokia.png",
        modelo: "G-2425G-A",
        imagem: "imagens/equipamentos/nokia_g-2425g-a.gif", 
        specs: {
            "LAN": "(4 portas) (giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ (baixa velocidade) (alto alcance)",
            "Wi-Fi 5Ghz": "✅ (alta velocidade) (baixo alcance)",
            "Telefonia": "✅ (possui)",
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

    // --- NOVA LÓGICA DE ORDENAÇÃO ---
    // Ordena o array de equipamentos alfabeticamente por Fabricante, depois Modelo
    equipamentos.sort((a, b) => {
        const nomeA = `${a.fabricante} ${a.modelo}`.toLowerCase();
        const nomeB = `${b.fabricante} ${b.modelo}`.toLowerCase();
        return nomeA.localeCompare(nomeB);
    });

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