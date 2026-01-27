// --- BANCO DE DADOS DOS EQUIPAMENTOS ---
const equipamentos = [
    // --- ROTEADORES ---
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
        id: "dlink_dir615",
        categoria: "ROTEADOR",
        fabricante: "D-Link",
        logo: "imagens/logos/d-link.png",
        modelo: "DIR615",
        imagem: "imagens/equipamentos/dlink_dir615.gif",
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
    {
        id: "dlink_dir825",
        categoria: "ROTEADOR",
        fabricante: "D-Link",
        logo: "imagens/logos/d-link.png",
        modelo: "DIR825",
        imagem: "imagens/equipamentos/dlink_dir825.gif",
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
        id: "tplink_archer_c5",
        categoria: "ROTEADOR",
        fabricante: "TP-Link",
        logo: "imagens/logos/tp-link.png",
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
        logo: "imagens/logos/trendnet.png", 
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
    {
        id: "huawei_ax2",
        categoria: "ROTEADOR", 
        fabricante: "Huawei",
        logo: "imagens/logos/huawei.png",
        modelo: "WIFI 6 AX2",
        imagem: "imagens/equipamentos/huawei_wifi-6-ax2.gif", 
        specs: {
            "LAN": "(3 portas) (giga - 100/1000)",
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
        id: "huawei_ws5200",
        categoria: "ROTEADOR", 
        fabricante: "Huawei",
        logo: "imagens/logos/huawei.png",
        modelo: "WIFI WS5200",
        imagem: "imagens/equipamentos/huawei_wifi-ws5200.gif", 
        specs: {
            "LAN": "(3 portas) (giga - 100/1000)",
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
        id: "multilaser_re708",
        categoria: "ROTEADOR", 
        fabricante: "Multilaser",
        logo: "imagens/logos/multilaser.png",
        modelo: "1200MBPS RE708",
        imagem: "imagens/equipamentos/multilaser_1200mbps.gif", 
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
        id: "multilaser_re172",
        categoria: "ROTEADOR", 
        fabricante: "Multilaser",
        logo: "imagens/logos/multilaser.png",
        modelo: "300MBPS RE172",
        imagem: "imagens/equipamentos/multilaser_300mbps.gif", 
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
    // --- NOVOS ROTEADORES E ONTs ---
    {
        id: "intelbras_iwr3000n",
        categoria: "ROTEADOR", 
        fabricante: "Intelbras",
        logo: "imagens/logos/intelbras.png",
        modelo: "IWR 3000N",
        imagem: "imagens/equipamentos/intelbras.gif", 
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
    {
        id: "smartlan_aprio150",
        categoria: "ROTEADOR", 
        fabricante: "Smartlan",
        logo: "imagens/logos/smartlan.jpg",
        modelo: "APRIO150CLASSIC",
        imagem: "imagens/equipamentos/smartlan.gif", 
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
    {
        id: "tenda_xpon_gh9",
        categoria: "ONT", 
        fabricante: "Tenda",
        logo: "imagens/logos/tenda.png",
        modelo: "XPON GH9",
        imagem: "imagens/equipamentos/tenda_hg9.gif", 
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
        id: "shoreline_fxs_sh1505wf",
        categoria: "ONT", 
        fabricante: "Shoreline",
        logo: "imagens/logos/shoreline.jpg",
        modelo: "FXS SH1505WF",
        imagem: "imagens/equipamentos/shoreline_xpon-ac1200-sh-1040wf.gif", 
        specs: {
            "LAN": "(4 portas) (giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ (baixa velocidade) (alto alcance)",
            "Wi-Fi 5Ghz": "✅ (alta velocidade) (baixo alcance)",
            "Telefonia": "✅ (possui)",
            "Fibra": "✅ (porta PON)",
            "Wi-Fi Plus": "❌ (não recomendado)",
            "Precisa Roteador": "❌ (não)",
            "Alta Velocidade": "✅ (limitado a 100Mb)"
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
    },
    // --- V-SOL ---
    {
        id: "vsol_hg323dac",
        categoria: "ONT", 
        fabricante: "V-SOL",
        logo: "imagens/logos/v-sol.png",
        modelo: "HG323DAC 1200G",
        imagem: "imagens/equipamentos/vsol_hg323dac-1200g.gif", 
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
    {
        id: "vsol_hg3221d",
        categoria: "ONT", 
        fabricante: "V-SOL",
        logo: "imagens/logos/v-sol.png",
        modelo: "HG3221D-4G1S AC1200G4 FXS",
        imagem: "imagens/equipamentos/vsol_hg3221d-4g1s-ac1200g4-fxs.gif", 
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
        id: "vsol_v2802dac",
        categoria: "ONT", 
        fabricante: "V-SOL",
        logo: "imagens/logos/v-sol.png",
        modelo: "V2802DAC 1200G",
        imagem: "imagens/equipamentos/vsol_v2802dac-1200g.gif", 
        specs: {
            "LAN": "(2 portas) (giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ (baixa velocidade) (alto alcance)",
            "Wi-Fi 5Ghz": "✅ (alta velocidade) (baixo alcance)",
            "Telefonia": "❌ (não possui)",
            "Fibra": "✅ (porta PON)",
            "Wi-Fi Plus": "❌ (não recomendado)",
            "Precisa Roteador": "❌ (não)",
            "Alta Velocidade": "✅ (ultrapassa 100Mb)"
        },
        obs: ""
    },
    {
        id: "vsol_v2804ac",
        categoria: "ONT", 
        fabricante: "V-SOL",
        logo: "imagens/logos/v-sol.png",
        modelo: "V2804AC-Z AC1200G4",
        imagem: "imagens/equipamentos/vsol_v2804ac-z-ac1200g4.gif", 
        specs: {
            "LAN": "(4 portas) (giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ (baixa velocidade) (alto alcance)",
            "Wi-Fi 5Ghz": "✅ (alta velocidade) (baixo alcance)",
            "Telefonia": "❌ (não possui)",
            "Fibra": "✅ (porta PON)",
            "Wi-Fi Plus": "❌ (não recomendado)",
            "Precisa Roteador": "❌ (não)",
            "Alta Velocidade": "✅ (ultrapassa 100Mb)"
        },
        obs: ""
    },
    // --- HUAWEI ---
    {
        id: "huawei_eg8145v5",
        categoria: "ONT", 
        fabricante: "Huawei",
        logo: "imagens/logos/huawei.png",
        modelo: "EG8145V5",
        imagem: "imagens/equipamentos/huawei_eg8145v5.gif", 
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
    // --- MAXPRINT ---
    {
        id: "maxprint_maxfiber_1200gm",
        categoria: "ONT", 
        fabricante: "Maxprint",
        logo: "imagens/logos/maxprint.png",
        modelo: "MAXFIBER 1200GM",
        imagem: "imagens/equipamentos/maxfiber_1200gm.gif", 
        specs: {
            "LAN": "(2 portas) (giga - 100/1000)",
            "Wi-Fi 2.4Ghz": "✅ (baixa velocidade) (alto alcance)",
            "Wi-Fi 5Ghz": "✅ (alta velocidade) (baixo alcance)",
            "Telefonia": "❌ (não possui)",
            "Fibra": "✅ (porta PON)",
            "Wi-Fi Plus": "❌ (não recomendado)",
            "Precisa Roteador": "❌ (não)",
            "Alta Velocidade": "✅ (ultrapassa 100Mb)"
        },
        obs: ""
    },
    {
        id: "maxprint_maxfiber_1200gm_fxs",
        categoria: "ONT", 
        fabricante: "Maxprint",
        logo: "imagens/logos/maxprint.png",
        modelo: "MAXFIBER 1200GM FXS",
        imagem: "imagens/equipamentos/maxfiber_1200gm-fxs.gif", 
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
    // --- (NNET) ---
    {
        id: "askey_8115_nnet",
        categoria: "ONT", 
        fabricante: "Askey",
        logo: "imagens/logos/askey.png",
        modelo: "8115 (NNET)",
        imagem: "imagens/equipamentos/askey_8115-nnet.gif", 
        specs: {
            "LAN": "(4 portas) (fast - 10/100)",
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
        id: "china_mobile_nnet",
        categoria: "ONT", 
        fabricante: "China Mobile",
        logo: "imagens/logos/china-mobile.png",
        modelo: "(NNET)",
        imagem: "imagens/equipamentos/china-mobile_nnet.gif", 
        specs: {
            "LAN": "(4 portas) (fast - 10/100)",
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
        id: "euronet_etn_g1300w",
        categoria: "ONT", 
        fabricante: "Euronet",
        logo: "imagens/logos/euronet.png",
        modelo: "ETN-G1300W (NNET)",
        imagem: "imagens/equipamentos/euronet_etn-g1300w-nnet.gif", 
        specs: {
            "LAN": "(4 portas) (fast - 10/100)",
            "Wi-Fi 2.4Ghz": "✅ (baixa velocidade) (alto alcance)",
            "Wi-Fi 5Ghz": "✅ (alta velocidade) (baixo alcance)",
            "Telefonia": "❌ (não possui)",
            "Fibra": "✅ (porta PON)",
            "Wi-Fi Plus": "❌ (não recomendado)",
            "Precisa Roteador": "❌ (não)",
            "Alta Velocidade": "❌ (limitado a 100Mb)"
        },
        obs: ""
    },
    {
        id: "euronet_etn_g1800w",
        categoria: "ONT", 
        fabricante: "Euronet",
        logo: "imagens/logos/euronet.png",
        modelo: "ETN-G1800W (NNET)",
        imagem: "imagens/equipamentos/euronet_etn-g1800w-nnet.gif", 
        specs: {
            "LAN": "(4 portas) (fast - 10/100)",
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
        id: "mitrastar_fibron",
        categoria: "ONT", 
        fabricante: "Mitrastar",
        logo: "imagens/logos/mitrastar.png",
        modelo: "FIBRON (NNET)",
        imagem: "imagens/equipamentos/mitrastar_fibron_nnet.gif", 
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