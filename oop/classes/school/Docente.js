// Importando para vincular o docente ao user, como também para reutilizar o seu construtor

import User from './User.js'

export default class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente') {
        super(nome, email, nascimento, role);
        this.ativo = true;
    }

    aprovaEst(estudante, curso) {
        return `Estudante ${estudante} passou no curso ${curso}.`
    }
}

const novoDoc = new Docente("Júlia", "julia@bol.com.br", "1989-02-17");

console.log(novoDoc);
console.log(novoDoc.exibirInfos());
console.log(novoDoc.aprovaEst("Juliana", "JS"));