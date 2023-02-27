{   // Utilização do .prototype para exemplificar como é feita a herança sem a utilização de classes
    function User(nome, email) {
        this.nome = nome;
        this.email = email;

        this.exibirInfos = function () {
            return `${this.nome}, ${this.email}`;
        }
    }

    /* const novoUser = new User("Pedro", "pedromateus18@hotmail.com");
    console.log(novoUser.exibirInfos()); */

    function Admin(nome, email, role) {
        User.call(this, nome, email);
        this.role = role;
    }

    Admin.prototype = Object.create(User.prototype);
    const novoUser2 = new Admin('Pedro', 'pedromateus18@hotmail.com', 'admin');
    console.log(novoUser2.exibirInfos());
    console.log(novoUser2.role);
}

{   // Outra forma de criação de objetos através do init
    const user = {
        init: function (nome, email) {
            this.nome = nome;
            this.email = email;
        },

        exibirInfos: function () {
            return this.nome;
        }
    }

    /* const novoUser = Object.create(user);
    console.log(novoUser.exibirInfos("Pedro"));
    console.log(user.isPrototypeOf(novoUser)); */

    const novoUser = Object.create(user);
    novoUser.init("Pedro", "pedromateus18@hotmail.com");
    console.log(novoUser.exibirInfos());
}