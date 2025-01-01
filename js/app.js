let valorTotal = 0;
limpar();
document.getElementById('quantidade').value = '1';

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = parseFloat(produto.split('R$')[1].replace('.', '')); // Converte para número, remove pontos
    let quantidade = parseInt(document.getElementById('quantidade').value); // Converte para inteiro
    
    if (isNaN(quantidade) || quantidade <= 0) { // Verifica se é um número válido e maior que zero
        alert('Quantidade inválida');
        document.getElementById('quantidade').value = '1';
        return; // Sai da função para não adicionar produto inválido
    }

    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');

    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
    </section>`;

    valorTotal += preco;
    let total = document.getElementById('valor-total');
    total.innerHTML = `Total: R$${valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`; // Formata o total

    document.getElementById('quantidade').value = '1';

}

function limpar() {
    document.getElementById('produto').value = '';
    document.getElementById('quantidade').value = '1';
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$0,00';
    valorTotal = 0; // Reseta o valor total
}