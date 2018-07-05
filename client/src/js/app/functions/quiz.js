let questionNumber = 1;
let $questionNumberText = $(".questionNumber").text(questionNumber);
let $questionText = $(".question").text("O que você pretende fazer com os seus ganhos?");
let $answerAText = $("#answerA").text("Guardar parte do dinheiro recebido antes de começar a gastar, para elaborar um orçamento financeiro em que estabeleço as prioridades dos meus sonhos");
let $answerBText = $("#answerB").text("Guardar parte do dinheiro recebido antes de começar a gastar, para elaborar apenas um orçamento financeiro");
let $answerCText = $("#answerC").text("Elaborar um orçamento financeiro, e se sobrar dinheiro guardo para o mês seguinte");
let $answerDText = $("#answerD").text("Gastar conforme minhas necessidades");
let points = 0;
let $answers = $(".answer");

$answers.click(function(event){

	const attrAnswer = $(this).attr("id");

	if(attrAnswer==="answerA"){
		points=points + 20;
	}else if(attrAnswer==="answerB"){
		points=points + 15;
	}else if(attrAnswer==="answerC"){
		points=points + 10;
	}else{
		points=points + 5;
	}

	questionNumber++;

	if(questionNumber===2){
		$questionText.text("Quanto de dinheiro você guarda para a sua aposentadoria?");
		$answerAText.text("Guardo 10% para aposentadoria e 10% para os meus outros sonhos");
		$answerBText.text("Guardo 10% para meus sonhos, mas ainda não tenho definido um percentual para minha aposentadoria");
		$answerCText.text("Às vezes guardo dinheiro para aposentadoria, mas não tenho uma rotina definida");
		$answerDText.text("Não penso em minha aposentadoria, pois sou muito jovem ainda");
		$questionNumberText.text(questionNumber);
	}

});