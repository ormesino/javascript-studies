{	// Binding a heritage through the prototype
	const user = {
		name: "Pedro",
		email: "pedro@gmail.com",
		birth: "1997/03/25",
		role: "estudante",
		active: true,

		showInfo: function () {
			console.log(this.name, this.email, this.birth);
		}
	}

	const admin = {
		name: "Mariana",
		email: "mariana@gmail.com",
		birth: "1992/01/01",
		createCourse() {
			console.log("Course created!")
		}
	}

	Object.setPrototypeOf(admin, user);
	admin.createCourse();
	admin.showInfo();
	console.log(user.isPrototypeOf(admin));
}