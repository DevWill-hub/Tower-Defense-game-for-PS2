# Tower Defense Game PS2 (Robôs vs. Zombies) 🛡️

## 📖 Sobre o Projeto
*Um jogo de estratégia onde você defende seu território contra hordas de zumbis usando robôs defensivos!*

## 🚀 Introdução
Este projeto é uma **reinterpretação** do clássico *Plants vs. Zombies*, proposto pelo canal [**Franks laboratory**](https://youtube.com/@frankslaboratory?si=TL8yjnoXaUclc3eb). O intuito deste projeto é divertir e ajudar desenvolvedores que estão começando agora com a AthenaEnv engine. Um projeto simples para fins educacionais e de entretenimento.

> ⚠️ **Aviso**: O jogo original era de código aberto, mas o desenvolvedor saiu do GitHub. Este repositório é uma versão autorizada e modificada por nós.

## 🎮 Sobre o Jogo

### 🎯 Objetivo
- Impedir que os zumbis **avançem da direita para a esquerda** do mapa.
- Coletar **moedas** para aumentar seus recursos e comprar defesas.

### 💡 Dicas
- Posicione suas **defesas** longe dos zumbis para maximizar o tempo de ataque.
- Evite colocar muitas defesas na tela para **prevenir quedas de FPS**.

### 🎮 Controles (Spawn de Defesas)
- **Defesa 1**: Botão <kbd>X</kbd> (Custo: 100 recursos).
- **Defesa 2**: Botão <kbd>□</kbd> (Custo: 100 recursos).

### 💰 Recursos
- Recursos iniciais: **330**.

## 🔷 Como Jogar
Você precisará de um emulador de PlayStation 2 (como [PCSX2](https://pcsx2.net/)) ou de um console com suporte para homebrew (usando ferramentas como [wLaunchELF](https://israpps.github.io/projects/wlaunchelf-isr), uLaunchelf, [OPL](https://github.com/ps2homebrew/Open-PS2-Loader/releases/tag/v1.1.0) e etc.).

### 1. Baixe o jogo

Primeiro, vá para os [**Releases Page**](https://github.com/DevWill-hub/Tower-Denfense-game-for-PS2/releases) e abaixe o formato de sua preferência.

*   **`.iso`:** Recomendado para a maioria dos que utiliza emuladores e para os que utiliza o OPL para o hardware original.
* **`.zip`:** Contém o arquivo `.elf`, para o uso com (uLaunchELF/wLaunchELF) ou em emuladores específicos que tenham a configuração disposta a abrir o jogo.

---

### 2. Executando o jogo

#### Em um Emulador (PCSX2 / AetherSX2)

**Versão ISO (Recomendado)**
1.  Baixe o arquivo `.iso`.
2.  No seu emulador, basta carregar the `.iso` file to start the game.

**Versão ELF**
> **Nota:** Este método requer a ativação do recurso "Host File System" no PCSX2 para que o AthenaEnv funcione corretamente, causo não tenha essa funcionalidade como o AetherSX2, o melhor a se fazer é usar a versão `.iso`.

1.  Baixe e extraia o arquivo `.zip`. 
2.  No PCSX2, acesse `Configurações > Emulação` e **ative "Host File System"**. 
3.  Carregue o jogo navegando até `Sistema > Executar ELF...` e selecionando o arquivo `.elf`.

#### Em Hardware Original (PS2)

**Versão ISO (via OPL)**
1. Coloque o arquivo `.iso` na pasta `DVD` do seu pen drive.
2. Inicie o jogo usando o Open PS2 Loader (OPL).

**Versão ELF (via uLaunchELF/wLaunchELF)**
1. Extraia o arquivo `.zip` baixado para a raiz do seu pen drive.
2. No seu PS2, abra o uLaunchELF ou wLaunchELF.
3. Navegue até o seu pen drive (`mass:/`) e execute o arquivo localizado em `Tower-Defense-Game-v2.2.1/Robôs vs. Zombies.elf`.

## 🎥 Preview
<img src="github/Preview-Robôs vs. Zombies.gif" width="400">

## ✒️ Autores e Créditos
- **Motor gráfico**: [AthenaEnv](https://github.com/DanielSant0s/AthenaEnv) por `Daniel Santos`.
- **Versão original (Web)**: `Bruno Seghese`.
- **Autores**: `Dev Will` / `Guizin`.
