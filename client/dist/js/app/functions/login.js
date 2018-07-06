let btn = $(".button");

btn.click(function(event){

	event.preventDefault();

	let login = $(".inputEmail").val().toLowerCase();
	let password = $(".inputPass").val();

	if (login === "admin" && password === "admin"){
		window.location.href = "../pages/profile/resumo.html";
	}

	console.log(login);

});