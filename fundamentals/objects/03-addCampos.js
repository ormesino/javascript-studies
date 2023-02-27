{ // adição e edição de campos do objeto
	const cliente = {
		cpf: "16218256912",
		nome: "Pedro Mateus",
		idade: 25,
		email: "pedromateus18@hotmail.com"
	}

	console.log(cliente);
	cliente.fone = "995010351" // se o campo não existir, ele adiciona automaticamente
	console.log(cliente);
	cliente.fone = "854115315" // se o campo existir, ele altera pelo novo valor
	console.log(cliente);

	delete cliente.idade; // exclui uma chave e seu conteúdo do objeto
	// ou também delete cliente["idade"]
	console.log(cliente);
}