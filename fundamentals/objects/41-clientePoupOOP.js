{
	class Cliente {
		constructor(nome, cpf, dataNasc, email, saldo) {
			this.nome = nome;
			this.cpf = cpf;
			this.dataNasc = dataNasc;
			this.email = email;
			this.saldo = saldo;
		}

		depositar(valor) {
			this.saldo += valor;
			console.log("Depósito realizado com sucesso!");
		}

		exibirSaldo() {
			console.log(`Seu saldo atual é de: R$ ${this.saldo}`);
		}

		sacar(valor) {
			if (this.saldo < valor) {
				console.log("Seu saldo é insuficiente para essa operação!");
			} else {
				this.saldo -= valor;
				console.log("Saque realizado com sucesso!");
			}
		}
	}
	
	// introduzindo a ideia de herança, ou seja, uma classe herdando os atributos e métodos de outra
	class ClientePoupanca extends Cliente {
		constructor(nome, email, cpf, saldo, saldoPoup, dataNasc) {
			super(nome, cpf, dataNasc, email, saldo);
			this.saldoPoup = saldoPoup;	 // além dos atributos e métodos herdados, nessa classe ainda adicionamos mais um atributo e método
		}

		depositarPoup(valor) {
			this.saldoPoup += valor;
			console.log("Depósito na poupança realizado com sucesso!");
		}
	}

	const c2 = new ClientePoupanca("Sarah Rebello", "sarah@gmail.com", "21334245367", 0, 50, "26/04/1997");

	c2.depositarPoup(200);
	c2.depositar(500);
	console.log(c2);
}