{	// função para procurar um aluno e mostrar a sua respectiva média
	const alunos = ['Pedro', 'Mateus', 'Bruno', 'Ana', 'Caio', 'Thais'];
	const medias = [10, 8, 5.6, 8.3, 7.9, 8.8];
	let alunosNotas = [alunos, medias];

	const exibeNomeNota = nomeDoAluno => {
		if (alunosNotas[0].includes(nomeDoAluno)) { // verifica se o nome dado existe na linha de nomes do array
			indice = alunosNotas[0].indexOf(nomeDoAluno);
			console.log(`${alunosNotas[0][indice]}, sua média é ${alunosNotas[1][indice]}!`);	// esse caso funciona porque há simetria de coluna entre os dados
		} else {
			console.log(`O aluno ${nomeDoAluno} não está cadastrado no sistema.`);
		}
	}

	exibeNomeNota("Pedro");
	exibeNomeNota("Ana");
	exibeNomeNota("Tomas");
}