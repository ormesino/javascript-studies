{	// para juntar duas listas e transformar em uma matriz, podemos fazer da seguinte forma:
	const alunos = ['Pedro', 'Mateus', 'Bruno', 'Ana', 'Caio', 'Thais'];
	const medias = [10, 8, 5.6, 8.3, 7.9, 8.8];
	let alunosNotas = [alunos, medias];

	console.log(`${alunosNotas[0][0]}, sua média é ${alunosNotas[1][0]}!`);
}