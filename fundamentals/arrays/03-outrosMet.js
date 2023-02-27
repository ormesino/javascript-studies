const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];

// algumas funções importantes de arrays

{ // concat: Junta dois arrays em um novo
	const notas2 = [26, 27, 28, 29, 30];
	const notas3 = notas.concat(notas2);
	console.log(notas3);
}

{ // find: Retorna o primeiro valor que satisfizer a condição dada
	console.log(notas.find(function (value) { return value > 15 }));
}

{ // findIndex: Retorna o índice do primeiro elemento onde a condição é verdadeira
	console.log(notas.findIndex((value) => { return value == 5 }));
}

{ // indexOf: Retorna o índice referente ao primeiro elemento que satisfaz a condição dada
	console.log(notas.indexOf(15))
}

{ // lastIndexOf: Mesma coisa que o indexOf, porém retorna de trás pra frente
	console.log(notas.lastIndexOf(15));
}

{ // unshift: Funciona igual ao push() mas coloca o novo elemento em primeiro 
	notas.unshift(3)
	console.log(notas);
}

{ // reverse: Inverte a ordem do array
	console.log(notas.reverse());
}

{ // slide: Copia uma parte do array escolhido para um novo a partir dos índices escolhidos
	const notas1 = notas.slice(2, 5);	// inclusivo no primeiro índice e exclusivo no segundo
	console.log(notas1);
}