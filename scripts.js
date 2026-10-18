/**
 * MÓDULO 1: BASE DE DADOS DE ITENS (THE WITCHER RPG)
 */
const DatabaseModule = (() => {
  const categorias = [
    {
      id: "armas",
      titulo: "⚔️ Armas Comuns",
      citação: "Toda arma tem a sua própria identidade. Quer uma arma boa para tudo? Pegue uma espada. Quer rachar crânios? Pegue uma maça. — Rodolf Kazmer",
      colunas: ["Nome", "Subcategoria", "Tipo", "PA", "Disp.", "Dano", "DURA", "Mãos", "Alcance", "Porte", "MEL", "Peso", "Custo", "Efeito & Descrição"],
      itens: [
        // Espadas
        { nome: "Espada Longa de Ferro", sub: "Espadas", tipo: "CO/PE", pa: "+0", disp: "F", dano: "2d6+2", dura: 10, maos: 2, alc: "N/C", porte: "G", mel: 0, peso: 1.5, custo: 160, efeito: "-", desc: "Espada simples e sem graça, mas fácil de fazer e encontrada em todos os lugares." },
        { nome: "Espada de Cavaleiro", sub: "Espadas", tipo: "CO/PE", pa: "+0", disp: "C", dano: "2d6+4", dura: 15, maos: 1, alc: "N/C", porte: "G", mel: 0, peso: 2.5, custo: 270, efeito: "-", desc: "Espada redaniana de uma mão com guarda simples curva e lâmina afiada." },
        { nome: "Gleddyf", sub: "Espadas", tipo: "CO/PE", pa: "+0", disp: "C", dano: "3d6+2", dura: 5, maos: 2, alc: "N/C", porte: "G", mel: 0, peso: 3.0, custo: 285, efeito: "-", desc: "Lâmina fina cujo peso se concentra na guarda chique e no pomo; padrão dos Cavaleiros Negros." },
        { nome: "Falcione de Caçador", sub: "Espadas", tipo: "CO/PE", pa: "+0", disp: "C", dano: "3d6", dura: 15, maos: 1, alc: "N/C", porte: "G", mel: 0, peso: 2.0, custo: 325, efeito: "-", desc: "Espada pesada usada por caçadores para partir madeira e decepar membros." },
        { nome: "Krigsverd", sub: "Espadas", tipo: "CO/PE", pa: "+2", disp: "C", dano: "4d6+4", dura: 10, maos: 1, alc: "N/C", porte: "G", mel: 0, peso: 2.0, custo: 570, efeito: "-", desc: "Lâmina de Skellige de aço endurecido e composição leve, infernalmente precisa." },
        { nome: "Esboda", sub: "Espadas", tipo: "CO/PE", pa: "+1", disp: "I", dano: "5d6", dura: 10, maos: 1, alc: "N/C", porte: "IE", mel: 1, peso: 1.5, custo: 650, efeito: "-", desc: "Lâmina de cavalaria de Mettinna leve e afiada; como um gleddyf melhorado." },
        { nome: "Kord", sub: "Espadas", tipo: "CO/PE", pa: "+0", disp: "R", dano: "5d6", dura: 15, maos: 1, alc: "N/C", porte: "IE", mel: 1, peso: 1.5, custo: 725, efeito: "Sangramento (25%)", desc: "Criada por marinheiros na cidade costeira de Cidaris; lâmina sólida de fio curvo." },
        { nome: "Lâmina de Vicovaro", sub: "Espadas", tipo: "CO/PE", pa: "+0", disp: "R", dano: "5d6+4", dura: 15, maos: 2, alc: "N/C", porte: "IE", mel: 1, peso: 1.5, custo: 955, efeito: "Balanceada", desc: "Reconhecível pela guarda pesada e resistência capaz de sobreviver a castelos desmoronando." },
        { nome: "Torrwr", sub: "Espadas", tipo: "CO/PE", pa: "+0", disp: "R", dano: "6d6", dura: 15, maos: 2, alc: "N/C", porte: "IE", mel: 2, peso: 2.0, custo: 1075, efeito: "Sangramento (50%)", desc: "Espada gemmeriana brutal capaz de decapitar um cavalo a meio do galope." },
        // Lâminas Pequenas
        { nome: "Adaga", sub: "Lâminas Pequenas", tipo: "CO/PE", pa: "+0", disp: "F", dano: "1d6+2", dura: 10, maos: 1, alc: "N/C", porte: "P", mel: 0, peso: 0.5, custo: 50, efeito: "-", desc: "Pequena o suficiente para ser escondida; carregada por cavaleiros e camponeses." },
        { nome: "Estilete", sub: "Lâminas Pequenas", tipo: "CO/PE", pa: "+2", disp: "C", dano: "1d6", dura: 5, maos: 1, alc: "N/C", porte: "M", mel: 1, peso: 0.5, custo: 275, efeito: "Porte Velado (+2)", desc: "Faca traiçoeira nilfgaardiana cuja lâmina longa e fina dobra dentro do cabo." },
        { nome: "Punhal", sub: "Lâminas Pequenas", tipo: "CO/PE", pa: "+1", disp: "I", dano: "2d6+2", dura: 10, maos: 1, alc: "N/C", porte: "P", mel: 0, peso: 1.0, custo: 350, efeito: "Sangramento (25%)", desc: "Velho conhecido temeriano: longo, fino e leve." },
        { nome: "Jambiya", sub: "Lâminas Pequenas", tipo: "CO/PE", pa: "+2", disp: "R", dano: "2d6", dura: 10, maos: 1, alc: "N/C", porte: "P", mel: 1, peso: 0.5, custo: 440, efeito: "Sangramento (25%), Perfura Armadura", desc: "Adaga curva da longínqua Zerrikânia, padrão entre assassinos de Maecht." },
        // Machados
        { nome: "Machado de Mão", sub: "Machados", tipo: "CO", pa: "+0", disp: "F", dano: "2d6+1", dura: 10, maos: 1, alc: "N/C", porte: "P", mel: 0, peso: 1.0, custo: 205, efeito: "-", desc: "Usado para lenha, mas resistente o bastante para cortar osso facilmente." },
        { nome: "Machado de Batalha", sub: "Machados", tipo: "CO", pa: "+0", disp: "C", dano: "5d6", dura: 15, maos: 1, alc: "N/C", porte: "G", mel: 0, peso: 2.0, custo: 525, efeito: "-", desc: "Arma devastadora para derrubar portas e decepar inimigos; mais resistente que espadas." },
        { nome: "Machado de Berserker", sub: "Machados", tipo: "CO", pa: "+0", disp: "R", dano: "6d6", dura: 15, maos: 2, alc: "N/C", porte: "IE", mel: 1, peso: 3.0, custo: 960, efeito: "Ablativa, Sangramento (25%)", desc: "Machado de Skellige de 2 metros com enorme cabeça barbada entalhada com runas." },
        // Concussivas
        { nome: "Soqueira", sub: "Concussivas", tipo: "CC", pa: "+1", disp: "F", dano: "1d6", dura: 15, maos: 1, alc: "N/C", porte: "M", mel: 1, peso: 0.5, custo: 50, efeito: "Adiciona a Soco", desc: "Peça metálica de bolso que dá força extra aos socos no combate próximo." },
        { nome: "Maça", sub: "Concussivas", tipo: "CC", pa: "+0", disp: "C", dano: "5d6", dura: 15, maos: 1, alc: "N/C", porte: "G", mel: 0, peso: 2.0, custo: 525, efeito: "-", desc: "Peça brutal de cabeça sólida com pontas ou espinhos feita para quebrar ossos e armaduras." },
        { nome: "Martelo das Terras Altas", sub: "Concussivas", tipo: "CC", pa: "+0", disp: "R", dano: "6d6+2", dura: 20, maos: 2, alc: "N/C", porte: "IE", mel: 1, peso: 3.0, custo: 1100, efeito: "Atordoamento (-2), Meteorito", desc: "Arma imensa de Kaedwen com quase 2 metros e cabeça de ferro com aço de meteorito." },
        // Armas de Haste
        { nome: "Lança", sub: "Armas de Haste", tipo: "PE/CC", pa: "+0", disp: "F", dano: "3d6", dura: 10, maos: 2, alc: "CORx2m", porte: "IE", mel: 1, peso: 3.5, custo: 375, efeito: "Longo Alcance", desc: "Favorita da infantaria (2m), mantém inimigos à distância e detém cavalaria." },
        { nome: "Acha-de-Arma", sub: "Armas de Haste", tipo: "CO/PE/CC", pa: "+0", disp: "I", dano: "4d6+2", dura: 10, maos: 2, alc: "N/C", porte: "IE", mel: 0, peso: 3.0, custo: 460, efeito: "Longo Alcance", desc: "Criada em Poviss; combina lâmina de machado, espeto na ponta e martelo atrás." },
        { nome: "Alabarda Vermelha", sub: "Armas de Haste", tipo: "CO/PE/CC", pa: "+0", disp: "I", dano: "6d6+3", dura: 10, maos: 2, alc: "N/C", porte: "IE", mel: 1, peso: 4.0, custo: 865, efeito: "Longo Alcance", desc: "Obra de arte de 2 metros dos alabardeiros redanianos para parar cavalaria." },
        // Cajados
        { nome: "Cajado", sub: "Cajados", tipo: "CC", pa: "+0", disp: "C", dano: "1d6+2", dura: 10, maos: 2, alc: "N/C", porte: "IE", mel: 1, peso: 3.0, custo: 335, efeito: "Longo Alcance, Foco (1)", desc: "Amplifica o poder da magia, mas torna o mago um alvo fácil no Norte." },
        { nome: "Cajado de Pastor", sub: "Cajados", tipo: "PE/CC", pa: "+0", disp: "I", dano: "2d6", dura: 10, maos: 2, alc: "N/C", porte: "IE", mel: 1, peso: 3.5, custo: 550, efeito: "Longo Alcance, Foco (1), Agarradora", desc: "Baseado no modelo de Alzur, com gancho na ponta útil para luta de cajados." },
        { nome: "Cajado de Ferro", sub: "Cajados", tipo: "CC", pa: "+0", disp: "I", dano: "3d6", dura: 15, maos: 2, alc: "N/C", porte: "IE", mel: 1, peso: 4.0, custo: 675, efeito: "Longo Alcance, Foco (2)", desc: "Vara grande de ferro com quintessência; bate como maça e bloqueia lâminas." },
        { nome: "Cajado de Cristal", sub: "Cajados", tipo: "CC", pa: "+0", disp: "R", dano: "2d6+2", dura: 5, maos: 2, alc: "N/C", porte: "IE", mel: 2, peso: 2.5, custo: 835, efeito: "Longo Alcance, Foco (3), Foco Maior", desc: "Possui pedra preciosa perfeita cravada no topo que amplifica magia como nenhum outro." },
        // Arremesso, Arcos, Bestas e Munição
        { nome: "Faca de Arremesso", sub: "Arremesso", tipo: "PE", pa: "+0", disp: "F", dano: "1d6", dura: 5, maos: 1, alc: "CORx4m", porte: "M", mel: 0, peso: 0.5, custo: 50, efeito: "-", desc: "Pequena, fácil de esconder e balanceada para assassinos." },
        { nome: "Machado de Arremesso", sub: "Arremesso", tipo: "CO", pa: "+0", disp: "F", dano: "2d6", dura: 10, maos: 1, alc: "CORx2m", porte: "P", mel: 0, peso: 1.0, custo: 75, efeito: "-", desc: "Menor alcance que a faca, mas muito mais potente no impacto." },
        { nome: "Orion", sub: "Arremesso", tipo: "CO", pa: "+1", disp: "I", dano: "1d6", dura: 5, maos: 1, alc: "CORx4m", porte: "M", mel: 0, peso: 0.1, custo: 100, efeito: "-", desc: "Estrela de arremesso rápida e perigosa usada pelos Cavaleiros Negros." },
        { nome: "Arco Curto", sub: "Arcos", tipo: "PE", pa: "+0", disp: "F", dano: "3d6+3", dura: 10, maos: 2, alc: "100m", porte: "G", mel: 0, peso: 1.0, custo: 290, efeito: "-", desc: "Compacto, perfeito para caçar cervos ou invasores de terras." },
        { nome: "Arco Longo", sub: "Arcos", tipo: "PE", pa: "+0", disp: "F", dano: "4d6", dura: 10, maos: 2, alc: "200m", porte: "IE", mel: 1, peso: 2.0, custo: 475, efeito: "-", desc: "Arma mortal favorita dos elfos e dos arqueiros de Nilfgaard." },
        { nome: "Arco de Guerra", sub: "Arcos", tipo: "PE", pa: "+0", disp: "C", dano: "6d6", dura: 15, maos: 2, alc: "300m", porte: "IE", mel: 1, peso: 3.0, custo: 835, efeito: "-", desc: "Quase 2 metros de altura (77 kg de força), desenvolvido contra cavaleiros de placa." },
        { nome: "Besta de Mão", sub: "Bestas", tipo: "PE", pa: "+1", disp: "F", dano: "2d6+2", dura: 5, maos: 1, alc: "50m", porte: "G", mel: 1, peso: 0.5, custo: 285, efeito: "Recarga Lenta", desc: "Cabe em uma mão (requer 2 mãos para recarregar), ideal para defesa pessoal civil." },
        { nome: "Besta", sub: "Bestas", tipo: "PE", pa: "+1", disp: "F", dano: "4d6+2", dura: 5, maos: 2, alc: "100m", porte: "IE", mel: 1, peso: 3.0, custo: 455, efeito: "Recarga Lenta", desc: "Sólida, precisa e poderosa, com coronha de madeira para apoiar no ombro." },
        { nome: "Besta de Caçador de Monstros", sub: "Bestas", tipo: "PE", pa: "+1", disp: "I", dano: "6d6", dura: 15, maos: 2, alc: "200m", porte: "IE", mel: 1, peso: 4.0, custo: 1125, efeito: "Recarga Lenta, Perfura Armadura", desc: "Balista de mão puxada com guincho que dispara com 136 kg de força." },
        { nome: "Munição Padrão (x10)", sub: "Munição", tipo: "PE", pa: "-", disp: "F", dano: "-", dura: 10, maos: "-", alc: "-", porte: "G", mel: 0, peso: 0.5, custo: 10, efeito: "-", desc: "Pacote com 10 flechas ou virotes típicos com pontas afiadas de metal." },
        { nome: "Munição Cega", sub: "Munição", tipo: "CC", pa: "-", disp: "C", dano: "-", dura: 10, maos: "-", alc: "-", porte: "G", mel: 0, peso: 0.1, custo: 5, efeito: "Não-Letal", desc: "Ponta grande e cega como um punho para derrubar alvos vivos." },
        { nome: "Munição de Ponta Larga", sub: "Munição", tipo: "PE", pa: "-", disp: "C", dano: "-", dura: 10, maos: "-", alc: "-", porte: "G", mel: 0, peso: 0.1, custo: 10, efeito: "Sangramento (100%)", desc: "Ponta larga, reta e laminada que corta fundo provocando hemorragia." },
        { nome: "Munição de Perfuração", sub: "Munição", tipo: "PE", pa: "-", disp: "C", dano: "-", dura: 10, maos: "-", alc: "-", porte: "G", mel: 0, peso: 0.1, custo: 15, efeito: "Perfura Armadura", desc: "Ponta afilada endurecida no fogo para atravessar aço e couro." }
      ]
    },
    {
      id: "armaduras",
      titulo: "🛡️ Armaduras Comuns (Cabeça, Tronco e Pernas)",
      citação: "Enquanto uma armadura pesada pode significar maior proteção, uma armadura leve pode ser melhor para o movimento e não penaliza magos.",
      colunas: ["Nome", "Subcategoria", "Classe", "PP", "Disp.", "MA", "VF", "Peso", "Custo", "Efeito & Descrição"],
      itens: [
        // Cabeça
        { nome: "Capuz de Arqueiro de Verden", sub: "Cabeça", classe: "Leve", pp: 3, disp: "C", ma: 1, vf: 0, peso: 0.5, custo: 100, efeito: "-", desc: "Capuz reforçado confeccionado com padrão azul e preto de ponta de flecha." },
        { nome: "Capuz de Tecido Duplo", sub: "Cabeça", classe: "Leve", pp: 5, disp: "I", ma: 1, vf: 0, peso: 1.0, custo: 175, efeito: "-", desc: "Tecido de maneira justa com reforços para evitar penetração de armas." },
        { nome: "Capuz/Elmo c/ Proteção de Olhos", sub: "Cabeça", classe: "Leve", pp: 8, disp: "C", ma: 0, vf: 0, peso: 1.0, custo: 200, efeito: "-", desc: "Comum em Nilfgaard e Skellige; protege face, olhos e pescoço com malha." },
        { nome: "Touca de Cota de Malha", sub: "Cabeça", classe: "Média", pp: 12, disp: "F", ma: 0, vf: 0, peso: 1.5, custo: 250, efeito: "-", desc: "Proteção simples e forte que impede cortes de espada e amortece martelos." },
        { nome: "Capuz Blindado", sub: "Cabeça", classe: "Média", pp: 14, disp: "C", ma: 0, vf: 0, peso: 2.0, custo: 350, efeito: "-", desc: "Couro fortalecido, barbante grosso e linho; preserva a visão periférica." },
        { nome: "Armet Temeriano", sub: "Cabeça", classe: "Média", pp: 16, disp: "I", ma: 1, vf: 0, peso: 1.5, custo: 475, efeito: "Visão Restrita", desc: "Elmo metálico fechado de cavaleiro com nariz pontudo e fresta fina." },
        { nome: "Grande Elmo", sub: "Cabeça", classe: "Pesada", pp: 20, disp: "R", ma: 1, vf: 0, peso: 3.5, custo: 575, efeito: "Visão Restrita", desc: "Capacete cilíndrico duro como o inferno e decorado para cavaleiros de elite." },
        { nome: "Elmo Skellige", sub: "Cabeça", classe: "Pesada", pp: 25, disp: "I", ma: 1, vf: 0, peso: 3.5, custo: 700, efeito: "Visão Restrita", desc: "Elmo grosso com cota de malha no pescoço, placas nas bochechas e chifres." },
        { nome: "Elmo Nilfgaardiano", sub: "Cabeça", classe: "Pesada", pp: 30, disp: "R", ma: 2, vf: 0, peso: 3.0, custo: 800, efeito: "Visão Restrita", desc: "Celada arredondada combinada com barbote pesado para pescoço e face." },
        // Tronco
        { nome: "Jaquetão", sub: "Tronco", classe: "Leve", pp: 3, disp: "F", ma: 0, vf: 0, peso: 1.0, custo: 100, efeito: "-", desc: "Acolchoado usado sob armaduras ou sozinho; bom contra adagas e sem ferrugem." },
        { nome: "Jaquetão de Aedirn", sub: "Tronco", classe: "Leve", pp: 5, disp: "I", ma: 1, vf: 0, peso: 1.5, custo: 175, efeito: "-", desc: "Jaquetão reforçado com pedaços de couro e pele costurados aqui e ali." },
        { nome: "Jaquetão de Tecido Duplo", sub: "Tronco", classe: "Leve", pp: 8, disp: "I", ma: 1, vf: 0, peso: 2.5, custo: 250, efeito: "-", desc: "Proteção discreta de viagem capaz de parar espadas baratas e virotes leves." },
        { nome: "Couraça", sub: "Tronco", classe: "Média", pp: 12, disp: "C", ma: 0, vf: 1, peso: 7.0, custo: 300, efeito: "-", desc: "Colete básico de couro com placas de couro fortalecido pregadas por dentro." },
        { nome: "Armadura de Alabardeiro Redaniano", sub: "Tronco", classe: "Média", pp: 14, disp: "I", ma: 1, vf: 1, peso: 8.5, custo: 400, efeito: "-", desc: "Jaquetão longo vermelho sobre camisa de cota de malha, gorjeira e brafoneiras." },
        { nome: "Jaqueta Lyriana de Couro", sub: "Tronco", classe: "Média", pp: 16, disp: "R", ma: 1, vf: 1, peso: 6.5, custo: 525, efeito: "-", desc: "Couro tratado com processo especial que o torna duro como pele de basilisco." },
        { nome: "Armadura de Placa", sub: "Tronco", classe: "Pesada", pp: 20, disp: "R", ma: 1, vf: 2, peso: 14.0, custo: 625, efeito: "-", desc: "Placas duras de aço ajustadas ao corpo; a preferida de cavaleiros e reis." },
        { nome: "Armadura Pesada da Ilha Hindar", sub: "Tronco", classe: "Pesada", pp: 25, disp: "R", ma: 3, vf: 2, peso: 15.0, custo: 750, efeito: "-", desc: "Malha pesada até os joelhos com couro fortalecido interno e couro com tachas." },
        { nome: "Armadura de Placa Nilfgaardiana", sub: "Tronco", classe: "Pesada", pp: 30, disp: "R", ma: 2, vf: 2, peso: 12.0, custo: 850, efeito: "-", desc: "Placa preta e dourada com brafoneiras altas; para virotes de besta sem arranhar." },
        // Pernas
        { nome: "Calças de Cavalaria", sub: "Pernas", classe: "Leve", pp: 3, disp: "C", ma: 0, vf: 0, peso: 0.5, custo: 75, efeito: "-", desc: "Calça escura reforçada apenas com pedaços de couro." },
        { nome: "Calças Acolchoadas", sub: "Pernas", classe: "Leve", pp: 5, disp: "C", ma: 1, vf: 0, peso: 1.0, custo: 125, efeito: "-", desc: "Basicamente um jaquetão acolchoado para as pernas." },
        { nome: "Calças de Tecido Duplo", sub: "Pernas", classe: "Leve", pp: 8, disp: "I", ma: 0, vf: 0, peso: 1.5, custo: 225, efeito: "-", desc: "Resistentes e discretas, sem a aparência pomposa das calças acolchoadas." },
        { nome: "Calças Blindadas", sub: "Pernas", classe: "Média", pp: 12, disp: "F", ma: 0, vf: 0, peso: 3.5, custo: 250, efeito: "-", desc: "Couro fortalecido e placas de aço; protege bem sem pesar demais." },
        { nome: "Grevas Redanianas", sub: "Pernas", classe: "Média", pp: 14, disp: "I", ma: 1, vf: 0, peso: 4.0, custo: 400, efeito: "-", desc: "Calças e grevas simples focadas na facilidade de movimento." },
        { nome: "Calças Lyrianas de Couro", sub: "Pernas", classe: "Média", pp: 16, disp: "R", ma: 1, vf: 0, peso: 3.5, custo: 525, efeito: "-", desc: "Couro lyriano brutal transformado em calças de altíssima proteção." },
        { nome: "Grevas de Placa", sub: "Pernas", classe: "Pesada", pp: 20, disp: "R", ma: 1, vf: 1, peso: 7.5, custo: 625, efeito: "-", desc: "Grevas, escarpes, cuisses e tassets de aço trabalhado cobrindo toda a perna." },
        { nome: "Chausses Pesadas da Ilha de Hindar", sub: "Pernas", classe: "Pesada", pp: 25, disp: "R", ma: 3, vf: 1, peso: 5.0, custo: 650, efeito: "-", desc: "Calças feitas de cota de malha pesada, porém muito flexíveis." },
        { nome: "Grevas Nilfgaardianas", sub: "Pernas", classe: "Pesada", pp: 30, disp: "R", ma: 2, vf: 1, peso: 6.0, custo: 850, efeito: "-", desc: "Grevas e escarpes sobre calças de couro pesado com padrão xadrez." }
      ]
    },
    {
      id: "escudos",
      titulo: "🛡️ Escudos Comuns",
      citação: "Quando você quer proteger o seu corpo inteiro colocando um muro entre você e o inimigo, pegue um pavise.",
      colunas: ["Nome", "Subcategoria", "DURA", "Disp.", "MA", "VF", "Peso", "Custo", "Efeito & Descrição"],
      itens: [
        { nome: "Escudo de Couro", sub: "Escudo Leve", dura: 4, disp: "F", ma: 0, vf: 0, peso: 0.5, custo: 50, efeito: "-", desc: "Couro esticado sobre madeira; barato e leve, mas menos resistente." },
        { nome: "Broquel de Aço", sub: "Escudo Leve", dura: 6, disp: "C", ma: 0, vf: 0, peso: 1.0, custo: 150, efeito: "-", desc: "Pequeno (cerca de 30 cm), ótimo para defletir lâminas." },
        { nome: "Escudo Temeriano", sub: "Escudo Leve", dura: 8, disp: "C", ma: 1, vf: 0, peso: 1.5, custo: 225, efeito: "-", desc: "Clássico escudo lágrima/pipa temeriano para deter flechas e espadas." },
        { nome: "Escudo de Saqueador Skellige", sub: "Escudo Médio", dura: 10, disp: "I", ma: 1, vf: 0, peso: 2.0, custo: 325, efeito: "-", desc: "Escudo grande e redondo com domo de metal central e alça traseira." },
        { nome: "Escudo Kaedweni", sub: "Escudo Médio", dura: 14, disp: "I", ma: 1, vf: 0, peso: 2.5, custo: 400, efeito: "-", desc: "Revestido com ferro escuro na frente; mais pesado e resistente que o temeriano." },
        { nome: "Escudo Lágrima de Aço", sub: "Escudo Médio", dura: 16, disp: "C", ma: 0, vf: 0, peso: 3.0, custo: 400, efeito: "-", desc: "Inteiro de aço; barulhento ao bloquear, mas extremamente durável." },
        { nome: "Pavise", sub: "Escudo Pesado", dura: 20, disp: "I", ma: 0, vf: 1, peso: 4.0, custo: 500, efeito: "Cobertura Completa", desc: "Escudo-parede enorme para se ajoelhar atrás e esperar passar chuvas de flechas." },
        { nome: "Pavise Nilfgaardiano", sub: "Escudo Pesado", dura: 25, disp: "R", ma: 1, vf: 1, peso: 5.0, custo: 600, efeito: "Cobertura Completa (Apoio Autónomo)", desc: "Possui apoio traseiro para ficar em pé sozinho (1 ação), liberando as mãos do besteiro." }
      ]
    },
    {
      id: "ancestral",
      titulo: "⚒️ Arsenal do Povo Ancestral (Anões, Elfos e Gnomos)",
      citação: "Os anões fazem o melhor aço, os elfos fazem as melhores armas, e os gnomos os humilham com o acabamento artesanal detalhado.",
      colunas: ["Nome", "Subcategoria", "Atributos / Proteção", "Disp.", "MEL/MA", "VF", "Peso", "Custo", "Efeito & Descrição"],
      itens: [
        // Armas Ancestrais
        { nome: "Messer Élfica", sub: "Espada Ancestral", attr: "PE/CO | PA +2 | Dano 3d6+4 | DURA 15 | 1M | Porte G", disp: "R", mel: 2, vf: "-", peso: 2.0, custo: 595, efeito: "-", desc: "Inventada em Nazair como faca gigante para burlar leis e aperfeiçoada pelos elfos." },
        { nome: "Espada de Cavalaria Vrihedd", sub: "Espada Ancestral", attr: "PE/CO | PA +3 | Dano 4d6+4 | DURA 15 | 1M | Porte G", disp: "R", mel: 0, vf: "-", peso: 2.5, custo: 745, efeito: "Sangramento (25%)", desc: "Espada de aço azul da temida brigada de cavalaria élfica Vrihedd." },
        { nome: "Espada de Meteorito", sub: "Espada Ancestral", attr: "PE/CO | PA +1 | Dano 5d6 | DURA 20 | 2M | Porte IE", disp: "R", mel: 2, vf: "-", peso: 3.0, custo: 875, efeito: "Balanceada, Meteorito", desc: "Forjada em minério de meteorito com brilho oleoso; leve e forte como o inferno." },
        { nome: "Gwyhyr Gnomo", sub: "Espada Ancestral", attr: "PE/CO | PA +3 | Dano 5d6+3 | DURA 15 | 2M | Porte IE", disp: "R", mel: 2, vf: "-", peso: 2.5, custo: 1090, efeito: "Sangramento (50%)", desc: "Lendária lâmina longa preta, tão afiada que dá para se barbear com ela." },
        { nome: "Lâmina Tir Tochair", sub: "Espada Ancestral", attr: "PE/CO | PA +3 | Dano 6d6 | DURA 15 | 2M | Porte IE", disp: "R", mel: 2, vf: "-", peso: 3.0, custo: 1175, efeito: "Sangramento (25%)", desc: "Obra-prima dos gnomos de Tir Tochair com gravuras finas como um fio de cabelo." },
        { nome: "Adaga Rondel Ananica", sub: "Lâmina Peq. Ancestral", attr: "PE/CO | PA +2 | Dano 2d6+2 | DURA 10 | 1M | Porte P", disp: "R", mel: 1, vf: "-", peso: 1.0, custo: 485, efeito: "Perfura Armadura", desc: "Fina e forte com pomo circular, feita para entrar nas frestas da armadura." },
        { nome: "Cutelo Anão", sub: "Lâmina Peq. Ancestral", attr: "CO/CC | PA +2 | Dano 3d6 | DURA 15 | 1M | Porte P", disp: "R", mel: 1, vf: "-", peso: 1.5, custo: 500, efeito: "-", desc: "Curto e brutal, corta pedaços de árvores e pessoas em brigas de facas." },
        { nome: "Machado de Anão", sub: "Machado Ancestral", attr: "CO | PA +3 | Dano 5d6+3 | DURA 15 | 1M | Porte G", disp: "R", mel: 1, vf: "-", peso: 4.0, custo: 740, efeito: "-", desc: "Machado de duas cabeças que garante peso e sempre uma lâmina afiada pronta." },
        { nome: "Machado Negro Gnomo", sub: "Machado Ancestral", attr: "CO | PA +2 | Dano 6d6+2 | DURA 15 | 2M | Porte IE", disp: "R", mel: 2, vf: "-", peso: 2.5, custo: 910, efeito: "-", desc: "Cabeça sólida marcada por runas de gnomo; fino, leve e corta armaduras." },
        { nome: "Martelo de Mahakam", sub: "Concussiva Ancestral", attr: "CC | PA +0 | Dano 5d6 | DURA 15 | 2M | Porte G", disp: "R", mel: 1, vf: "-", peso: 3.5, custo: 750, efeito: "Perfura Armadura", desc: "Martelo com longa ponta traseira num cabo de 1 metro." },
        { nome: "Maça Meteorito c/ Corrente", sub: "Concussiva Ancestral", attr: "CC | PA +2 | Dano 6d6 | DURA 20 | 1M | Porte IE", disp: "R", mel: 2, vf: "-", peso: 4.0, custo: 900, efeito: "Agarradora, Meteorito", desc: "Bola com espinhos de aço de meteorito presa a corrente para esmagar crânios." },
        { nome: "Martelo Anão com Haste", sub: "Haste Ancestral", attr: "CC/PE | PA +0 | Dano 5d6+2 | DURA 15 | 2M | Porte IE", disp: "R", mel: 1, vf: "-", peso: 4.0, custo: 835, efeito: "Longo Alcance, Atordoamento (-2)", desc: "Dois metros com cabeça de martelo elaborada, longa estaca no topo e gancho atrás." },
        { nome: "Glaive Élfica", sub: "Haste Ancestral", attr: "CO/PE/CC | PA +2 | Dano 4d6+3 | DURA 10 | 2M | Porte IE", disp: "R", mel: 2, vf: "-", peso: 3.0, custo: 925, efeito: "Longo Alcance, Sangramento (25%)", desc: "Antiga arma dos guardas de palácios da era de ouro élfica." },
        { nome: "Cajado Gnomo", sub: "Cajado Ancestral", attr: "CC | PA +1 | Dano 3d6+2 | DURA 15 | 2M | Porte G", disp: "R", mel: 2, vf: "-", peso: 2.5, custo: 910, efeito: "Longo Alcance, Foco (3)", desc: "Madeira escura tingida com entalhes personalizados e pedras preciosas." },
        { nome: "Cajado de Caminhar Élfico", sub: "Cajado Ancestral", attr: "CC | PA +1 | Dano 3d6 | DURA 10 | 2M | Porte IE", disp: "R", mel: 2, vf: "-", peso: 1.5, custo: 975, efeito: "Longo Alcance, Foco (3), Foco Maior", desc: "Altura do peito, ornado com seda trançada e ouro de altíssima concentração mágica." },
        { nome: "Arco de Viagem Élfico", sub: "Arco Ancestral", attr: "PE | PA +1 | Dano 4d6 | DURA 10 | 2M | Alc. 200m | Porte G", disp: "R", mel: 1, vf: "-", peso: 1.0, custo: 575, efeito: "-", desc: "Ao remover a corda, as pontas dobram para caber dentro de uma bolsa." },
        { nome: "Zefhar Élfico", sub: "Arco Ancestral", attr: "PE | PA +2 | Dano 6d6 | DURA 10 | 2M | Alc. 350m | Porte IE", disp: "R", mel: 2, vf: "-", peso: 2.5, custo: 1100, efeito: "Perfuração Melhorada", desc: "Arco grande de quatro pontas que dobra o poder de disparo sem pesar mais." },
        { nome: "Besta de Mão de Gnomo", sub: "Besta Ancestral", attr: "PE | PA +3 | Dano 2d6 | DURA 10 | 1M | Alc. 100m | Porte P", disp: "R", mel: 1, vf: "-", peso: 1.0, custo: 425, efeito: "Recarga Lenta", desc: "Obra de arte em metal e madeira escura tingida com entalhes maravilhosos." },
        { nome: "Besta Pesada de Anão", sub: "Besta Ancestral", attr: "PE | PA +3 | Dano 5d6 | DURA 15 | 2M | Alc. 300m | Porte IE", disp: "R", mel: 2, vf: "-", peso: 3.5, custo: 850, efeito: "Recarga Lenta", desc: "Construída para a força anã; inclui alavanca pé de cabra para humanos e elfos." },
        { nome: "Parafuseira Élfica", sub: "Munição Ancestral", attr: "PE | DURA 10 | Porte G", disp: "R", mel: 0, vf: "-", peso: 0.1, custo: 50, efeito: "Sangramento (100%) Especial", desc: "Ponta em parafuso que permanece na ferida; requer Primeiros Socorros ND 16 para estancar." },
        { nome: "Ponta de Impacto Anã", sub: "Munição Ancestral", attr: "CC | DURA 15 | Porte G", disp: "R", mel: 0, vf: "-", peso: 0.1, custo: 50, efeito: "Ablativa", desc: "Projéteis pesados usados por mercenários anões para rachar armaduras de placa." },
        // Armaduras e Escudos Ancestrais
        { nome: "Gibão de Proteção Ananico", sub: "Armadura Leve Ancestral", attr: "8 PP (Tronco e Braços)", disp: "R", mel: 1, vf: 0, peso: 1.0, custo: 375, efeito: "Disfarçada (Consciência ND 20)", desc: "Parece exatamente um gibão comum, ocultando uma camada sólida de proteção." },
        { nome: "Cota de Malha de Gnomo", sub: "Armadura Leve Ancestral", attr: "10 PP (Corpo Inteiro)", disp: "R", mel: 1, vf: 0, peso: 5.0, custo: 975, efeito: "Resistência: Cortante", desc: "Malha preta sólida de anéis pequenos e leves que cobre cabeça, tronco, braços e pernas." },
        { nome: "Manto de Anão", sub: "Armadura Média Ancestral", attr: "16 PP (Corpo Inteiro)", disp: "R", mel: 1, vf: 0, peso: 5.0, custo: 1400, efeito: "À prova de água", desc: "Manto de couro tratado com técnica especial anã para viagens e combates." },
        { nome: "Armadura Scoia'tael", sub: "Armadura Média Ancestral", attr: "20 PP (Corpo Inteiro)", disp: "R", mel: 2, vf: 1, peso: 12.0, custo: 2325, efeito: "+2 em Furtividade no ermo", desc: "Construída com folhagem e peles locais pelos comandantes Scoia'tael." },
        { nome: "Armadura Dragoon de Gnomo", sub: "Armadura Pesada Ancestral", attr: "25 PP (Corpo Inteiro)", disp: "R", mel: 2, vf: 2, peso: 20.0, custo: 2850, efeito: "Resistência: CO e PE | +2 em Cavalgar", desc: "Placa leve preta com brilho azul que auxilia o equilíbrio sobre a sela." },
        { nome: "Armadura de Placa de Mahakam", sub: "Armadura Pesada Ancestral", attr: "30 PP (Corpo Inteiro)", disp: "R", mel: 3, vf: 2, peso: 30.0, custo: 3525, efeito: "Resistência: CO, CC e PE", desc: "O melhor aço do mundo; placa escura angular com detalhes em bronze, ouro e runas." },
        { nome: "Broquel de Gnomo", sub: "Escudo Leve Ancestral", attr: "15 DURA", disp: "R", mel: 2, vf: 0, peso: 1.0, custo: 450, efeito: "-", desc: "Pequeno, mas aguenta mais pancadas do que muitos escudos grandes humanos." },
        { nome: "Escudo Élfico", sub: "Escudo Médio Ancestral", attr: "25 DURA", disp: "R", mel: 2, vf: 0, peso: 3.0, custo: 700, efeito: "-", desc: "Formato de lágrima com detalhes em ouro e padrões de folhas." },
        { nome: "Pavise de Mahakam", sub: "Escudo Pesado Ancestral", attr: "35 DURA", disp: "R", mel: 2, vf: 1, peso: 5.5, custo: 1050, efeito: "Cobertura Completa (Apoio Autónomo)", desc: "Fica em pé sozinho na sua frente, forjado pelos mestres artesãos de Mahakam." }
      ]
    },
    {
      id: "melhorias",
      titulo: "🔧 Melhorias de Armadura",
      citação: "Aplicar uma melhoria exige um teste de Criar (ND 14) durante 1 rodada. Remover exige Criar (ND 15).",
      colunas: ["Nome", "Subcategoria", "Bónus PP", "Resistências Concedidas", "Disp.", "Peso", "Custo", "Efeito & Descrição"],
      itens: [
        { nome: "Fibra", sub: "Melhoria de Armadura", pp: "+1", res: "Nenhuma", disp: "F", peso: 0.5, custo: 40, efeito: "Resistência a Sangramento", desc: "Reduz o dano da condição de Sangramento pela metade (arredondado para baixo)." },
        { nome: "Couro com Tachas", sub: "Melhoria de Armadura", pp: "+2", res: "Cortante (CO)", disp: "C", peso: 1.0, custo: 80, efeito: "-", desc: "Reforço de couro cravejado com tachas metálicas contra cortes." },
        { nome: "Cota de Malha", sub: "Melhoria de Armadura", pp: "+3", res: "Concussiva (CC), Cortante (CO)", disp: "I", peso: 3.0, custo: 125, efeito: "-", desc: "Secções de anéis metálicos aplicados nos pontos críticos da armadura." },
        { nome: "Couro Fortalecido", sub: "Melhoria de Armadura", pp: "+2", res: "Concussiva (CC), Cortante (CO)", disp: "C", peso: 1.5, custo: 130, efeito: "Resistência a Fogo", desc: "Placas de couro tratado que protegem contra chamas, cortes e impacto." },
        { nome: "Aço", sub: "Melhoria de Armadura", pp: "+4", res: "Cortante (CO), Perfurante (PE)", disp: "I", peso: 3.5, custo: 145, efeito: "-", desc: "Gorjeiras, brafoneiras ou grevas adicionais de aço sólido." },
        { nome: "Anão", sub: "Melhoria de Armadura", pp: "+5", res: "Cortante (CO), Perfurante (PE)", disp: "R", peso: 3.5, custo: 195, efeito: "-", desc: "Reforço superior de metalurgia anã de alta durabilidade." },
        { nome: "Élfico", sub: "Melhoria de Armadura", pp: "+3", res: "Concussiva (CC), Perfurante (PE)", disp: "R", peso: 0.5, custo: 200, efeito: "+1 em Furtividade", desc: "Acabamento élfico extremamente leve e silencioso." }
      ]
    },
    {
      id: "alquimicos",
      titulo: "🧪 Itens Alquímicos",
      citação: "Todos os itens alquímicos podem ser escondidos em bolsos ou pochetes e quebram se sofrerem mais de 5 pontos de dano.",
      colunas: ["Nome", "Subcategoria", "Disp.", "Peso", "Custo", "Efeito Mecânico & Descrição"],
      itens: [
        { nome: "Ervas Entorpecentes", sub: "Médico", disp: "F", peso: 0.1, custo: 12, efeito: "-2 em penalidades de Críticos/Perto da Morte", desc: "Alivia a dor sobre um ferimento durante 2d10 rodadas." },
        { nome: "Tinta Invisível", sub: "Utilidade", disp: "C", peso: 0.1, custo: 15, efeito: "Escrita secreta", desc: "As mensagens escritas só podem ser lidas quando expostas ao calor por 1 turno." },
        { nome: "Amigo do Envenenador", sub: "Veneno / Subterfúgio", disp: "C", peso: 0.1, custo: 16, efeito: "Aumenta ND para detetar veneno para 20", desc: "Líquido claro que dá gosto doce ou apetitoso à comida ou bebida envenenada." },
        { nome: "Tumba de Adda", sub: "Utilidade", disp: "C", peso: 0.1, custo: 18, efeito: "Preserva por 1d10 dias", desc: "Impede que comidas perecíveis ou defuntos (requer 2 doses) apodreçam." },
        { nome: "Pó Básico", sub: "Médico / Defesa", disp: "C", peso: 0.1, custo: 18, efeito: "Neutraliza Ácido", desc: "Combate 1 dose de Solução Ácida ou o efeito de ferimento crítico de estômago rasgado." },
        { nome: "Pó de Coagulação", sub: "Médico", disp: "C", peso: 0.1, custo: 20, efeito: "Estanca Sangramento (2d10 rodadas)", desc: "Segura o fluxo de sangue temporariamente até um médico tratar." },
        { nome: "Sopro de Súcubo", sub: "Social", disp: "C", peso: 0.1, custo: 20, efeito: "+2 Sedução (pele) ou -5 Resist. Sedução (bebida)", desc: "Na bebida exige Consciência ND 16 para notar." },
        { nome: "Fluido Esterilizante", sub: "Médico", disp: "C", peso: 0.1, custo: 22, efeito: "+2 Taxa de Cura e -2 dias em Críticos", desc: "Desinfeta ferimentos acelerando a recuperação (usos não cumulativos)." },
        { nome: "Alucinógeno", sub: "Subterfúgio", disp: "C", peso: 0.1, custo: 25, efeito: "Alucinações por 1d10 rodadas (Tolerância ND 15)", desc: "Pode ser arremessado a 3m ou despejado numa bebida." },
        { nome: "Sais Aromáticos", sub: "Médico", disp: "C", peso: 0.1, custo: 25, efeito: "Acorda do Atordoamento/Inconsciência (25 usos)", desc: "Colocado no nariz para despertar aliados imediatamente." },
        { nome: "Adesivo Alquímico", sub: "Utilidade / Combate", disp: "C", peso: 0.1, custo: 28, efeito: "Cola permanente após 2 rodadas (Físico ND 16)", desc: "Arremesso (Atletismo, CORx2m); gruda pessoas ou objetos." },
        { nome: "Clorofórmio", sub: "Subterfúgio", disp: "C", peso: 0.1, custo: 36, efeito: "Inconsciência (Resist. Atordoamento -2)", desc: "Ataque curta distância com pano embebido. Garrafa contém 25 doses." },
        { nome: "Veneno Negro", sub: "Veneno / Subterfúgio", disp: "C", peso: 0.1, custo: 45, efeito: "Envenena (Tolerância ND 16)", desc: "1 rodada para cobrir arma (dura 1d10 rodadas). Na bebida exige Consciência ND 16." },
        { nome: "Inflamador", sub: "Combate / Fogo", disp: "I", peso: 0.1, custo: 45, efeito: "50% chance de incendiar (+50% com magia/fogo)", desc: "Seca rapidamente e torna objetos ou alvos extremamente inflamáveis." },
        { nome: "Solução Ácida", sub: "Combate", disp: "I", peso: 0.5, custo: 56, efeito: "2d6 dano e 1d6/2 ablação (cone 2m)", desc: "Arremesso (Atletismo, CORx2m); derrete fechaduras, armas e armaduras." },
        { nome: "Poção de Lágrimas de Esposas", sub: "Médico / Utilidade", disp: "I", peso: 0.1, custo: 56, efeito: "Remove Intoxicação imediatamente", desc: "Deixa o utilizador sóbrio no mesmo instante após beber." },
        { nome: "Fogo da Zerrikânia", sub: "Combate / Fogo", disp: "I", peso: 0.5, custo: 65, efeito: "Incendeia tudo num cone de 2m", desc: "Arremesso (Atletismo, CORx2m); explode em fogo verde assustador ao tocar no ar." },
        { nome: "Elixir de Pantagran", sub: "Social", disp: "I", peso: 0.5, custo: 67, efeito: "-2 em Resistir Coerção por 1d6/2 horas", desc: "Traz alegria delirante, tornando o alvo suscetível a Persuasão, Carisma e Sedução." },
        { nome: "Poção de Perfume", sub: "Subterfúgio", disp: "I", peso: 0.5, custo: 76, efeito: "Intoxicação por 1d10h (Tolerância ND 16, Tox. 25%)", desc: "Só pode ser desfeita por magia ou Lágrimas de Esposas." },
        { nome: "Lágrimas de Talgar", sub: "Combate / Gelo", disp: "I", peso: 0.5, custo: 79, efeito: "Congela num cone de 2m (Dobro de ablação)", desc: "Arremesso (Atletismo, CORx2m); congela imediatamente o que atingir." },
        { nome: "Fisstech", sub: "Droga / Anestésico", disp: "I", peso: 0.1, custo: 80, efeito: "Transe eufórico (Vício: Tolerância ND 18)", desc: "Exige Tolerância ND 16 para não ficar atordoado (<10 causa desmaio por 5 rodadas)." },
        { nome: "Fúria de Bredan", sub: "Combate / Explosivo", disp: "R", peso: 0.5, custo: 95, efeito: "2d6 dano em todas as partes do corpo (raio 2m)", desc: "Arremesso (Atletismo, CORx2m); elixir explosivo que detona em contacto com o ar." }
      ]
    },
    {
      id: "transporte",
      titulo: "🐎 Transporte, Montarias e Equipamento de Sela",
      citação: "Um cavalo pode ser muito útil para fugir rapidamente de bandidos ou monstros, e o maior aliado de um cavaleiro em combate.",
      colunas: ["Nome", "Subcategoria", "Atributos / Efeito", "Disp.", "Peso", "Custo", "Detalhes"],
      itens: [
        // Montarias e Veículos
        { nome: "Carroça", sub: "Veículo", attr: "Atletismo N/A | Ctrl +0 | VEL Animal -1 | VIT 30", disp: "C", peso: 300.0, custo: 200, desc: "Veículo de carga simples puxado por animal." },
        { nome: "Mula", sub: "Montaria", attr: "Atletismo 10 | Ctrl +0 | VEL 15 | VIT 40", disp: "F", peso: 150.0, custo: 200, desc: "Animal resistente para carga e viagens." },
        { nome: "Barco a Vela", sub: "Embarcação", attr: "Atletismo N/A | Ctrl -1 | VEL 6 | VIT 30", disp: "C", peso: 130.0, custo: 230, desc: "Pequena embarcação costeira ou fluvial." },
        { nome: "Boi", sub: "Montaria / Carga", attr: "Atletismo 8 | Ctrl -2 | VEL 15 | VIT 65", disp: "F", peso: 300.0, custo: 278, desc: "Animal de tração pesado com alta vitalidade." },
        { nome: "Cavalo", sub: "Montaria", attr: "Atletismo 15 | Ctrl +2 | VEL 20 | VIT 30", disp: "C", peso: 100.0, custo: 520, desc: "Montaria ágil e confiável para estradas." },
        { nome: "Carruagem", sub: "Veículo", attr: "Atletismo N/A | Ctrl -1 | VEL Animal -3 | VIT 60", disp: "I", peso: 600.0, custo: 660, desc: "Transporte fechado com proteção e conforto." },
        { nome: "Cavalo de Guerra", sub: "Montaria", attr: "Atletismo 12 | Ctrl -2 | VEL 18 | VIT 50", disp: "I", peso: 270.0, custo: 1600, desc: "Cavalo robusto treinado para o caos das batalhas." },
        { nome: "Chalupa", sub: "Embarcação", attr: "Atletismo N/A | Ctrl +0 | VEL 10 | VIT 60", disp: "I", peso: 610.0, custo: 1670, desc: "Embarcação rápida e manobrável." },
        { nome: "Veleiro", sub: "Embarcação", attr: "Atletismo N/A | Ctrl -2 | VEL 8 | VIT 80", disp: "R", peso: 2040.0, custo: 2180, desc: "Navio de grande porte para travessias marítimas." },
        // Equipamentos de Montaria
        { nome: "Sela", sub: "Selas", attr: "Sem penalidades para Cavalgar", disp: "F", peso: 5.0, custo: 100, desc: "Sela básica de couro para montaria." },
        { nome: "Sela de Corrida", sub: "Selas", attr: "+1 Controle para Cavalgar e +1 VEL", disp: "C", peso: 3.0, custo: 200, desc: "Sela leve desenhada para velocidade máxima." },
        { nome: "Sela de Cavalaria", sub: "Selas", attr: "+1 Controle para atacar | Bainha acoplada", disp: "I", peso: 6.0, custo: 325, desc: "Reforçada para combate montado com suporte para uma arma." },
        { nome: "Viseiras", sub: "Viseiras", attr: "+1 para acalmar a montaria", disp: "F", peso: 0.1, custo: 100, desc: "Limita a visão lateral do cavalo para evitar sustos." },
        { nome: "Viseiras de Corrida", sub: "Viseiras", attr: "+2 para acalmar a montaria", disp: "C", peso: 0.1, custo: 125, desc: "Viseiras ajustadas de qualidade superior." },
        { nome: "Alforjes", sub: "Alforjes", attr: "2 compartimentos de 25 kg cada (50 kg total)", disp: "F", peso: 1.5, custo: 100, desc: "Bolsas de sela para itens pequenos ou médios." },
        { nome: "Alforjes Militares", sub: "Alforjes", attr: "2x 50 kg (100 kg total) + alças p/ 6 itens grandes", disp: "I", peso: 2.0, custo: 150, desc: "Alforjes reforçados de alta capacidade." },
        { nome: "Barda de Couro", sub: "Bardas", attr: "PP: 10 para a montaria inteira", disp: "I", peso: 10.0, custo: 550, desc: "Armadura de couro para proteção do cavalo." },
        { nome: "Barda de Malha", sub: "Bardas", attr: "PP: 15 para a montaria | -1 Controle p/ Cavalgar", disp: "R", peso: 25.0, custo: 1050, desc: "Cota de malha pesada cobrindo toda a montaria." }
      ]
    },
    {
      id: "ferramentas",
      titulo: "🛠️ Kits de Ferramentas e Focos Mágicos",
      citação: "Tentar realizar tarefas técnicas sem o kit de ferramentas adequado impõe uma penalidade de -4 na jogada.",
      colunas: ["Nome", "Subcategoria", "Disp.", "Porte", "Peso", "Custo", "Efeito & Utilidade"],
      itens: [
        { nome: "Utensílios para Cozinhar", sub: "Ferramentas", disp: "F", porte: "G", peso: 3.0, custo: 15, efeito: "Permite cozinhar sem penalidade (-4)", desc: "Panelas e utensílios básicos de acampamento." },
        { nome: "Kit de Escrita", sub: "Ferramentas", disp: "F", porte: "P", peso: 1.0, custo: 25, efeito: "Permite escrever cartas e notas", desc: "Penas, tinta e pergaminhos." },
        { nome: "Equipamento de Pesca", sub: "Ferramentas", disp: "F", porte: "M", peso: 0.5, custo: 27, efeito: "+2 em Sobrevivência no Ermo para pesca", desc: "Linhas, anzóis e iscas." },
        { nome: "Kit de Maquiagem", sub: "Ferramentas", disp: "F", porte: "M", peso: 0.5, custo: 35, efeito: "+2 em Sedução e Carisma", desc: "Pós, pinturas e cosméticos." },
        { nome: "Ferramentas para Belas Artes", sub: "Ferramentas", disp: "C", porte: "P", peso: 2.0, custo: 55, efeito: "Permite criar pintura, joalharia ou escultura", desc: "Pincéis, cinzéis e instrumentos artísticos." },
        { nome: "Kit de Disfarce", sub: "Subterfúgio", disp: "I", porte: "P", peso: 1.0, custo: 58, efeito: "+2 em Disfarce", desc: "Perucas, tinturas e adereços para mudar a aparência." },
        { nome: "Kit de Falsificação", sub: "Subterfúgio", disp: "I", porte: "P", peso: 0.5, custo: 58, efeito: "Permite falsificar moedas e documentos", desc: "Selos falsos, tintas e gravadores." },
        { nome: "Ferramentas de Comerciante", sub: "Ferramentas", disp: "C", porte: "P", peso: 1.5, custo: 60, efeito: "+2 em Negócios para avaliar bens", desc: "Balanças de precisão, lentes e pesos." },
        { nome: "Kit de Alquimia", sub: "Alquimia", disp: "I", porte: "G", peso: 3.0, custo: 80, efeito: "Permite criar itens alquímicos", desc: "Contém instrumentos de destilação e 10 frascos." },
        { nome: "Ferramentas de Ladrão", sub: "Subterfúgio", disp: "I", porte: "M", peso: 1.0, custo: 80, efeito: "Permite arrombar fechaduras ou cadeados", desc: "Gazuas, pinças e chaves falsas." },
        { nome: "Ferramentas de Fabricação", sub: "Artesanato", disp: "C", porte: "G", peso: 5.0, custo: 83, efeito: "Permite fabricar/modificar armas e armaduras", desc: "Martelos, tenazes, grosas e formões." },
        { nome: "Kit de Cirurgião", sub: "Médico", disp: "C", porte: "P", peso: 1.0, custo: 83, efeito: "Permite realizar cirurgia médica", desc: "Bisturis, agulhas de sutura e pinças cirúrgicas." },
        { nome: "Forja de Funileiro", sub: "Artesanato", disp: "I", porte: "G", peso: 5.0, custo: 111, efeito: "Forja portátil para trabalhar metal", desc: "Permite forjar armas e armaduras em qualquer lugar." },
        { nome: "Amuleto Simples", sub: "Foco Mágico", disp: "R", porte: "M", peso: 0.1, custo: 250, efeito: "Foco (1)", desc: "Alternativa discreta aos cajados para evitar caçadores de bruxas." },
        { nome: "Amuleto com Pedra Preciosa", sub: "Foco Mágico", disp: "R", porte: "M", peso: 0.1, custo: 500, efeito: "Foco (3)", desc: "Joia encantada de grande poder de canalização mágica." },
        { nome: "Telecomunicador", sub: "Artefacto Mágico", disp: "R", porte: "G", peso: 4.0, custo: 1000, efeito: "Permite usar o ritual Telecomunicação", desc: "Dispositivo raro de comunicação mágica à distância." }
      ]
    },
    {
      id: "geral",
      titulo: "🎒 Equipamento Geral, Contentores e Roupas",
      citação: "Sendo um viajante típico, você precisa viajar com pouca carga. Isso lhe permite ser mais rápido e evita que seja um alvo.",
      colunas: ["Nome", "Subcategoria", "Peso", "Custo", "Capacidade / Efeito & Descrição"],
      itens: [
        // Contentores
        { nome: "Saco", sub: "Contentor", peso: 0.1, custo: 3, desc: "Saco grande de tecido; carrega até 20 kg de itens minúsculos." },
        { nome: "Pochete", sub: "Contentor", peso: 0.1, custo: 7, desc: "Bolsa pequena presa ao cinto; carrega 5 kg de itens minúsculos." },
        { nome: "Cesto", sub: "Contentor", peso: 0.5, custo: 10, desc: "Usado para colher ervas e bagas; carrega 15 kg de itens pequenos." },
        { nome: "Bolso Secreto", sub: "Contentor", peso: 0.1, custo: 11, desc: "Costurado dentro da roupa; comporta 5 kg de itens minúsculos (Consciência ND 16 para notar)." },
        { nome: "Bainha de Coxa", sub: "Contentor", peso: 0.1, custo: 11, desc: "Prende lâminas pequenas na coxa sob roupas (Consciência ND 18 para notar)." },
        { nome: "Bainha de Manga", sub: "Contentor", peso: 0.1, custo: 13, desc: "Prende lâmina pequena no antebraço (Consciência ND 15 para notar)." },
        { nome: "Bolsa", sub: "Contentor", peso: 1.0, custo: 14, desc: "Bolsa a tiracolo; carrega até 30 kg de itens pequenos." },
        { nome: "Baú de Madeira", sub: "Contentor", peso: 1.0, custo: 18, desc: "Mantém itens seguros; carrega 30 kg de itens pequenos." },
        { nome: "Cartucheira", sub: "Contentor", peso: 1.0, custo: 19, desc: "Cinto peitoral com bolsos e ganchos; aguenta 25 kg de itens minúsculos ou maiores nos ganchos." },
        { nome: "Bainha para Arco", sub: "Contentor", peso: 1.5, custo: 24, desc: "Prática para carregar um arco e uma aljava cheia de flechas." },
        { nome: "Baú de Madeira Grande", sub: "Contentor", peso: 10.0, custo: 30, desc: "Resistente contra ladrões; carrega 50 kg em itens grandes." },
        // Geral
        { nome: "Giz", sub: "Aventura", peso: 0.1, custo: 2, desc: "Faz linhas brancas visíveis para marcar caminhos em labirintos e florestas." },
        { nome: "Sabonete", sub: "Higiene", peso: 0.1, custo: 4, desc: "Encontrado nas grandes cidades para higiene pessoal." },
        { nome: "Tabaco", sub: "Lazer", peso: 0.1, custo: 4, desc: "Erva seca para fumar em cachimbo." },
        { nome: "Velas (x5)", sub: "Iluminação", peso: 0.5, custo: 5, desc: "Aumenta os níveis de luz em 1 por 2m ao redor (vento forte apaga)." },
        { nome: "Baralho de Gwent", sub: "Lazer", peso: 0.1, custo: 5, desc: "Cartas ilustradas das 5 facções: Reinos do Norte, Nilfgaard, Scoia'tael, Monstros e Skellige." },
        { nome: "Pederneira e Aço", sub: "Acampamento", peso: 0.1, custo: 6, desc: "Cria chuva de faíscas para acender fogueiras." },
        { nome: "Diário / Livro de Registos", sub: "Utilidade", peso: 0.5, custo: 8, desc: "Encadernação de couro com folhas em branco." },
        { nome: "Pitões (x5)", sub: "Escalada", peso: 0.5, custo: 10, desc: "Espinhos de ferro para prender cordas ou esfaquear (1d6 de dano em curta distância)." },
        { nome: "Lona", sub: "Acampamento", peso: 1.5, custo: 10, desc: "Lona grande impermeável para proteger da chuva." },
        { nome: "Dados Viciados", sub: "Lazer / Trapaça", peso: 0.1, custo: 12, desc: "+3 em Apostar (exige Consciência ND 16 para notarem)." },
        { nome: "Gancho de Escalada", sub: "Escalada", peso: 0.5, custo: 13, desc: "Gancho de 4 pontas para amarrar corda (+2 em Escalar)." },
        { nome: "Símbolo Sagrado", sub: "Religião", peso: 0.1, custo: 14, desc: "Símbolo esculpido em madeira que demonstra a sua fé." },
        { nome: "Colchonete", sub: "Acampamento", peso: 1.5, custo: 16, desc: "Acolchoado confortável com cobertor para dormir na estrada." },
        { nome: "Ampulheta Pequena", sub: "Utilidade", peso: 0.1, custo: 18, desc: "Mede tempos curtos e precisos para alquimia e forja." },
        { nome: "Mapa do Continente", sub: "Navegação", peso: 0.1, custo: 18, desc: "Das Montanhas do Dragão a Nilfgaard (+3 em Navegar)." },
        { nome: "Cachimbo", sub: "Lazer", peso: 0.1, custo: 19, desc: "Cachimbo simples de madeira para fumar tabaco." },
        { nome: "Tenda", sub: "Acampamento", peso: 4.0, custo: 19, desc: "Abrigo portátil contra chuva e vento." },
        { nome: "20 metros de Corda", sub: "Escalada", peso: 1.5, custo: 20, desc: "Corda resistente indispensável para viajantes." },
        { nome: "Perfume / Colónia", sub: "Higiene", peso: 0.1, custo: 22, desc: "Borrifo perfumado para disfarçar odores." },
        { nome: "Tabuleiro de Póquer de Dados", sub: "Lazer", peso: 0.5, custo: 25, desc: "Tabuleiro pequeno com prato de rolagem e 10 dados." },
        { nome: "Espelho de Mão", sub: "Utilidade", peso: 0.5, custo: 27, desc: "Pequeno espelho para ver a aparência ou espiar cantos." },
        { nome: "Algemas", sub: "Contenção", peso: 0.5, custo: 30, desc: "Prende pulsos (com chave). Arrombar Fechaduras ND 16 ou Físico ND 18 para quebrar." },
        { nome: "Lanterna", sub: "Iluminação", peso: 1.0, custo: 33, desc: "Gaiola metálica com vela; aumenta luz em 2 para 3m ao redor." },
        { nome: "Cadeado", sub: "Segurança", peso: 0.1, custo: 34, desc: "Cadeado comum (ND 15 em Arrombar Fechaduras)." },
        { nome: "Tenda Grande", sub: "Acampamento", peso: 8.0, custo: 36, desc: "Abriga 8 pessoas confortavelmente ou serve como tenda de mercador." },
        { nome: "Ampulheta", sub: "Utilidade", peso: 1.0, custo: 38, desc: "Marca exatamente 1 hora." },
        { nome: "Instrumento Musical", sub: "Arte", peso: 1.0, custo: 38, desc: "Alaúdes, flautas, liras, harpas ou gaitas de foles." },
        { nome: "Lanterna Sinalizadora", sub: "Iluminação", peso: 1.0, custo: 39, desc: "Janela com alavanca; aumenta luz em 3 num cone de 5m." },
        { nome: "Prótese Básica", sub: "Médico", peso: 1.0, custo: 50, desc: "Perna de pau simples ou gancho de mão." },
        { nome: "Grilhões", sub: "Contenção", peso: 2.0, custo: 50, desc: "Prende pulsos e calcanhares (restringe VEL a 3). Arrombar ND 20 ou Físico ND 22." },
        { nome: "Cadeado Grande", sub: "Segurança", peso: 0.1, custo: 68, desc: "Cadeado reforçado de cofre (ND 18 em Arrombar Fechaduras)." },
        { nome: "Prótese de Qualidade", sub: "Médico", peso: 1.5, custo: 100, desc: "Perna de pau com pé ou mão mecânica com dedos que travam." },
        // Roupas
        { nome: "Roupas Básicas", sub: "Roupas", peso: 2.0, custo: 10, desc: "Camisa básica, calça, botas (ou vestido) e manto." },
        { nome: "Roupas de Frio", sub: "Roupas", peso: 3.0, custo: 45, desc: "Peles pesadas e mantos (+5 em Tolerância contra ambientes frios)." },
        { nome: "Joias", sub: "Roupas / Luxo", peso: 0.5, custo: 50, desc: "Adornos brilhantes de diversos tamanhos." },
        { nome: "Roupas de Ladino", sub: "Roupas", peso: 1.5, custo: 50, desc: "Roupas escuras com capuz (+1 em Furtividade à noite)." },
        { nome: "Roupas da Moda", sub: "Roupas / Luxo", peso: 2.0, custo: 70, desc: "Trajes elegantes para festas da alta sociedade." }
      ]
    },
    {
      id: "taverna",
      titulo: "🍺 Comida, Bebida, Hospedagem e Serviços",
      citação: "Quando estiver numa cidade, você se encontrará ao alcance de monstros piores que demónios e bruxas sepulcrais: burocratas.",
      colunas: ["Nome", "Subcategoria", "Peso", "Custo", "Perícia / Detalhes & Regras"],
      itens: [
        // Comida e Bebida
        { nome: "Doces", sub: "Comida", peso: 1.0, custo: 5, desc: "Quitutes de mel e nozes, caramelos e bagas adoçadas." },
        { nome: "Cerveja", sub: "Bebida", peso: 1.0, custo: 5, desc: "Cerveja de centeio temeriana, redaniana ou preta de Mag Turga." },
        { nome: "Carne Crua", sub: "Comida", peso: 1.0, custo: 8, desc: "Frango, porco, vaca, peixe ou lobo." },
        { nome: "Vinho", sub: "Bebida", peso: 1.0, custo: 8, desc: "Variedades refinadas com mais álcool que a cerveja." },
        { nome: "Alcohest", sub: "Bebida / Alquimia", peso: 1.0, custo: 8, desc: "Álcool puro. Beber 1 garrafa envenena (Tolerância ND 16) e intoxica por (12 - CORPO) horas." },
        { nome: "Uma Refeição Simples", sub: "Comida", peso: 1.0, custo: 10, desc: "Carneiro temperado, tubérculos assados ou pão e cerveja." },
        { nome: "Destilados", sub: "Bebida", peso: 1.0, custo: 10, desc: "Bebida fortíssima (destilado anão no Norte ou de limão no Sul)." },
        { nome: "Uma Refeição Boa", sub: "Comida", peso: 2.5, custo: 30, desc: "Bolinhos de batata, sopas, carne assada e vegetais em restaurante." },
        { nome: "Um Banquete", sub: "Comida", peso: 5.0, custo: 100, desc: "Fartura gastronómica servida em festas requintadas." },
        // Hospedagem
        { nome: "Palha no Chão (por noite)", sub: "Hospedagem", peso: 0.0, custo: 2, desc: "Apenas um teto e palha no chão; sem privacidade." },
        { nome: "Estábulo (por noite)", sub: "Hospedagem", peso: 0.0, custo: 2, desc: "Abrigo seguro para guardar a sua montaria durante a noite." },
        { nome: "Quarto de Hospedaria Esquisito", sub: "Hospedagem", peso: 0.0, custo: 4, desc: "Sem tranca na porta, com ratos e risco de invasores pela janela." },
        { nome: "Quarto de Hospedaria Barato", sub: "Hospedagem", peso: 0.0, custo: 8, desc: "Sem tranca na porta, mas limpo de defuntos ou contrabando." },
        { nome: "Quarto de Hospedaria Normal", sub: "Hospedagem", peso: 0.0, custo: 16, desc: "Travesseiro, bacia para lavar o rosto e tranca na porta (Arrombar ND 15)." },
        { nome: "Quarto de Hospedaria de Qualidade", sub: "Hospedagem", peso: 0.0, custo: 36, desc: "Cama de penas, cortinas e tranca na porta (Arrombar ND 15)." },
        { nome: "Quarto de Hospedaria Chique", sub: "Hospedagem", peso: 0.0, custo: 72, desc: "Enxovais de seda, vinho e cadeado grande na porta (Arrombar ND 18)." },
        // Serviços
        { nome: "Banho Frio", sub: "Serviço", peso: 0.0, custo: 8, desc: "Banheira com água fria para higiene básica." },
        { nome: "Lavandaria", sub: "Serviço", peso: 0.0, custo: 8, desc: "Lava roupas e armaduras manchadas de sangue e podridão." },
        { nome: "Entretenimento (por hora)", sub: "Serviço", peso: 0.0, custo: 10, desc: "Bardo com perícia Apresentação Base 15." },
        { nome: "Mensageiro", sub: "Serviço", peso: 0.0, custo: 10, desc: "Envia mensagens entre cidades (Sobrevivência no Ermo Base 15)." },
        { nome: "Portagem / Pedágio", sub: "Serviço", peso: 0.0, custo: 10, desc: "Taxa de passagem em fronteiras ou pontes." },
        { nome: "Prostituta (por hora)", sub: "Serviço", peso: 0.0, custo: 12, desc: "Companhia contratada (Sedução Base 15)." },
        { nome: "Criado (por dia)", sub: "Serviço", peso: 0.0, custo: 15, desc: "Carrega itens e leva recados (Atletismo 15 e Físico 15)." },
        { nome: "Banho Quente", sub: "Serviço", peso: 0.0, custo: 16, desc: "Banheira de cobre aquecida de luxo." },
        { nome: "Cronista", sub: "Serviço", peso: 0.0, custo: 25, desc: "Regista histórias, manuscritos e tapeçarias (Belas Artes Base 15)." },
        { nome: "Artesão (por peça)", sub: "Serviço", peso: 0.0, custo: 35, desc: "1d4 dias. Conserta itens (Criar/Alquimia Base 15). Criar com diagrama custa o valor do item." },
        { nome: "Investigador", sub: "Serviço", peso: 0.0, custo: 45, desc: "1d6 dias. Localiza pistas e pessoas (Sabedoria das Ruas Base 15)." },
        { nome: "Doutor (por paciente)", sub: "Serviço", peso: 0.0, custo: 50, desc: "1 dia (Mãos que Curam Base 15). Adicional por Crítico: Simples +10, Difícil +25, Complexo +50, Fatal +100." },
        { nome: "Advogado", sub: "Serviço", peso: 0.0, custo: 50, desc: "1d6 dias. Trata de problemas legais (Educação 15 e Persuasão 15)." },
        { nome: "Cavalo Alugado (por dia)", sub: "Serviço", peso: 0.0, custo: 50, desc: "Aluguer diário de montaria para viagens rápidas." },
        { nome: "Corrida de Carruagem", sub: "Serviço", peso: 0.0, custo: 85, desc: "Transporte seguro e confortável entre localidades." },
        { nome: "Viagem pelo Mar", sub: "Serviço", peso: 0.0, custo: 85, desc: "Pelos rios ou costa. Para Skellige custa o dobro (170); entre Norte e Nilfgaard custa +50% (127)." }
      ]
    }
  ];

  return {
    getCategorias: () => categorias,
    getCategoriaPorId: (id) => categorias.find(c => c.id === id)
  };
})();

