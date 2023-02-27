{ // criando outros clientes através do original
	function Cliente(nome, cpf, email) {
		this.nome = nome;
		this.cpf = cpf;
		this.email = email;
		this.saldo = 0;
		this.depositar = function (valor) {
			this.saldo += valor;
		}
	}

	// a partir da utilização de Cliente.call(), podemos fazer com que ClientePoupanca "herde" os atributos de CLiente
	// sendo assim, apenas adicionamos um novo atributo à ClientePoupanca
	function ClientePoupanca(nome, cpf, email, saldoPoup) {
		Cliente.call(this, nome, cpf, email);
		this.saldoPoup = saldoPoup;
	}

	const c2 = new ClientePoupanca("Sarah", "45612545812", "sahreb@gmail.com", 250);

	console.log(c2);

	// através do uso de .prototype, conseguimos registrar um novo método para ClientePoupanca
	ClientePoupanca.prototype.depositarPoup = function (valor) {
		this.saldoPoup += valor;
	};

	console.log(c2);
	c2.depositarPoup(30);
	console.log(c2.saldoPoup);
}