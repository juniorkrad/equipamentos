// --- BANCO DE DADOS DOS EQUIPAMENTOS (FINAL - ONTs ATUALIZADAS) ---
const equipamentos = [
    // --- ROTEADORES (COM WI-FI PLUS) ---
    {
        id: "dlink_dir610",
        categoria: "ROTEADOR", 
        fabricante: "D-Link",
        modelo: "DIR610 (Wi-Fi Plus)",
        logo: "imagens/logos/d-link.png",
        imagem: "imagens/equipamentos/dlink_dir610.gif", 
        features: {
            "Alta Velocidade": "❌ Limite de 100Mb",
            "Porta PON": "❌ Fibra",
            "Portas LAN": "4 Portas (Fast - 10/100)",
            "Wi-Fi 2.4Ghz": "✅ Limite de Velocidade (alto alcance)",
            "Wi-Fi 5Ghz": "❌ Não Possui",
            "Telefonia": "❌ Não Possui"
        },
        details: {
            "Precisa ONU": "✅ Sim",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "✅ Sim",
            "Usar como Wi-Fi Plus": "✅ Sim"
        },
        obs: "Recomendado para utilização no serviço Wi-Fi Plus."
    },
    {
        id: "dlink_dir615",
        categoria: "ROTEADOR",
        fabricante: "D-Link",
        modelo: "DIR615 (Wi-Fi Plus)",
        logo: "imagens/logos/d-link.png",
        imagem: "imagens/equipamentos/dlink_dir615.gif",
        features: {
            "Alta Velocidade": "❌ Limite de 100Mb",
            "Porta PON": "❌ Fibra",
            "Portas LAN": "4 Portas (Fast - 10/100)",
            "Wi-Fi 2.4Ghz": "✅ Limite de Velocidade (alto alcance)",
            "Wi-Fi 5Ghz": "❌ Não Possui",
            "Telefonia": "❌ Não Possui"
        },
        details: {
            "Precisa ONU": "✅ Sim",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "✅ Sim",
            "Usar como Wi-Fi Plus": "✅ Sim"
        },
        obs: "Recomendado para utilização no serviço Wi-Fi Plus."
    },
    {
        id: "intelbras_iwr3000n",
        categoria: "ROTEADOR", 
        fabricante: "Intelbras",
        modelo: "IWR 3000N (Wi-Fi Plus)",
        logo: "imagens/logos/intelbras.png",
        imagem: "imagens/equipamentos/intelbras.gif", 
        features: {
            "Alta Velocidade": "❌ Limite de 100Mb",
            "Porta PON": "❌ Fibra",
            "Portas LAN": "4 Portas (Fast - 10/100)",
            "Wi-Fi 2.4Ghz": "✅ Limite de Velocidade (alto alcance)",
            "Wi-Fi 5Ghz": "❌ Não Possui",
            "Telefonia": "❌ Não Possui"
        },
        details: {
            "Precisa ONU": "✅ Sim",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "✅ Sim",
            "Usar como Wi-Fi Plus": "✅ Sim"
        },
        obs: "Recomendado para utilização no serviço Wi-Fi Plus."
    },
    {
        id: "multilaser_re172",
        categoria: "ROTEADOR", 
        fabricante: "Multilaser",
        modelo: "300MBPS RE172 (Wi-Fi Plus)",
        logo: "imagens/logos/multilaser.png",
        imagem: "imagens/equipamentos/multilaser_300mbps.gif", 
        features: {
            "Alta Velocidade": "❌ Limite de 100Mb",
            "Porta PON": "❌ Fibra",
            "Portas LAN": "4 Portas (Fast - 10/100)",
            "Wi-Fi 2.4Ghz": "✅ Limite de Velocidade (alto alcance)",
            "Wi-Fi 5Ghz": "❌ Não Possui",
            "Telefonia": "❌ Não Possui"
        },
        details: {
            "Precisa ONU": "✅ Sim",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "✅ Sim",
            "Usar como Wi-Fi Plus": "✅ Sim"
        },
        obs: "Recomendado para utilização no serviço Wi-Fi Plus."
    },
    {
        id: "smartlan_aprio150",
        categoria: "ROTEADOR", 
        fabricante: "Smartlan",
        modelo: "APRIO150CLASSIC (Wi-Fi Plus)",
        logo: "imagens/logos/smartlan.jpg",
        imagem: "imagens/equipamentos/smartlan.gif", 
        features: {
            "Alta Velocidade": "❌ Limite de 100Mb",
            "Porta PON": "❌ Fibra",
            "Portas LAN": "4 Portas (Fast - 10/100)",
            "Wi-Fi 2.4Ghz": "✅ Limite de Velocidade (alto alcance)",
            "Wi-Fi 5Ghz": "❌ Não Possui",
            "Telefonia": "❌ Não Possui"
        },
        details: {
            "Precisa ONU": "✅ Sim",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "✅ Sim",
            "Usar como Wi-Fi Plus": "✅ Sim"
        },
        obs: "Recomendado para utilização no serviço Wi-Fi Plus."
    },
    {
        id: "tplink_wr840",
        categoria: "ROTEADOR", 
        fabricante: "TP-Link",
        modelo: "WR840 (Wi-Fi Plus)",
        logo: "imagens/logos/tp-link.png",
        imagem: "imagens/equipamentos/tplink_wr840.gif", 
        features: {
            "Alta Velocidade": "❌ Limite de 100Mb",
            "Porta PON": "❌ Fibra",
            "Portas LAN": "4 Portas (Fast - 10/100)",
            "Wi-Fi 2.4Ghz": "✅ Limite de Velocidade (alto alcance)",
            "Wi-Fi 5Ghz": "❌ Não Possui",
            "Telefonia": "❌ Não Possui"
        },
        details: {
            "Precisa ONU": "✅ Sim",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "✅ Sim",
            "Usar como Wi-Fi Plus": "✅ Sim"
        },
        obs: "Recomendado para utilização no serviço Wi-Fi Plus."
    },
    {
        id: "trendnet_tew731br",
        categoria: "ROTEADOR",
        fabricante: "Trendnet",
        modelo: "TEW-731BR (Wi-Fi Plus)",
        logo: "imagens/logos/trendnet.png", 
        imagem: "imagens/equipamentos/trendnet_tew-731br.gif",
        features: {
            "Alta Velocidade": "❌ Limite de 100Mb",
            "Porta PON": "❌ Fibra",
            "Portas LAN": "4 Portas (Fast - 10/100)",
            "Wi-Fi 2.4Ghz": "✅ Limite de Velocidade (alto alcance)",
            "Wi-Fi 5Ghz": "❌ Não Possui",
            "Telefonia": "❌ Não Possui"
        },
        details: {
            "Precisa ONU": "✅ Sim",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "✅ Sim",
            "Usar como Wi-Fi Plus": "✅ Sim"
        },
        obs: "Recomendado para utilização no serviço Wi-Fi Plus."
    },
    // --- MERCUSYS MW301R (WI-FI PLUS) ---
    {
        id: "mercusys_mw301r",
        categoria: "ROTEADOR",
        fabricante: "Mercusys",
        modelo: "MW301R (Wi-Fi Plus)",
        logo: "imagens/logos/mercusys.png",
        imagem: "imagens/equipamentos/mercusys_mw301r.gif",
        features: {
            "Alta Velocidade": "❌ Limite de 100Mb",
            "Porta PON": "❌ Fibra",
            "Portas LAN": "2 Portas (Fast - 10/100)",
            "Wi-Fi 2.4Ghz": "✅ Limite de Velocidade (alto alcance)",
            "Wi-Fi 5Ghz": "❌ Não Possui",
            "Telefonia": "❌ Não Possui"
        },
        details: {
            "Precisa ONU": "✅ Sim",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "✅ Sim",
            "Usar como Wi-Fi Plus": "✅ Sim"
        },
        obs: "Recomendado para utilização no serviço Wi-Fi Plus."
    },

    // --- ROTEADORES AC (PRINCIPAIS) ---
    {
        id: "dlink_dir825",
        categoria: "ROTEADOR",
        fabricante: "D-Link",
        modelo: "DIR825",
        logo: "imagens/logos/d-link.png",
        imagem: "imagens/equipamentos/dlink_dir825.gif",
        features: {
            "Alta Velocidade": "✅ Ultrapassa 100Mb",
            "Porta PON": "❌ Fibra",
            "Portas LAN": "4 Portas (Giga - 100/1000)", 
            "Wi-Fi 2.4Ghz": "✅ Limite de Velocidade (alto alcance)",
            "Wi-Fi 5Ghz": "✅ Alta Velocidade (baixo alcance)",
            "Telefonia": "❌ Não Possui"
        },
        details: {
            "Precisa ONU": "✅ Sim",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "✅ Sim",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: "Utilizar como equipamento principal da rede ao lado de uma ONU."
    },
    {
        id: "greatek_ac1200",
        categoria: "ROTEADOR",
        fabricante: "Greatek",
        modelo: "AC1200",
        logo: "imagens/logos/greatek.png",
        imagem: "imagens/equipamentos/greatek_ac1200.gif",
        features: {
            "Alta Velocidade": "✅ Ultrapassa 100Mb",
            "Porta PON": "❌ Fibra",
            "Portas LAN": "4 Portas (Giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ Limite de Velocidade (alto alcance)",
            "Wi-Fi 5Ghz": "✅ Alta Velocidade (baixo alcance)",
            "Telefonia": "❌ Não Possui"
        },
        details: {
            "Precisa ONU": "✅ Sim",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "✅ Sim",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: "Utilizar como equipamento principal da rede ao lado de uma ONU."
    },
    {
        id: "huawei_ax2",
        categoria: "ROTEADOR", 
        fabricante: "Huawei",
        modelo: "WIFI 6 AX2",
        logo: "imagens/logos/huawei.png",
        imagem: "imagens/equipamentos/huawei_wifi-6-ax2.gif", 
        features: {
            "Alta Velocidade": "✅ Ultrapassa 100Mb",
            "Porta PON": "❌ Fibra",
            "Portas LAN": "3 Portas (Giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ Limite de Velocidade (alto alcance)",
            "Wi-Fi 5Ghz": "✅ Alta Velocidade (baixo alcance)",
            "Telefonia": "❌ Não Possui"
        },
        details: {
            "Precisa ONU": "✅ Sim",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "✅ Sim",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: "Utilizar como equipamento principal da rede ao lado de uma ONU."
    },
    {
        id: "huawei_ws5200",
        categoria: "ROTEADOR", 
        fabricante: "Huawei",
        modelo: "WIFI WS5200",
        logo: "imagens/logos/huawei.png",
        imagem: "imagens/equipamentos/huawei_wifi-ws5200.gif", 
        features: {
            "Alta Velocidade": "✅ Ultrapassa 100Mb",
            "Porta PON": "❌ Fibra",
            "Portas LAN": "3 Portas (Giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ Limite de Velocidade (alto alcance)",
            "Wi-Fi 5Ghz": "✅ Alta Velocidade (baixo alcance)",
            "Telefonia": "❌ Não Possui"
        },
        details: {
            "Precisa ONU": "✅ Sim",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "✅ Sim",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: "Utilizar como equipamento principal da rede ao lado de uma ONU."
    },
    {
        id: "mercusys_ac1200",
        categoria: "ROTEADOR",
        fabricante: "Mercusys",
        modelo: "AC1200",
        logo: "imagens/logos/mercusys.png",
        imagem: "imagens/equipamentos/mercusys_ac1200.gif",
        features: {
            "Alta Velocidade": "✅ Ultrapassa 100Mb",
            "Porta PON": "❌ Fibra",
            "Portas LAN": "4 Portas (Giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ Limite de Velocidade (alto alcance)",
            "Wi-Fi 5Ghz": "✅ Alta Velocidade (baixo alcance)",
            "Telefonia": "❌ Não Possui"
        },
        details: {
            "Precisa ONU": "✅ Sim",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "❌ Não",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: "Utilizar como equipamento principal da rede ao lado de uma ONU."
    },
    {
        id: "multilaser_re708",
        categoria: "ROTEADOR", 
        fabricante: "Multilaser",
        modelo: "1200MBPS RE708",
        logo: "imagens/logos/multilaser.png",
        imagem: "imagens/equipamentos/multilaser_1200mbps.gif", 
        features: {
            "Alta Velocidade": "✅ Ultrapassa 100Mb",
            "Porta PON": "❌ Fibra",
            "Portas LAN": "4 Portas (Giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ Limite de Velocidade (alto alcance)",
            "Wi-Fi 5Ghz": "✅ Alta Velocidade (baixo alcance)",
            "Telefonia": "❌ Não Possui"
        },
        details: {
            "Precisa ONU": "✅ Sim",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "❌ Não",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: "Utilizar como equipamento principal da rede ao lado de uma ONU."
    },
    {
        id: "tplink_archer_c5",
        categoria: "ROTEADOR",
        fabricante: "TP-Link",
        modelo: "ARCHER C5",
        logo: "imagens/logos/tp-link.png",
        imagem: "imagens/equipamentos/tplink_archer-c5.gif",
        features: {
            "Alta Velocidade": "✅ Ultrapassa 100Mb",
            "Porta PON": "❌ Fibra",
            "Portas LAN": "4 Portas (Giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ Limite de Velocidade (alto alcance)",
            "Wi-Fi 5Ghz": "✅ Alta Velocidade (baixo alcance)",
            "Telefonia": "❌ Não Possui"
        },
        details: {
            "Precisa ONU": "✅ Sim",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "✅ Sim",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: "Utilizar como equipamento principal da rede ao lado de uma ONU."
    },

    // --- ONUs (BRIDGE) ---
    {
        id: "furukawa_420_10r",
        categoria: "ONU", 
        fabricante: "Furukawa",
        modelo: "420-10R",
        logo: "imagens/logos/furukawa.png",
        imagem: "imagens/equipamentos/furukawa_420.gif", 
        features: {
            "Alta Velocidade": "✅ Ultrapassa 100Mb",
            "Porta PON": "✅ Fibra",
            "Portas LAN": "1 Porta (Giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "❌ Não Possui",
            "Wi-Fi 5Ghz": "❌ Não Possui",
            "Telefonia": "❌ Não Possui"
        },
        details: {
            "Precisa ONU": "❌ Não",
            "Precisa Roteador": "✅ Sim",
            "Aceita Wi-Fi Plus": "❌ Não",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: "Utilizar como equipamento principal da rede ao lado de um Roteador AC."
    },
    {
        id: "furukawa_100",
        categoria: "ONU", 
        fabricante: "Furukawa",
        modelo: "100",
        logo: "imagens/logos/furukawa.png",
        imagem: "imagens/equipamentos/furukawa_100.gif", 
        features: {
            "Alta Velocidade": "✅ Ultrapassa 100Mb",
            "Porta PON": "✅ Fibra",
            "Portas LAN": "1 Porta (Giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "❌ Não Possui",
            "Wi-Fi 5Ghz": "❌ Não Possui",
            "Telefonia": "❌ Não Possui"
        },
        details: {
            "Precisa ONU": "❌ Não",
            "Precisa Roteador": "✅ Sim",
            "Aceita Wi-Fi Plus": "❌ Não",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: "Utilizar como equipamento principal da rede ao lado de um Roteador AC."
    },
    {
        id: "furukawa_630",
        categoria: "ONU", 
        fabricante: "Furukawa",
        modelo: "GPON 630-10B",
        logo: "imagens/logos/furukawa.png",
        imagem: "imagens/equipamentos/furukawa_630.gif", 
        features: {
            "Alta Velocidade": "✅ Ultrapassa 100Mb",
            "Porta PON": "✅ Fibra",
            "Portas LAN": "1 Porta (Giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "❌ Não Possui",
            "Wi-Fi 5Ghz": "❌ Não Possui",
            "Telefonia": "❌ Não Possui"
        },
        details: {
            "Precisa ONU": "❌ Não",
            "Precisa Roteador": "✅ Sim",
            "Aceita Wi-Fi Plus": "❌ Não",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: "Utilizar como equipamento principal da rede ao lado de um Roteador AC. Informações também se aplicam para Furukawa 640."
    },
    {
        id: "parks_fiberlink_101",
        categoria: "ONU", 
        fabricante: "Parks",
        modelo: "FiberLink 101",
        logo: "imagens/logos/parks.png",
        imagem: "imagens/equipamentos/parks_101.gif", 
        features: {
            "Alta Velocidade": "✅ Ultrapassa 100Mb",
            "Porta PON": "✅ Fibra",
            "Portas LAN": "1 Porta (Giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "❌ Não Possui",
            "Wi-Fi 5Ghz": "❌ Não Possui",
            "Telefonia": "❌ Não Possui"
        },
        details: {
            "Precisa ONU": "❌ Não",
            "Precisa Roteador": "✅ Sim",
            "Aceita Wi-Fi Plus": "❌ Não",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: "Utilizar como equipamento principal da rede ao lado de um Roteador AC."
    },

    // --- ONTs (GATEWAY) ---
    {
        id: "furukawa_423_41w",
        categoria: "ONT", 
        fabricante: "Furukawa",
        modelo: "423-41W/AC",
        logo: "imagens/logos/furukawa.png",
        imagem: "imagens/equipamentos/furukawa_423.gif", 
        features: {
            "Alta Velocidade": "✅ Ultrapassa 100Mb",
            "Porta PON": "✅ Fibra",
            "Portas LAN": "4 Portas (Giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ Velocidade Limitada (alto alcance)",
            "Wi-Fi 5Ghz": "✅ Alta Velocidade (baixo alcance)",
            "Telefonia": "✅ Possui"
        },
        details: {
            "Precisa ONU": "❌ Não",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "✅ Sim",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: "Não habilitar DMZ ao realizar configuração do serviço de Wi-Fi Plus. Utilizar Servidor Virtual."
    },
    {
        id: "huawei_eg8145v5",
        categoria: "ONT", 
        fabricante: "Huawei",
        modelo: "EG8145V5",
        logo: "imagens/logos/huawei.png",
        imagem: "imagens/equipamentos/huawei_eg8145v5.gif", 
        features: {
            "Alta Velocidade": "✅ Ultrapassa 100Mb",
            "Porta PON": "✅ Fibra",
            "Portas LAN": "4 Portas (Giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ Velocidade Limitada (alto alcance)",
            "Wi-Fi 5Ghz": "✅ Alta Velocidade (baixo alcance)",
            "Telefonia": "✅ Possui"
        },
        details: {
            "Precisa ONU": "❌ Não",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "✅ Sim",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: "Precisa fixar IP na placa de rede ao realizar a primeira configuração, 192.168.18.1."
    },
    {
        id: "maxprint_maxfiber_1200gm",
        categoria: "ONT", 
        fabricante: "Maxprint",
        modelo: "MAXFIBER 1200GM",
        logo: "imagens/logos/maxprint.png",
        imagem: "imagens/equipamentos/maxfiber_1200gm.gif", 
        features: {
            "Alta Velocidade": "✅ Ultrapassa 100Mb",
            "Porta PON": "✅ Fibra",
            "Portas LAN": "2 Portas (Giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ Velocidade Limitada (alto alcance)",
            "Wi-Fi 5Ghz": "✅ Alta Velocidade (baixo alcance)",
            "Telefonia": "❌ Não Possui"
        },
        details: {
            "Precisa ONU": "❌ Não",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "✅ Sim",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: ""
    },
    {
        id: "maxprint_maxfiber_1200gm_fxs",
        categoria: "ONT", 
        fabricante: "Maxprint",
        modelo: "MAXFIBER 1200GM FXS",
        logo: "imagens/logos/maxprint.png",
        imagem: "imagens/equipamentos/maxfiber_1200gm-fxs.gif", 
        features: {
            "Alta Velocidade": "✅ Ultrapassa 100Mb",
            "Porta PON": "✅ Fibra",
            "Portas LAN": "2 Portas (Giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ Velocidade Limitada (alto alcance)",
            "Wi-Fi 5Ghz": "✅ Alta Velocidade (baixo alcance)",
            "Telefonia": "✅ Possui"
        },
        details: {
            "Precisa ONU": "❌ Não",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "✅ Sim",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: ""
    },
    {
        id: "maxprint_maxfiber_1200g2_fxs",
        categoria: "ONT", 
        fabricante: "Maxprint",
        modelo: "MAXFIBER 1200G2 FXS",
        logo: "imagens/logos/maxprint.png",
        imagem: "imagens/equipamentos/maxprint_1200g2-fxs.gif", 
        features: {
            "Alta Velocidade": "✅ Ultrapassa 100Mb",
            "Porta PON": "✅ Fibra",
            "Portas LAN": "4 Portas (Giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ Velocidade Limitada (alto alcance)",
            "Wi-Fi 5Ghz": "✅ Alta Velocidade (baixo alcance)",
            "Telefonia": "✅ Possui"
        },
        details: {
            "Precisa ONU": "❌ Não",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "✅ Sim",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: ""
    },
    {
        id: "nokia_140w",
        categoria: "ONT", 
        fabricante: "Nokia",
        modelo: "140W",
        logo: "imagens/logos/nokia.png",
        imagem: "imagens/equipamentos/nokia_140w.gif", 
        features: {
            "Alta Velocidade": "✅ Ultrapassa 100Mb",
            "Porta PON": "✅ Fibra",
            "Portas LAN": "4 Portas (Giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ Velocidade Limitada (alto alcance)",
            "Wi-Fi 5Ghz": "✅ Alta Velocidade (baixo alcance)",
            "Telefonia": "✅ Possui"
        },
        details: {
            "Precisa ONU": "❌ Não",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "✅ Sim",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: ""
    },
    {
        id: "nokia_1425ga",
        categoria: "ONT", 
        fabricante: "Nokia",
        modelo: "1425GA",
        logo: "imagens/logos/nokia.png",
        imagem: "imagens/equipamentos/nokia_1425ga.gif", 
        features: {
            "Alta Velocidade": "✅ Ultrapassa 100Mb",
            "Porta PON": "✅ Fibra",
            "Portas LAN": "4 Portas (Giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ Velocidade Limitada (alto alcance)",
            "Wi-Fi 5Ghz": "✅ Alta Velocidade (baixo alcance)",
            "Telefonia": "✅ Possui"
        },
        details: {
            "Precisa ONU": "❌ Não",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "✅ Sim",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: ""
    },
    {
        id: "nokia_g2425ga",
        categoria: "ONT", 
        fabricante: "Nokia",
        modelo: "G-2425G-A",
        logo: "imagens/logos/nokia.png",
        imagem: "imagens/equipamentos/nokia_g-2425g-a.gif", 
        features: {
            "Alta Velocidade": "✅ Ultrapassa 100Mb",
            "Porta PON": "✅ Fibra",
            "Portas LAN": "4 Portas (Giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ Velocidade Limitada (alto alcance)",
            "Wi-Fi 5Ghz": "✅ Alta Velocidade (baixo alcance)",
            "Telefonia": "✅ Possui"
        },
        details: {
            "Precisa ONU": "❌ Não",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "❌ Não",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: ""
    },
    {
        id: "parks_fiberlink_410",
        categoria: "ONT", 
        fabricante: "Parks",
        modelo: "FiberLink 410 AC1200",
        logo: "imagens/logos/parks.png",
        imagem: "imagens/equipamentos/parks_410.gif", 
        features: {
            "Alta Velocidade": "✅ Ultrapassa 100Mb",
            "Porta PON": "✅ Fibra",
            "Portas LAN": "4 Portas (Giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ Velocidade Limitada (alto alcance)",
            "Wi-Fi 5Ghz": "✅ Alta Velocidade (baixo alcance)",
            "Telefonia": "❌ Não Possui"
        },
        details: {
            "Precisa ONU": "❌ Não",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "✅ Sim",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: ""
    },
    {
        id: "parks_fiberlink_411",
        categoria: "ONT", 
        fabricante: "Parks",
        modelo: "FiberLink 411",
        logo: "imagens/logos/parks.png",
        imagem: "imagens/equipamentos/parks_411.gif", 
        features: {
            "Alta Velocidade": "✅ Ultrapassa 100Mb",
            "Porta PON": "✅ Fibra",
            "Portas LAN": "4 Portas (Giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ Velocidade Limitada (alto alcance)",
            "Wi-Fi 5Ghz": "✅ Alta Velocidade (baixo alcance)",
            "Telefonia": "✅ Possui"
        },
        details: {
            "Precisa ONU": "❌ Não",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "✅ Sim",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: ""
    },
    {
        id: "parks_fiberlink_501",
        categoria: "ONT", 
        fabricante: "Parks",
        modelo: "FiberLink 501",
        logo: "imagens/logos/parks.png",
        imagem: "imagens/equipamentos/parks_501.gif", 
        features: {
            "Alta Velocidade": "✅ Ultrapassa 100Mb",
            "Porta PON": "✅ Fibra",
            "Portas LAN": "2 Portas (Giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ Velocidade Limitada (alto alcance)",
            "Wi-Fi 5Ghz": "✅ Alta Velocidade (baixo alcance)",
            "Telefonia": "✅ Possui"
        },
        details: {
            "Precisa ONU": "❌ Não",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "❌ Não",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: ""
    },
    {
        id: "shoreline_fxs_sh1505wf",
        categoria: "ONT", 
        fabricante: "Shoreline",
        modelo: "FXS SH1505WF",
        logo: "imagens/logos/shoreline.png",
        imagem: "imagens/equipamentos/shoreline_xpon-ac1200-sh-1040wf.gif", 
        features: {
            "Alta Velocidade": "✅ Ultrapassa 100Mb",
            "Porta PON": "✅ Fibra",
            "Portas LAN": "4 Portas (Giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ Velocidade Limitada (alto alcance)",
            "Wi-Fi 5Ghz": "✅ Alta Velocidade (baixo alcance)",
            "Telefonia": "✅ Possui"
        },
        details: {
            "Precisa ONU": "❌ Não",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "✅ Sim",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: ""
    },
    {
        id: "tenda_xpon_gh9",
        categoria: "ONT", 
        fabricante: "Tenda",
        modelo: "XPON GH9",
        logo: "imagens/logos/tenda.png",
        imagem: "imagens/equipamentos/tenda_hg9.gif", 
        features: {
            "Alta Velocidade": "✅ Ultrapassa 100Mb",
            "Porta PON": "✅ Fibra",
            "Portas LAN": "4 Portas (Giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ Velocidade Limitada (alto alcance)",
            "Wi-Fi 5Ghz": "✅ Alta Velocidade (baixo alcance)",
            "Telefonia": "✅ Possui"
        },
        details: {
            "Precisa ONU": "❌ Não",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "✅ Sim",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: ""
    },
    {
        id: "vsol_hg3221d",
        categoria: "ONT", 
        fabricante: "V-SOL",
        modelo: "HG3221D-4G1S AC1200G4 FXS",
        logo: "imagens/logos/v-sol.png",
        imagem: "imagens/equipamentos/vsol_hg3221d-4g1s-ac1200g4-fxs.gif", 
        features: {
            "Alta Velocidade": "✅ Ultrapassa 100Mb",
            "Porta PON": "✅ Fibra",
            "Portas LAN": "4 Portas (Giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ Velocidade Limitada (alto alcance)",
            "Wi-Fi 5Ghz": "✅ Alta Velocidade (baixo alcance)",
            "Telefonia": "✅ Possui"
        },
        details: {
            "Precisa ONU": "❌ Não",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "❌ Não",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: ""
    },
    {
        id: "vsol_hg323dac",
        categoria: "ONT", 
        fabricante: "V-SOL",
        modelo: "HG323DAC 1200G",
        logo: "imagens/logos/v-sol.png",
        imagem: "imagens/equipamentos/vsol_hg323dac-1200g.gif", 
        features: {
            "Alta Velocidade": "✅ Ultrapassa 100Mb",
            "Porta PON": "✅ Fibra",
            "Portas LAN": "2 Portas (Giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ Velocidade Limitada (alto alcance)",
            "Wi-Fi 5Ghz": "✅ Alta Velocidade (baixo alcance)",
            "Telefonia": "✅ Possui"
        },
        details: {
            "Precisa ONU": "❌ Não",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "❌ Não",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: ""
    },
    {
        id: "vsol_v2802dac",
        categoria: "ONT", 
        fabricante: "V-SOL",
        modelo: "V2802DAC 1200G",
        logo: "imagens/logos/v-sol.png",
        imagem: "imagens/equipamentos/vsol_v2802dac-1200g.gif", 
        features: {
            "Alta Velocidade": "✅ Ultrapassa 100Mb",
            "Porta PON": "✅ Fibra",
            "Portas LAN": "2 Portas (Giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ Velocidade Limitada (alto alcance)",
            "Wi-Fi 5Ghz": "✅ Alta Velocidade (baixo alcance)",
            "Telefonia": "❌ Não Possui"
        },
        details: {
            "Precisa ONU": "❌ Não",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "❌ Não",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: ""
    },
    {
        id: "vsol_v2804ac",
        categoria: "ONT", 
        fabricante: "V-SOL",
        modelo: "V2804AC-Z AC1200G4",
        logo: "imagens/logos/v-sol.png",
        imagem: "imagens/equipamentos/vsol_v2804ac-z-ac1200g4.gif", 
        features: {
            "Alta Velocidade": "✅ Ultrapassa 100Mb",
            "Porta PON": "✅ Fibra",
            "Portas LAN": "4 Portas (Giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ Velocidade Limitada (alto alcance)",
            "Wi-Fi 5Ghz": "✅ Alta Velocidade (baixo alcance)",
            "Telefonia": "❌ Não Possui"
        },
        details: {
            "Precisa ONU": "❌ Não",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "❌ Não",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: ""
    },
    // --- ATUALIZAÇÃO NNET ---
    {
        id: "askey_8115_nnet",
        categoria: "ONT", 
        fabricante: "Askey",
        modelo: "8115 (NNET)",
        logo: "imagens/logos/askey.png",
        imagem: "imagens/equipamentos/askey_8115-nnet.gif", 
        features: {
            "Alta Velocidade": "✅ Ultrapassa 100Mb",
            "Porta PON": "✅ Fibra",
            "Portas LAN": "4 Portas (Giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ Limite de Velocidade (alto alcance)",
            "Wi-Fi 5Ghz": "✅ Alta Velocidade (baixo alcance)",
            "Telefonia": "✅ Possui (não utilizar)"
        },
        details: {
            "Precisa ONU": "❌ Não",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "✅ Sim (não utilizar)",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: ""
    },
    {
        id: "china_mobile_nnet",
        categoria: "ONT", 
        fabricante: "China Mobile",
        modelo: "(NNET)",
        logo: "imagens/logos/china-mobile.png",
        imagem: "imagens/equipamentos/china-mobile_nnet.gif", 
        features: {
            "Alta Velocidade": "✅ Ultrapassa 100Mb",
            "Porta PON": "✅ Fibra",
            "Portas LAN": "4 Portas (Giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ Limite de Velocidade (alto alcance)",
            "Wi-Fi 5Ghz": "✅ Alta Velocidade (baixo alcance)",
            "Telefonia": "✅ Possui (não utilizar)"
        },
        details: {
            "Precisa ONU": "❌ Não",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "✅ Sim (não utilizar)",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: ""
    },
    {
        id: "euronet_etn_g1300w",
        categoria: "ONT", 
        fabricante: "Euronet",
        modelo: "ETN-G1300W (NNET)",
        logo: "imagens/logos/euronet.png",
        imagem: "imagens/equipamentos/euronet_etn-g1300w-nnet.gif", 
        features: {
            "Alta Velocidade": "❌ Limite de 100Mb",
            "Porta PON": "✅ Fibra",
            "Portas LAN": "4 Portas (Fast - 10/100)",
            "Wi-Fi 2.4Ghz": "✅ Limite de Velocidade (alto alcance)",
            "Wi-Fi 5Ghz": "✅ Alta Velocidade (baixo alcance)",
            "Telefonia": "✅ Não Possui"
        },
        details: {
            "Precisa ONU": "❌ Não",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "✅ Sim (não utilizar)",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: ""
    },
    {
        id: "euronet_etn_g1800w",
        categoria: "ONT", 
        fabricante: "Euronet",
        modelo: "ETN-G1800W (NNET)",
        logo: "imagens/logos/euronet.png",
        imagem: "imagens/equipamentos/euronet_etn-g1800w-nnet.gif", 
        features: {
            "Alta Velocidade": "✅ Ultrapassa 100Mb",
            "Porta PON": "✅ Fibra",
            "Portas LAN": "4 Portas (Fast - 10/100)",
            "Wi-Fi 2.4Ghz": "✅ Limite de Velocidade (alto alcance)",
            "Wi-Fi 5Ghz": "✅ Alta Velocidade (baixo alcance)",
            "Telefonia": "✅ Não Possui (não utilizar)"
        },
        details: {
            "Precisa ONU": "❌ Não",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "✅ Sim (não utilizar)",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: "Uma porta Giga, três portas Fast."
    },
    {
        id: "mitrastar_fibron",
        categoria: "ONT", 
        fabricante: "Mitrastar",
        modelo: "FIBRON (NNET)",
        logo: "imagens/logos/mitrastar.png",
        imagem: "imagens/equipamentos/mitrastar_fibron_nnet.gif", 
        features: {
            "Alta Velocidade": "✅ Ultrapassa 100Mb",
            "Porta PON": "✅ Fibra",
            "Portas LAN": "4 Portas (Giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ Limite de Velocidade (alto alcance)",
            "Wi-Fi 5Ghz": "✅ Alta Velocidade (baixo alcance)",
            "Telefonia": "✅ Possui (não utilizar)"
        },
        details: {
            "Precisa ONU": "❌ Não",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "✅ Sim (não utilizar)",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: ""
    },
    {
        id: "tenda_xpon_gh9",
        categoria: "ONT", 
        fabricante: "Tenda",
        modelo: "XPON GH9",
        logo: "imagens/logos/tenda.png",
        imagem: "imagens/equipamentos/tenda_hg9.gif", 
        features: {
            "Alta Velocidade": "✅ Ultrapassa 100Mb",
            "Porta PON": "✅ Fibra",
            "Portas LAN": "4 Portas (Giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ Velocidade Limitada (alto alcance)",
            "Wi-Fi 5Ghz": "✅ Alta Velocidade (baixo alcance)",
            "Telefonia": "✅ Possui"
        },
        details: {
            "Precisa ONU": "❌ Não",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "❌ Não",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: ""
    },
    {
        id: "shoreline_fxs_sh1505wf",
        categoria: "ONT", 
        fabricante: "Shoreline",
        modelo: "FXS SH1505WF",
        logo: "imagens/logos/shoreline.jpg",
        imagem: "imagens/equipamentos/shoreline_xpon-ac1200-sh-1040wf.gif", 
        features: {
            "Alta Velocidade": "✅ Ultrapassa 100Mb",
            "Porta PON": "✅ Fibra",
            "Portas LAN": "4 Portas (Giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ Velocidade Limitada (alto alcance)",
            "Wi-Fi 5Ghz": "✅ Alta Velocidade (baixo alcance)",
            "Telefonia": "✅ Possui"
        },
        details: {
            "Precisa ONU": "❌ Não",
            "Precisa Roteador": "❌ Não",
            "Aceita Wi-Fi Plus": "❌ Não",
            "Usar como Wi-Fi Plus": "❌ Não"
        },
        obs: ""
    }
];


// --- LÓGICA DO SISTEMA (ATUALIZADA) ---
document.addEventListener('layoutCarregado', () => {
    const select = document.getElementById('equipamento-select');
    const mainContainer = document.getElementById('conteudo-principal');

    // 1. Mapa de Ícones (Atualizado: Wi-Fi 5Ghz agora usa 'wifi')
    function getIconePorChave(chave) {
        const mapa = {
            "Alta Velocidade": "rocket_launch",
            "Porta PON": "cable",
            "Portas LAN": "lan",
            "Wi-Fi 2.4Ghz": "wifi",
            "Wi-Fi 5Ghz": "wifi", 
            "Telefonia": "call",
            "Precisa ONU": "hub",
            "Precisa Roteador": "router",
            "Aceita Wi-Fi Plus": "add_circle",
            "Usar como Wi-Fi Plus": "settings_input_antenna"
        };
        return mapa[chave] || "info"; 
    }

    // 2. Formatação de Valores (Lógica de Ícones Coloridos + Tags)
    function formatarValor(texto, chave) {
        // --- A. LÓGICA DE ÍCONES PARA LAN (Quantidade de Portas) ---
        // Verde se >= 4, Amarelo se < 4. Texto preto (sem classe de cor).
        if (chave === "Portas LAN") {
            const match = texto.match(/(\d+)\s*([Pp]ortas?)/); 
            if (match) {
                const qtd = parseInt(match[1], 10);
                
                // Define apenas a cor do ícone
                const colorStyle = (qtd >= 4) ? "color: #2e7d32;" : "color: #fbc02d;"; 
                const iconName = (qtd >= 4) ? "check_circle" : "error"; // check ou alerta

                // Separa o texto entre parenteses para virar TAG
                const partes = texto.split("(");
                const textoPrincipal = partes[0].trim(); // ex: "4 Portas"
                const textoTag = partes[1] ? partes[1].replace(")", "") : ""; // ex: "Fast - 10/100"

                // Monta o HTML: Ícone Colorido + Texto Normal + Tag
                let html = `<span class="material-symbols-outlined" style="${colorStyle} vertical-align: middle; margin-right: 4px;">${iconName}</span>`;
                html += `<span>${textoPrincipal}</span>`; // Texto normal
                
                if(textoTag) {
                    html += `<span class="tag">${textoTag}</span>`;
                }
                return html;
            }
        }

        // --- B. LÓGICA DE TAGS GERAIS (Para Wi-Fi e outros) ---
        if (texto.includes("(")) {
            const partes = texto.split("(");
            let principal = partes[0].trim();
            const tagInfo = partes[1].replace(")", "");

            // Processa ícones no texto principal
            if (principal.includes("✅")) {
                principal = principal.replace(/✅/g, `<span class="material-symbols-outlined" style="color: #2e7d32; vertical-align: middle; margin-right: 4px;">check_circle</span>`);
            }
            if (principal.includes("❌")) {
                principal = principal.replace(/❌/g, `<span class="material-symbols-outlined" style="color: #c62828; vertical-align: middle; margin-right: 4px;">cancel</span>`);
            }

            return `${principal} <span class="tag">${tagInfo}</span>`;
        }

        // --- C. LÓGICA PADRÃO (Sem Tags) ---
        if (texto.includes("✅")) {
            texto = texto.replace(/✅/g, `<span class="material-symbols-outlined" style="color: #2e7d32; vertical-align: middle; margin-right: 4px;">check_circle</span>`);
        }
        if (texto.includes("❌")) {
            texto = texto.replace(/❌/g, `<span class="material-symbols-outlined" style="color: #c62828; vertical-align: middle; margin-right: 4px;">cancel</span>`);
        }

        return texto;
    }

    // Ordenação Alfabética
    equipamentos.sort((a, b) => {
        const nomeA = `${a.fabricante} ${a.modelo}`.toLowerCase();
        const nomeB = `${b.fabricante} ${b.modelo}`.toLowerCase();
        return nomeA.localeCompare(nomeB);
    });

    // Popular Select
    equipamentos.forEach(eq => {
        const option = document.createElement('option');
        option.value = eq.id;
        
        // --- LIMPEZA DO TÍTULO NO SELECT ---
        // Remove (NNET) e (Wi-Fi Plus) apenas visualmente no menu
        let nomeLimpo = eq.modelo
            .replace("(NNET)", "")
            .replace("(Wi-Fi Plus)", "")
            .trim();

        option.textContent = `${eq.fabricante} - ${nomeLimpo}`;
        select.appendChild(option);
    });

    // Função Auxiliar para Criar Tabelas HTML
    function criarTabelaHTML(dados, classeTabela) {
        let linhas = '';
        for (const [chave, valor] of Object.entries(dados)) {
            const iconeNome = getIconePorChave(chave);
            const iconeHTML = `<span class="material-symbols-outlined" style="vertical-align: middle; margin-right: 8px; color: var(--md-sys-color-primary); font-size: 1.2rem;">${iconeNome}</span>`;
            
            // Passamos a chave para a formatação saber se é LAN ou não
            const valorFormatado = formatarValor(valor, chave);

            linhas += `
                <tr>
                    <td>
                        <div style="display: flex; align-items: center;">
                            ${iconeHTML} ${chave}
                        </div>
                    </td>
                    <td>${valorFormatado}</td>
                </tr>
            `;
        }
        return `<table class="${classeTabela}"><tbody>${linhas}</tbody></table>`;
    }

    // Renderizar Card
    function renderizarEquipamento(id) {
        const item = equipamentos.find(e => e.id === id);
        if (!item) return;

        // Logo
        const fabricanteHTML = item.logo 
            ? `<img src="${item.logo}" alt="${item.fabricante}" class="brand-logo">`
            : `<h2>${item.fabricante}</h2>`;

        // Badge de Categoria (Padrão)
        let categoriaHTML = item.categoria 
            ? `<div class="category-badge">${item.categoria}</div>` 
            : '';

        // --- LÓGICA DE BADGE ESPECIAL (NNET e WI-FI PLUS) ---
        // Verifica se o modelo tem tags especiais e cria badges extras
        let modeloExibicao = item.modelo;

        if (modeloExibicao.includes("(NNET)")) {
            // Remove o texto (NNET) do título
            modeloExibicao = modeloExibicao.replace("(NNET)", "").trim();
            // Adiciona a badge especial azul
            categoriaHTML += `<div class="category-badge" style="background-color: #cceeff; color: #006699; margin-left: 8px;">NNET</div>`;
        }

        if (modeloExibicao.includes("(Wi-Fi Plus)")) {
            // Remove o texto (Wi-Fi Plus) do título
            modeloExibicao = modeloExibicao.replace("(Wi-Fi Plus)", "").trim();
            // Adiciona a badge especial rosa
            categoriaHTML += `<div class="category-badge" style="background-color: #ffd8e4; color: #31111d; margin-left: 8px;">WI-FI PLUS</div>`;
        }

        // Gera as Tabelas
        const htmlFeatures = criarTabelaHTML(item.features, "features-table");
        const htmlDetails = criarTabelaHTML(item.details, "details-table");

        const html = `
            <div class="equipment-card">
                <div class="card-image-area">
                    <img src="${item.imagem}" alt="Visualização ${item.modelo}" onerror="this.src='https://via.placeholder.com/400x300?text=Imagem+N%C3%A3o+Encontrada'">
                </div>

                <div class="card-details-area">
                    
                    <div class="card-header">
                        ${fabricanteHTML}
                        <div style="display: flex;"> ${categoriaHTML}
                        </div>
                    </div>

                    <h1>${modeloExibicao}</h1>

                    ${htmlFeatures}

                    <div class="details-box">
                        ${htmlDetails}
                    </div>

                    ${item.obs ? `
                        <div class="obs-box">
                            <span class="material-symbols-outlined obs-icon">info</span>
                            <span>${item.obs}</span>
                        </div>` 
                    : ''}
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