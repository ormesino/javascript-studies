{ // como pegar as informações de um objeto criado
	const clienteEx1 = {
		nome: "André",
		idade: 36,
		cpf: "16378685218",
		email: "andre@email.com"
	}

	console.log(clienteEx1.nome, clienteEx1.idade);
	console.log(`Meu nome é ${clienteEx1.nome} e eu tenho ${clienteEx1.idade} anos`);
	console.log(`O início do seu CPF é: ${clienteEx1.cpf.slice(0, 3)}`);
}