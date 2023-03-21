//  This class will be the superclass, for that we use 'export' to be able to import it in other files

export default class User {
    #name   //  The use of # indicates that the attribute is now private
    constructor(name, email, birth, role) {
        this.#name = name,
        this.email = email,
        this.birth = birth,
        this.role = role || "student"
    }

    showInfo(){
        const objUser = this.#createObject();
        return `Here's the information requested: ${objUser.name}, ${objUser.email}, ${objUser.birth}, ${objUser.role}, ${objUser.active}`;
    }
    
    //  Never receives an argument, only returns
    get name(){
        return this.#name;
    }

    //  Receives only one parameter referring to what will change inside the code
    set name(name){
        if(name === ""){
            throw new Error("Invalid format! Try again.");
        }
        this.#name = name;
    } 
}