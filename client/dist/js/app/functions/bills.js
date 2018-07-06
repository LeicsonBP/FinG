let year = 2000;
let $slcYear = $(".slcYear");

for(let i=2000;i<=2100;i++){
	let object = document.createElement("option");
	$(object).attr("class","option");
	$(object).attr("value",i);
	$(object).text(i);
	$slcYear.append(object);
}
