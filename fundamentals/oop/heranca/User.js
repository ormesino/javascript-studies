// Reaproveitamento de código a partir da herança, para isso utilizamos export

export default class User {
    #nome   // o uso de # indica que o atributo agora é privado
    constructor(nome, email, nascimento, role) {
        this.#nome = nome,
        this.email = email,
        this.nascimento = nascimento,
        this.role = role || "estudante",
        this.ativo = true
    }
    
    #montaObjeto(){
        return({
            nome: this.#nome,
            email: this.email,
            nascimento: this.nascimento,
            role: this.role || "estudante",
            ativo: this.ativo,
        })
    }

    exibirInfos(){
        const objUser = this.#montaObjeto();
        return `${objUser.nome}, ${objUser.email}, ${objUser.nascimento}, ${objUser.role}, ${objUser.ativo}`;
    }
    
    //  Nunca recebe um argumento, apenas retorna
    get nome(){
        return this.#nome;
    }

    //  Recebe apenas um parâmetro referente ao o que vai mudar dentro do código
    set nome(nome){
        if(nome === ""){
            throw new Error("Formato inválido! Tente novamente.");
        }
        this.#nome = nome;
    } 
}