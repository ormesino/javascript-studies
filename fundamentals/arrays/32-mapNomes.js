{ // usando o map() para padronizar strings dentro de uma array
	let nomes = ['ana Julia', 'Caio vinicius', 'BIA silva'];

	const nomesAtualizados = nomes.map(nome => nome.toUpperCase());

	console.log(nomesAtualizados);
}