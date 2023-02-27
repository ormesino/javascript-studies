{ // usando o concat() pra juntar dois arrays
	const salaPython = ['Melissa', 'Helena', 'Rodrigo'];
	const salaJS = ['Raquel', 'Pedro', 'Vitória'];

	const salasUnificadas = salaPython.concat(salaJS); // poderia também ser feito com salaJS.concat(salaPython)
	console.log(`As salas juntas ficam coma as seguintes pessoas: ${salasUnificadas}`);
}