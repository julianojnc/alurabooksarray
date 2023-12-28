const elementoParaInserirLivros = document.getElementById("livros");
const elementoValorToralLivrosDisponiveis = document.getElementById("valor_total_livros_disponiveis");

function exibirLivrosNaTela(listaLivros) {
    elementoValorToralLivrosDisponiveis.innerHTML = '';
    elementoParaInserirLivros.innerHTML = '';
    listaLivros.forEach(livro => {
        // let disponibilidade = verificarDisponibilidadeLivro(livro);
        let disponibilidade = livro.quantidade > 0 ? 'livro_imagens' : 'livro__imagens indisponivel';
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
                <h2 class="livro__titulo">
                ${livro.titulo}                
                </h2>
                <p class="livro__descricao">${livro.autor}</p>
                <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
                    <div class="tags">
                        <span class="tag">${livro.categoria}</span>
                    </div>
        </div>
        `;
    });
};

// function verificarDisponibilidadeLivro(livro) {
//     if (livro.quantidade > 0) {
//         return 'livro__imagens';
//     }else{
//         return 'livro__imagens indisponivel';
//     }
// }