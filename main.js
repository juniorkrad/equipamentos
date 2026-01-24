// --- BANCO DE DADOS DOS EQUIPAMENTOS ---
// NOTA: Removi os emojis das chaves para deixar o código mais profissional.
// Os ícones serão inseridos dinamicamente pela função lá embaixo.
const equipamentos = [
    {
        id: "dlink_dir610",
        fabricante: "D-Link",
        logo: "imagens/logos/d-link.png",
        modelo: "DIR610",
        imagem: "imagens/equipamentos/dlink_dir610.gif", 
        specs: {
            "LAN": "4 Portas - FAST (10/100)",
            "Wi-Fi 2.4GHz": "✅ (Baixa Vel. / Alto Alcance)",
            "Wi-Fi 5GHz": "❌ (Alta Vel. / Baixo Alcance)",
            "Telefonia": "❌ Não possui porta RJ11",
            "PON (Fibra)": "❌ Não (Requer ONU)",
            "Wi-Fi Plus": "✅ (Recomendado)",
            "Precisa ONU": "✅ Sim",
            "Alta Velocidade": "❌ (Limitado a 100Mb)"
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
            "Wi-Fi 5GHz": "wifi", // ATUALIZADO: Agora usa o mesmo ícone do 2.4GHz
            "Telefonia": "call",
            "PON (Fibra)": "cable", // Representando fibra/cabo
            "Wi-Fi Plus": "wifi_tethering", // Representando expansão de sinal
            "Precisa ONU": "hub", // Representando equipamento extra
            "Alta Velocidade": "rocket_launch"
        };
        // Retorna o ícone mapeado ou 'info' se não achar
        return mapa[chave] || "info";
    }

    // 2. Função para formatar os valores (Troca ✅ e ❌ por ícones bonitos)
    function formatarValor(texto) {
        if (texto.includes("✅")) {
            return texto.replace("✅", `<span class="material-symbols-outlined" style="color: #2e7d32; vertical-align: middle; margin-right: 5px;">check_circle</span>`);
        }
        if (texto.includes("❌")) {
            return texto.replace("❌", `<span class="material-symbols-outlined" style="color: #c62828; vertical-align: middle; margin-right: 5px;">cancel</span>`);
        }
        // Se tiver o emoji de porta (4️⃣🚪), removemos e deixamos só texto limpo se quiser, 
        // mas aqui vou apenas retornar o texto processado.
        return texto.replace("4️⃣🚪", "4 Portas"); 
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

            // Formata o valor (check verde / x vermelho)
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