/**
 * MÓDULO 2: CONTROLADOR DE INTERFACE E INVENTÁRIO
 */
const UIControllerModule = ((db) => {
  let estado = {
    abaAtiva: "armas",
    busca: "",
    subcategoria: "ALL",
    disponibilidade: "ALL",
    ordenacao: "default",
    carrinho: []
  };

  const dom = {
    nav: document.getElementById("categoryNav"),
    banner: document.getElementById("sectionBanner"),
    thead: document.getElementById("tableHead"),
    tbody: document.getElementById("tableBody"),
    searchInput: document.getElementById("searchInput"),
    subcatFilter: document.getElementById("subcatFilter"),
    dispFilter: document.getElementById("dispFilter"),
    sortSelect: document.getElementById("sortSelect"),
    totalWeight: document.getElementById("totalWeight"),
    totalCost: document.getElementById("totalCost"),
    cartCount: document.getElementById("cartCount"),
    cartDrawer: document.getElementById("cartDrawer"),
    cartItemsList: document.getElementById("cartItemsList"),
    currencyGrid: document.getElementById("currencyGrid"),
    sellBase: document.getElementById("sellBase")
  };

  function iniciar() {
    renderizarAbas();
    configurarEventos();
    selecionarAba("armas");
    atualizarCarrinhoUI();
  }

  function renderizarAbas() {
    dom.nav.innerHTML = db.getCategorias().map(cat => `
      <button class="tab-btn ${cat.id === estado.abaAtiva ? 'active' : ''}" data-id="${cat.id}">
        ${cat.titulo}
      </button>
    `).join("");
  }

  function selecionarAba(id) {
    estado.abaAtiva = id;
    estado.subcategoria = "ALL";
    document.querySelectorAll(".tab-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.id === id);
    });

    const cat = db.getCategoriaPorId(id);
    dom.banner.innerHTML = `<h2>${cat.titulo}</h2><p>"${cat.citação}"</p>`;

    // Popular filtro de subcategorias da aba
    const subcats = [...new Set(cat.itens.map(i => i.sub))];
    dom.subcatFilter.innerHTML = `<option value="ALL">Todas as Subcategorias (${cat.itens.length})</option>` +
      subcats.map(s => `<option value="${s}">${s}</option>`).join("");

    renderizarTabela();
  }

  function badgeDisp(disp) {
    if (!disp) return "-";
    return `<span class="disp-badge disp-${disp}">${disp}</span>`;
  }

  function renderizarTabela() {
    const cat = db.getCategoriaPorId(estado.abaAtiva);
    dom.thead.innerHTML = `<tr>${cat.colunas.map(c => `<th>${c}</th>`).join("")}<th>Ação</th></tr>`;

    let lista = cat.itens.filter(item => {
      const texto = `${item.nome} ${item.sub} ${item.efeito || ''} ${item.desc || ''} ${item.attr || ''}`.toLowerCase();
      const matchBusca = texto.includes(estado.busca.toLowerCase());
      const matchSub = estado.subcategoria === "ALL" || item.sub === estado.subcategoria;
      const matchDisp = estado.disponibilidade === "ALL" || item.disp === estado.disponibilidade;
      return matchBusca && matchSub && matchDisp;
    });

    if (estado.ordenacao === "price-asc") lista.sort((a, b) => a.custo - b.custo);
    if (estado.ordenacao === "price-desc") lista.sort((a, b) => b.custo - a.custo);
    if (estado.ordenacao === "weight-asc") lista.sort((a, b) => a.peso - b.peso);
    if (estado.ordenacao === "weight-desc") lista.sort((a, b) => b.peso - a.peso);

    dom.tbody.innerHTML = lista.map((item, idx) => {
      const btnAcao = `<td><button class="btn-add" data-idx="${idx}">+ Lista</button></td>`;
      const celulaDesc = `<td>
        ${item.efeito && item.efeito !== "-" ? `<span class="effect-tag">⚡ ${item.efeito}</span>` : ""}
        <span class="lore-desc">${item.desc}</span>
      </td>`;

      if (estado.abaAtiva === "armas") {
        return `<tr>
          <td class="item-name">${item.nome}</td>
          <td><span class="subcat-badge">${item.sub}</span></td>
          <td>${item.tipo}</td>
          <td>${item.pa}</td>
          <td>${badgeDisp(item.disp)}</td>
          <td><strong>${item.dano}</strong></td>
          <td>${item.dura}</td>
          <td>${item.maos}</td>
          <td>${item.alc}</td>
          <td>${item.porte}</td>
          <td>${item.mel}</td>
          <td>${item.peso} kg</td>
          <td class="gold-text"><strong>${item.custo}</strong></td>
          ${celulaDesc}${btnAcao}
        </tr>`;
      }
      if (estado.abaAtiva === "armaduras") {
        return `<tr>
          <td class="item-name">${item.nome}</td>
          <td><span class="subcat-badge">${item.sub}</span></td>
          <td>${item.classe}</td>
          <td><strong>${item.pp} PP</strong></td>
          <td>${badgeDisp(item.disp)}</td>
          <td>${item.ma}</td>
          <td>${item.vf}</td>
          <td>${item.peso} kg</td>
          <td class="gold-text"><strong>${item.custo}</strong></td>
          ${celulaDesc}${btnAcao}
        </tr>`;
      }
      if (estado.abaAtiva === "escudos") {
        return `<tr>
          <td class="item-name">${item.nome}</td>
          <td><span class="subcat-badge">${item.sub}</span></td>
          <td><strong>${item.dura} DURA</strong></td>
          <td>${badgeDisp(item.disp)}</td>
          <td>${item.ma}</td>
          <td>${item.vf}</td>
          <td>${item.peso} kg</td>
          <td class="gold-text"><strong>${item.custo}</strong></td>
          ${celulaDesc}${btnAcao}
        </tr>`;
      }
      if (estado.abaAtiva === "ancestral") {
        return `<tr>
          <td class="item-name">${item.nome}</td>
          <td><span class="subcat-badge">${item.sub}</span></td>
          <td>${item.attr}</td>
          <td>${badgeDisp(item.disp)}</td>
          <td>${item.mel}</td>
          <td>${item.vf}</td>
          <td>${item.peso} kg</td>
          <td class="gold-text"><strong>${item.custo}</strong></td>
          ${celulaDesc}${btnAcao}
        </tr>`;
      }
      if (estado.abaAtiva === "melhorias") {
        return `<tr>
          <td class="item-name">${item.nome}</td>
          <td><span class="subcat-badge">${item.sub}</span></td>
          <td><strong>${item.pp}</strong></td>
          <td>${item.res}</td>
          <td>${badgeDisp(item.disp)}</td>
          <td>${item.peso} kg</td>
          <td class="gold-text"><strong>${item.custo}</strong></td>
          ${celulaDesc}${btnAcao}
        </tr>`;
      }
      if (estado.abaAtiva === "alquimicos") {
        return `<tr>
          <td class="item-name">${item.nome}</td>
          <td><span class="subcat-badge">${item.sub}</span></td>
          <td>${badgeDisp(item.disp)}</td>
          <td>${item.peso} kg</td>
          <td class="gold-text"><strong>${item.custo}</strong></td>
          ${celulaDesc}${btnAcao}
        </tr>`;
      }
      if (estado.abaAtiva === "transporte") {
        return `<tr>
          <td class="item-name">${item.nome}</td>
          <td><span class="subcat-badge">${item.sub}</span></td>
          <td>${item.attr}</td>
          <td>${badgeDisp(item.disp)}</td>
          <td>${item.peso} kg</td>
          <td class="gold-text"><strong>${item.custo}</strong></td>
          ${celulaDesc}${btnAcao}
        </tr>`;
      }
      if (estado.abaAtiva === "ferramentas") {
        return `<tr>
          <td class="item-name">${item.nome}</td>
          <td><span class="subcat-badge">${item.sub}</span></td>
          <td>${badgeDisp(item.disp)}</td>
          <td>${item.porte}</td>
          <td>${item.peso} kg</td>
          <td class="gold-text"><strong>${item.custo}</strong></td>
          ${celulaDesc}${btnAcao}
        </tr>`;
      }
      // Geral e Taverna
      return `<tr>
        <td class="item-name">${item.nome}</td>
        <td><span class="subcat-badge">${item.sub}</span></td>
        <td>${item.peso} kg</td>
        <td class="gold-text"><strong>${item.custo}</strong></td>
        ${celulaDesc}${btnAcao}
      </tr>`;
    }).join("");

    // Eventos dos botões de adicionar à lista
    dom.tbody.querySelectorAll(".btn-add").forEach(btn => {
      btn.addEventListener("click", () => {
        const itemEscolhido = lista[Number(btn.dataset.idx)];
        estado.carrinho.push(itemEscolhido);
        atualizarCarrinhoUI();
      });
    });
  }

  function atualizarCarrinhoUI() {
    const pesoTotal = estado.carrinho.reduce((acc, i) => acc + (i.peso || 0), 0);
    const custoTotal = estado.carrinho.reduce((acc, i) => acc + (i.custo || 0), 0);

    dom.totalWeight.textContent = `${pesoTotal.toFixed(1).replace('.', ',')} kg`;
    dom.totalCost.textContent = `${custoTotal} Coroas`;
    dom.cartCount.textContent = estado.carrinho.length;
    dom.sellBase.textContent = Math.floor(custoTotal / 2);

    // Câmbio oficial (Página 71)
    dom.currencyGrid.innerHTML = `
      <div class="curr-box">🇹 <strong>Orens (Teméria):</strong> ${custoTotal}</div>
      <div class="curr-box">☀️ <strong>Florins (Nilfgaard):</strong> ${(custoTotal / 3).toFixed(1)}</div>
      <div class="curr-box">🦄 <strong>Ducates (Kaedwen):</strong> ${custoTotal * 3}</div>
      <div class="curr-box">🏛️ <strong>Bizantes (Kovir):</strong> ${(custoTotal / 4).toFixed(1)}</div>
      <div class="curr-box">🛡️ <strong>Lintares (Hengefors):</strong> ${(custoTotal / 2).toFixed(1)}</div>
    `;

    if (estado.carrinho.length === 0) {
      dom.cartItemsList.innerHTML = `<p class="lore-desc">Nenhum item selecionado ainda. Clique em "+ Lista" nos itens da tabela para simular compras ou comparar equipamentos.</p>`;
      return;
    }

    dom.cartItemsList.innerHTML = estado.carrinho.map((item, index) => `
      <div class="cart-item">
        <div>
          <strong>${item.nome}</strong><br>
          <span class="lore-desc">${item.peso} kg | <span class="gold-text">${item.custo} Coroas</span></span>
        </div>
        <button class="btn-remove" data-rm="${index}">Remover</button>
      </div>
    `).join("");

    dom.cartItemsList.querySelectorAll(".btn-remove").forEach(btn => {
      btn.addEventListener("click", () => {
        estado.carrinho.splice(Number(btn.dataset.rm), 1);
        atualizarCarrinhoUI();
      });
    });
  }

  function configurarEventos() {
    dom.nav.addEventListener("click", (e) => {
      const btn = e.target.closest(".tab-btn");
      if (btn) selecionarAba(btn.dataset.id);
    });

    dom.searchInput.addEventListener("input", (e) => {
      estado.busca = e.target.value;
      renderizarTabela();
    });

    dom.subcatFilter.addEventListener("change", (e) => {
      estado.subcategoria = e.target.value;
      renderizarTabela();
    });

    dom.dispFilter.addEventListener("change", (e) => {
      estado.disponibilidade = e.target.value;
      renderizarTabela();
    });

    dom.sortSelect.addEventListener("change", (e) => {
      estado.ordenacao = e.target.value;
      renderizarTabela();
    });

    document.getElementById("btnToggleCart").addEventListener("click", () => {
      dom.cartDrawer.classList.toggle("open");
    });

    document.getElementById("btnCloseCart").addEventListener("click", () => {
      dom.cartDrawer.classList.remove("open");
    });

    document.getElementById("btnClearCart").addEventListener("click", () => {
      estado.carrinho = [];
      atualizarCarrinhoUI();
    });
  }

  return { iniciar };
})(DatabaseModule);

document.addEventListener("DOMContentLoaded", UIControllerModule.iniciar);