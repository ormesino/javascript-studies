{ // alterando um array com o splice()
	const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

	// a função splice() pode conter 3 argumentos, o primeiro sendo o início, o segundo a quantidade a ser tirada e o terceiro opcional para adicionar.
	listaDeChamada.splice(1, 2, 'Rodrigo');
	console.log(`Lista de chamada: ${listaDeChamada}`);

	// aqui estamos inserindo 'Caio' na lista sem tirar nenhum nome, diferente do primeiro exemplo
	listaDeChamada.splice(2, 0, 'Caio');
	console.log(`Nova lista de chamada: ${listaDeChamada}`);

	// nesse exemplo tirei apenas a 'Lara', sem adicionar nada a mais
	listaDeChamada.splice(3,1)
	console.log(listaDeChamada)
}