const btnOrdenarPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPreco.addEventListener('click', ordenarLivrosPreco);

function ordenarLivrosPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibirLivrosNaTela(livrosOrdenados);
}
