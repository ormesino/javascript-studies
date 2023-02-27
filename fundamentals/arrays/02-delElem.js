// dado um array existente:
const notas = [23, 10, 14, 9.5, 7.5, 12, 7, 9.3, 3.3, 5.6, 3.4];

{ // para retirar os elementos pela mudança de lenght
	notas.length = 8;
	console.log(notas);
}

{ // tira a último elemento do array
	notas.pop();
	console.log(notas);
}

{ // tira o primeiro elemento do array
	notas.shift();
	console.log(notas);
}

{ // tira uma quantidade de elementos a partir de um índice
	notas.splice(2, 2);
	console.log(notas);

	notas.splice(2, 1);
	console.log(notas);
}

{ // a partir da filtragem de um array
	const newNotas = notas.filter(	// não modifica o array atual
		function (value) {
			return value > 7;
	});
	console.log(newNotas);
}