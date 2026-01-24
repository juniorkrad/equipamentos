// --- BANCO DE DADOS DOS EQUIPAMENTOS ---
const equipamentos = [
    {
        id: "dlink_dir610",
        fabricante: "D-Link",
        // NOVO: Caminho da logo
        logo: "imagens/logos/d-link.png",
        modelo: "DIR610",
        imagem: "imagens/equipamentos/dlink_dir610.gif", 
        specs: {
            "🌐 LAN": "4️⃣🚪 - FAST (10/100)",
            "🛜 Wi-Fi 2.4GHz": "✅ (Baixa Vel. / Alto Alcance)",
            "🛜 Wi-Fi 5GHz": "❌ (Alta Vel. / Baixo Alcance)",
            "📞 Telefonia": "❌ Não possui porta RJ11",
            "📶 PON (Fibra)": "❌ Não (Requer ONU)",
            "🛜 Wi-Fi Plus➕": "✅ (Recomendado)",
            "⚡ Precisa ONU": "✅ Sim",
            "🚀 Alta Velocidade": "❌ (Limitado a 100Mb)"
        },
        obs: "Equipamento recomendado para utilização do serviço **Wi-Fi Plus**."
    },
    {
        id: "huawei_eg8145v5",
        fabricante: "Huawei",
        modelo: "EG8145V5",
        // Sem logo definida, ele usará o texto automaticamente
        imagem: "imagens/equipamentos/ont-huawei.png",
        specs: {
            "🌐 LAN": "4️⃣🚪 - GIGA (10/100/1000)",
            "🛜 Wi-Fi 2.4GHz": "✅",
            "🛜 Wi-Fi 5GHz": "✅",
            "📞 Telefonia": "✅ 1 Porta",
            "📶 PON (Fibra)": "✅ Sim (GPON)"
        },
        obs: "Equipamento padrão para planos acima de 500Mb."
    }
];


// --- LÓGICA DO SISTEMA (Não precisa mexer aqui) ---
document.addEventListener('layoutCarregado', () => {
    const select = document.getElementById('equipamento-select');
    const mainContainer = document.getElementById('conteudo-principal');

    // 1. Popular o Menu Suspenso
    equipamentos.forEach(eq => {
        const option = document.createElement('option');
        option.value = eq.id;
        option.textContent = `${eq.fabricante} - ${eq.modelo}`;
        select.appendChild(option);
    });

    // 2. Função para Criar o HTML do Equipamento
    function renderizarEquipamento(id) {
        const item = equipamentos.find(e => e.id === id);
        
        if (!item) return;

        // Gerar linhas da tabela
        let linhasTabela = '';
        for (const [chave, valor] of Object.entries(item.specs)) {
            linhasTabela += `
                <tr>
                    <td style="font-size: 1.1em;">${chave}</td>
                    <td>${valor}</td>
                </tr>
            `;
        }

        // LÓGICA DA LOGO: Verifica se existe imagem da logo cadastrada
        const fabricanteHTML = item.logo 
            ? `<img src="${item.logo}" alt="${item.fabricante}" class="brand-logo">`
            : `<h2>${item.fabricante}</h2>`;

        // Criar o Card HTML
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

        // Inserir na página com transição
        mainContainer.style.opacity = 0;
        
        setTimeout(() => {
            mainContainer.innerHTML = html;
            mainContainer.style.opacity = 1;
            mainContainer.style.transition = "opacity 0.3s ease-in";
        }, 150);
    }

    // 3. Ouvir evento de troca no menu
    select.addEventListener('change', (e) => {
        renderizarEquipamento(e.target.value);
    });
});