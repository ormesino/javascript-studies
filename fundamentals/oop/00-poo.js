{ // contextualizando uma função sem contexto, a um através do .bind
	const user = {
		nome: "Pedro",
		email: "pedromateus18@hotmail.com",
		nascimento: "1997/02/18",
		role: "admin",
		ativo: true,

		exibirInfos: function () {
			console.log(this.nome, this.email, this.nascimento);
		}
	}

	const exibir = function () {
		console.log(this.nome, this.email, this.nascimento);
	}

	const exibirNome = exibir.bind(user);
	exibirNome();
	exibir();
}