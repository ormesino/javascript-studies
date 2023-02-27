{ // Usando o reduce para iterar entre os elementos, somando-os
	const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
	const salaPython = [6, 5, 8, 9, 5, 6];
	const salaJava = [7, 3.5, 8, 9.5];

	function mediaSala(notasDaSala) {
		const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum, 0); // primeiro parâmetro é o acumulador e o segundo o valor iterado
		return somaDasNotas / notasDaSala.length;
	}

	console.log(`Média da sala de JavaScript: ${mediaSala(salaJS)}`);
	console.log(`Média da sala de Python: ${mediaSala(salaPython)}`);
	console.log(`Média da sala de Java: ${mediaSala(salaJava)}`);

	const notas = [10, 6.5, 8, 7];
	const media = (notas.reduce((atual, acum) => atual + acum, 0)) / notas.length;

	console.log(`A média é: ${media}`);
}