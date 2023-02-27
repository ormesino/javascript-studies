{ // criando clientes
	
	// podemos criar uma função que tente se passar por uma classe
	function Cliente(nome, cpf, email) {
		this.nome = nome;
		this.cpf = cpf;
		this.email = email;
		this.saldo = 0;
		this.depositar = function (valor) {
			this.saldo += valor;
		}
	}

	// ou fazer uma classe de fato com um constructor como abaixo
	/* class Cliente {
		constructor(nome, cpf, email) {
			this.nome = nome;
			this.cpf = cpf;
			this.email = email;
			this.saldo = 0;
			this.depositar = function (valor) {
				this.saldo += valor;
			};
		}
	} */

	// através do termo "new" conseguimos criar novos objetos da classe
	const c1 = new Cliente("Pedro", "16278645718", "pedromateus18@hotmail.com");
	console.log(c1);
}