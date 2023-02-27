{   // criando uma lista de dependentes a partir de clientes utilizando o operador de "espalhamento"
	const clientes = [{
		cpf: "16218256912",
		nome: "Pedro Mateus",
		idade: 25,
		email: "pedromateus18@hotmail.com",
		fone: ["2144241145", "2142155154", "219421451593"],

		dependentes: [{
			nome: "Sarah Rebello",
			parentesco: "Muié",
			dataNasci: "26/04/1997"
		}, {
			nome: "Zed Antônio",
			parentesco: "Filho",
			dataNasci: "31/12/2033"
		}, {
			nome: "Jhin Bernardo",
			parentesco: "Filho",
			dataNasci: "21/07/2028"
		}],
	},
	{
		cpf: "15365485112",
		nome: "Katryn Alice",
		idade: 23,
		email: "katrynalice@gmail.com",
		fone: ["83932142886"],

		dependentes: [{
			nome: "Alan",
			parentesco: "Esposo",
			dataNasci: "13/07/1999"
		}]
	}]

	// o operador de espalhamento tem o intuito de pegar os dados de dentro de uma lista, sem necessitar de um for para isso
	// além disso, ele cria uma matriz informando exatamente os dados dentro dessa nova lista com as informações inseridas
	const listaDep = [...clientes[0].dependentes, ...clientes[1].dependentes];
	console.table(listaDep);
}