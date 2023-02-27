{ // criando métodos para gerenciar o saldo de um objeto
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

		// daqui para baixo, separamos os métodos desse objeto
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

	// podemos chamar os métodos assim como chamamos os atributos de um objeto/classe
	console.log(`Seu saldo é de R$ ${cliente.saldo}.`);
	cliente.sacar(100);
	cliente.depositar(1000);
	cliente.sacar(500);
}