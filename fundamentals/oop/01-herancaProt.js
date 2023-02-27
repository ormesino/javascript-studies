{  // vinculando um herança através do protótipo
	const user = {
		nome: "Pedro",
		email: "pedromateus18@hotmail.com",
		nascimento: "1997/02/18",
		role: "estudante",
		ativo: true,

		exibirInfos: function () {
			console.log(this.nome, this.email, this.nascimento);
		}
	}

	const admin = {
		nome: "Mariana",
		email: "mariana@gmail.com",
		nascimento: "1982/12/16",
		criarCurso() {
			console.log("Curso criado!")
		}
	}

	Object.setPrototypeOf(admin, user);
	admin.criarCurso();
	admin.exibirInfos();
}