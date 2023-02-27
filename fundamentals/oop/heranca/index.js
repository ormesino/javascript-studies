//  Arquivo criado para ser a "main" da pasta, onde endereçaremos todos os outros arquivos .js

import User from './User.js';
import Docente from './Docente.js';
import Admin from './Admin.js';

try{
    const novoUser = new User('Pedro', 'pedro@gmail.com', '1997-02-18');
    console.log(novoUser.exibirInfos());

    const novoAdmin = new Admin("Mateus", 'mateus@gmail.com', '1998-02-18');
    console.log(novoAdmin.exibirInfos());
    console.log(novoAdmin.nome);    // Como o atributo 'nome' está como privado na super classe, a sub classe obedece a mesma regra, como temos um método get na super classe, isso se torna possível

    //  Por existir um método set, podemos fazer a modificação de um atributo privado
    novoAdmin.nome = "";
    console.log(novoAdmin.nome);
} catch (err) {
    console.log(err.message);
}
