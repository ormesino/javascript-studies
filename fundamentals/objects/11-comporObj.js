{ // inserindo um objeto dentro de outro objeto
	const cliente = {
		cpf: "16218256912",
		nome: "Pedro Mateus",
		idade: 25,
		email: "pedromateus18@hotmail.com",
		fone: ["2144241145", "2142155154", "219421451593"]
	}

	cliente.dependentes = {	// criação do campo dependentes dentro de cliente
		nome: "Sarah",
		parentesco: "Esposa",
		dataNasci: "26/04/1997"
	}

	console.log(cliente);
	console.log(cliente.dependentes);

	cliente.dependentes.nome = "Sarah Rebello";

	console.log(cliente);
}