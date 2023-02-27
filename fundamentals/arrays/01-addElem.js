{   // para adicionar um elemento à um array já existente, utilizamos a função inata .push()
	const notas = [10, 6.5, 8, 7.5];
	notas.push(8.8);    // adicionando a nota 8.8 na lista
	console.log(notas);

	let media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / notas.length;
	console.log(media); // a média será diferente da anterior, visto que agora adicionamos mais uma nota
}