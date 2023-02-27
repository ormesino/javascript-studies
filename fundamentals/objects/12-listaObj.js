{   // para adicionar mais de um dependente, basta transformá-lo em um array
	const cliente = {
		cpf: "16218256912",
		nome: "Pedro Mateus",
		idade: 25,
		email: "pedromateus18@hotmail.com",
		fone: ["2144241145", "2142155154", "219421451593"],
		dependentes: [{
			nome: "Sarah Rebello",
			parentesco: "Muié",
			dataNasci: "26/04/1997"
		}]
	}

	// como utilizar cliente.dependentes = ... faria com que o valor fosse alterado, utilizamos o push() para adicionar
	cliente.dependentes.push({
		nome: "Zed Antônio",
		parentesco: "Filho",
		dataNasci: "31/12/2033"
	}, {
		nome: "Jhin Bernardo",
		parentesco: "Filho",
		dataNasci: "21/07/2028"
	})

	console.log(cliente);

	// busca pelo filho mais novo através do filter() e passando o valor exato a ser procurado
	const filhoMaisNovo = cliente.dependentes.filter(dependente => dependente.dataNasci === "21/07/2028");
	console.log(filhoMaisNovo[0].nome);
}