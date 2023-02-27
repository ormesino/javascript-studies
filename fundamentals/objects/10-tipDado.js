{ // em casos de múltiplos dados para uma chave, utiliza-se um array para armazená-los
	const cliente = {
		nome: "André",
		idade: 25,
		cpf: "111213141",
		email: "andre@gmail.com",
		fone: ["2144241145", "2142155154", "219421451593"]
	}
	
	// percorrendo o array de fone, imprimindo cada valor
	cliente.fone.forEach(fone => console.log(fone));
}