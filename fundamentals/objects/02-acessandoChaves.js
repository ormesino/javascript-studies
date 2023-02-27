{ // acessando os dados do objeto através de chaves
	const cliente = {
		cpf: "16218256912",
		nome: "Pedro Mateus",
		idade: 25,
		email: "pedromateus18@hotmail.com"
	}

	const chaves = ["cpf", "nome", "idade", "email"];
	const key = "nome";

	// todas essas representações funcionam
	console.log(cliente["nome"]);
	console.log(cliente.nome);
	console.log(cliente[chaves[1]]);
	console.log(cliente[key]);
	chaves.forEach(info => console.log(cliente[info]));
}