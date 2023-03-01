// Importando para vincular o admin ao user, como também para reutilizar o seu construtor

import User from './User.js';

export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin'){
        super(nome, email, nascimento, role);
        this.ativo = true;
    }

    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas.`
    }
}

const novoAdmin = new Admin('Mateus', 'mateus@yahoo.com.br', '1997-02-19');

console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.criarCurso("NodeJS", "30"));