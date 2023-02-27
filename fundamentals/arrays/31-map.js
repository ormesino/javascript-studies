{ // usando o map para percorrer os elementos e aplicar uma instrução
	const notas = [10, 9, 8, 7, 6];

	const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota); // o incremento deve ser antes para funcionar
	console.log(`As notas antigas desse aluno eram ${notas}, mas agora com 1 ponto extra em cada nota, ficará: ${notasAtualizadas}.`);
}