{ // dividindo arrays com o slice():
  const nomes = ['Pedro', 'Mateus', 'Júlio', 'Bruno', 'Katryn', 'Sarah'];
  const sala1 = nomes.slice(0, nomes.length / 2);            // estou pegando o primeiro índice até metade do array, e alocando em uma sala
  const sala2 = nomes.slice(nomes.length / 2, nomes.length); // assim como na sala1, estou separando a outra metade na sala2
  
  // o slice() existe que sejam dados dois parâmetros, o início e fim do corte
  console.log(`Quantidade de pessoas: ${nomes.length}`);
  console.log(`As pessoas que estão na sala 1: ${sala1}`);
  console.log(`As pessoas que estão na sala 2: ${sala2}`);
}