{ // usar uma função dentro de outra é chamado de callback
	const nome = ['Ana', 'Paulo', 'Beatriz', 'Alana'];

	nome.forEach(imprimeNomes) // o forEach pode ser usado sem uma função própria
	
	nome.forEach(nome => {imprimeNomes(nome)}) // por trás dos panos, a função acima está fazendo o que essa faz

	function imprimeNomes(nome) {
		console.log(nome);
	}
}