// para um aluno apenas
{
	const nota1 = 10, nota2 = 6.5, nota3 = 8, nota4 = 7.5;
	let media = (nota1 + nota2 + nota3 + nota4) / 4;

	console.log(media);
}

/*
	péssima forma, certo? já que preciso utilizar várias constantes
	de forma a evitar isso, utilizamos ARRAYS (listas) para agrupar diferentes dados
*/
{
	const notas = [10, 6.5, 8, 7.5];																				// todas as notas agrupadas em um só array
	let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;	// através do índice das notas, conseguimos calcular a média
	console.log(media);
}