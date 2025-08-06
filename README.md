# 🎲 Sorteador de Números

Este projeto é uma aplicação web simples e interativa desenvolvida com **HTML**, **CSS** e **JavaScript**, que permite ao usuário sortear números aleatórios dentro de um intervalo definido, sem repetições. Ideal para jogos, rifas, estudos ou qualquer situação que exija sorteio justo.

---

## 🚀 Funcionalidades

- ✅ Sorteio de números únicos dentro de um intervalo personalizado
- 🔁 Botão de reinício que limpa os campos e restaura o estado inicial
- 🎨 Interface moderna com gradientes, sombras e fontes personalizadas
- 📱 Layout responsivo para diferentes tamanhos de tela

---

## 🧩 Estrutura do código

### `index.html`

- Define a estrutura da interface com campos de entrada para:
  - Quantidade de números
  - Intervalo inicial (`de`)
  - Intervalo final (`até`)
- Inclui dois botões:
  - **Sortear**: executa a função de sorteio
  - **Reiniciar**: limpa os campos e o resultado
- Exibe os números sorteados dinamicamente
- Contém uma imagem de perfil estilizada e responsiva

### `style.css`

- Aplica um fundo com gradiente e textura
- Estiliza os campos, botões e textos com fontes do Google Fonts
- Define estilos para o botão desabilitado e ativa transições suaves
- Torna a imagem de perfil responsiva com `vw`, `max-width` e `border-radius`
- Inclui media queries para adaptar o layout em telas menores

### `app.js`

- `sortear()`: gera números aleatórios únicos dentro do intervalo definido
- `reiniciar()`: limpa os campos e restaura o texto padrão
- `alterarStatusBotaoReiniciar(ativo)`: ativa ou desativa o botão de reinício
- `gerarNumeroAleatorio(min, max)`: função auxiliar para gerar números aleatórios

---

## 📦 Estrutura de pastas

