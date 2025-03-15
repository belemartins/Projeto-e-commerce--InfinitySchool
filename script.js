
let listaProdutos = []

const inputNome = document.getElementById("filtro-nome")

function carregarProdutos (){
  const PegaTrem = fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {

    listaProdutos = data;

    let produtos = document.getElementById("produtos");

    produtos.innerHTML = '';

    data.forEach(produto => {

        let produtoDiv = document.createElement('div');
          
          produtoDiv.innerHTML = `
            <h3>${produto.title}</h3>
            <p>Preço: R$ ${produto.price}</p>
            <p>${produto.description}</p>
            <img src="${produto.image}" alt="${produto.title}" style="max-width: 100px;">
          `;
    
          produtos.appendChild(produtoDiv);
        });
    })
        .catch(error => console.error('Erro ao carregar os produtos:', error));
      
        console.log(PegaTrem)}

// Função - filtrar por nome 

function filtrarPorNome(){
  
  let nomesProdutos = inputNome.value.toLowerCase();
  let listaFiltrada = listaProdutos.filter(produto => {
    return produto.title.toLowerCase().includes(nomesProdutos)
  });
console.log(listaFiltrada)

  let produtos = document.getElementById("produtos");
  produtos.innerHTML = '';

  listaFiltrada.forEach(produto => {
    let produtoDiv = document.createElement('div');
    produtoDiv.innerHTML = `
      <h3>${produto.title}</h3>
      <p>Preço: R$ ${produto.price}</p>
      <p>${produto.description}</p>
      <img src="${produto.image}" alt="${produto.title}" style="max-width: 100px;">
    `;
    produtos.appendChild(produtoDiv);

});
}


inputNome.addEventListener('input', filtrarPorNome)

carregarProdutos()

    
