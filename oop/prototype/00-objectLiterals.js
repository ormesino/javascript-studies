{	// Giving a context to a function that does not have it through .bind() 
	const user = {
		name: "Alex",
		email: "alexandre@gmail.com",
		birth: "1990/02/19",
		active: true,

		showInfos: function() {
			console.log(this.name, this.email, this.birth);
		}
	}

	const show = function () {
		console.log(this.name, this.email, this.birth);
	}

	const showName = show.bind(user);

	user.showInfos();
	showName();
	show();
}