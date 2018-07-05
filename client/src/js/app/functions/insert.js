let btn = $(".button");
let message = $(".message");
let value = $(".inputMoney");
let description = $(".inputDesc");
let select = $(".select");

btn.click(function(event){

	event.preventDefault();

	message.text("Gasto inserido com sucesso!");
	message.addClass("blue");
	message.fadeIn();
	

	value.val("");
	description.val("");
	select.val(1);

});

value.click(function(){

	message.fadeOut();

});