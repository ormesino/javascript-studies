{	// criando classes e métodos utilizando as novas regras de classe e construtor
	class Cliente {
		// construtor que é o responsável por criar um novo objeto da classe, reúne todos os atributos
		constructor(nome, cpf, dataNasc, email, saldo) {	
			this.nome = nome;
			this.cpf = cpf;
			this.dataNasc = dataNasc;
			this.email = email;
			this.saldo = saldo;
		}

		// os métodos não precisam mais serem identificados por "function"
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

	const c1 = new Cliente("Pedro Mateus", "16278645718", "18/02/1997", "pedromateus18@hotmail.com", 500);

	c1.exibirSaldo();
	c1.sacar(1000);
	c1.depositar(1300);
	c1.exibirSaldo();
	c1.sacar(1150);
	c1.exibirSaldo();
}