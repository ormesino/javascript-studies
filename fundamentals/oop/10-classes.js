{   // Utilização da sintaxe de classes
    class User {
        constructor(nome, email, nascimento, role) {
            this.nome = nome,
            this.email = email,
            this.nascimento = nascimento,
            this.role = role || "estudante",
            this.ativo = true
        }

        exibirInfos(){
            return `${this.nome}, ${this.email}`;
        }
    }

    const novoUser = new User("Pedro", "pedromateus18@hotmail.com", "1997-02-18");

    console.log(novoUser);
    console.log(novoUser.exibirInfos());
    console.log(User.prototype.isPrototypeOf(novoUser));
}