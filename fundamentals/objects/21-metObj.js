{ // verificar se uma chave existe, e a partir disso fazer uma ação determinada
	const cliente = {
		cpf: "16218256912",
		nome: "Pedro Mateus",
		idade: 25,
		email: "pedromateus18@hotmail.com",
		fone: ["2144241145", "2142155154", "219421451593"],
		saldo: 0,

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

		depositar: function (valor) {
			this.saldo += valor;
			console.log(`Depósito feito com sucesso! Seu novo saldo é de R$ ${this.saldo}.`);
		},

		sacar: function (valor) {
			if (valor > this.saldo) {
				console.log("Não é possível fazer essa operação, seu saldo é insuficiente!");
			} else {
				this.saldo -= valor;
				console.log(`Saque realizado com sucesso! Seu novo saldo é de R$ ${this.saldo}.`);
			}
		}
	}
	
	// diferente dos anteriores, agora trabalharemos com funções de fora que se comunicam com o objeto
	const oferecer = (cliente) => {
		const lista = Object.keys(cliente);	// aqui estamos pegando todas os atributos de cliente e colocando em uma lista
		for (let chave in lista) {
			if (lista[chave] === "dependentes") { // checa se há conteúdo no atributo "dependentes" do objeto
				console.log(`${cliente.nome}, você tem dependentes no seu cadastro, gostaria de adquirir um seguro de vida?`);
			}
		}
	}

	oferecer(cliente);

	// outras formas de obter os valores dos atributos do cliente, e o segundo mostrando os atributos e suas entradas
	console.log(Object.values(cliente));
	console.log(Object.entries(cliente));
}	