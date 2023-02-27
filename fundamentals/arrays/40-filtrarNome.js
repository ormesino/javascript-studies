{	// filtrando nome dos reprovados que não satisfezeram a condição de nota
	const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
	const notas = [7, 4.5, 8, 7.5];

	const reprovados = alunos.filter((_, indice) => notas[indice] < 5); // utilizando _ para anular um dos parâmetros
	console.log(`Reprovados: ${reprovados}`);
}