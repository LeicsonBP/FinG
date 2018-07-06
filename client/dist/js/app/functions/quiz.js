let questionNumber = 1;
let $questionNumberText = $(".questionNumber").text(questionNumber);
let $questionText = $(".question").text("O que você pretende fazer com os seus ganhos?");
let $answerAText = $("#answerA").text("Guardar parte do dinheiro recebido antes de começar a gastar, para elaborar um orçamento financeiro em que estabeleço as prioridades dos meus sonhos");
let $answerBText = $("#answerB").text("Guardar parte do dinheiro recebido antes de começar a gastar, para elaborar apenas um orçamento financeiro");
let $answerCText = $("#answerC").text("Elaborar um orçamento financeiro, e se sobrar dinheiro guardo para o mês seguinte");
let $answerDText = $("#answerD").text("Gastar conforme minhas necessidades");
let points = 0;
let $answers = $(".answer");
let $resultText = $(".result").fadeOut();
let $divQuiz = $(".quizSec");

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
	}else if(questionNumber===3){
		$questionText.text("Quanto você gasta com sua diversão durante o mês?");
		$answerAText.text("Reservo 5% do que ganho, 20% gasto com diversão e o restante invisto em meus estudos");
		$answerBText.text("Gasto 30% do que ganho com diversão e o restante invisto em meus estudos");
		$answerCText.text("Gasto 30% do que ganho com diversão e o restante com outros itens de necessidade");
		$answerDText.text("O dinheiro que recebo é pouco, gasto todo com diversão e ainda fico no vermelho");
		$questionNumberText.text(questionNumber);
	}else if(questionNumber===4){
		$questionText.text("Como você controla os seus ganhos e gastos?");
		$answerAText.text("Registro periodicamente por tipo de despesa e ganho, inclusive os itens de menor valor, como chocolate, sorvete, cinema etc, e depois analiso mensalmente");
		$answerBText.text("Registro as despesas e os ganhos, mas não totalizo mensalmente");
		$answerCText.text("Começo a registrar as despesas e ganhos, mas não consigo anotar durante os 30 dias do mês");
		$answerDText.text("Não controlo meu dinheiro");
		$questionNumberText.text(questionNumber);
	}else if(questionNumber===5){
		$questionText.text("Você já pensou em seus sonhos e objetivos de curto, médio e longo prazos?");
		$answerAText.text("Sim, sempre faço essa reflexão e registro em um lugar que vejo frequentemente (agenda, caderno ou arquivo no computador)");
		$answerBText.text("Sim, sempre faço esta reflexão, mas não registro");
		$answerCText.text("Somente faço planos de curto prazo");
		$answerDText.text("Não tenho claramente meus sonhos de curto, médio e longo prazos");
		$questionNumberText.text(questionNumber);
	}else if(questionNumber===6){
		$questionText.text("Você já fez um diagnóstico financeiro da sua vida?");
		$answerAText.text("Uma vez por ano faço um diagnóstico e registro o que eu ganho e gasto, e ainda reservo parte do meu dinheiro para os meus sonhos");
		$answerBText.text("Faço a análise, mas não registro em nenhum lugar");
		$answerCText.text("Procuro fazer essa análise, mas desisto porque vejo que meu ganho mensal não dá para minhas despesas");
		$answerDText.text("A única coisa que faço é tentar fazer com que meu ganho mensal dê para minhas despesas e quase sempre tenho que recorrer a outros recursos (cheque especial, amigos, parentes, empréstimos etc");
		$questionNumberText.text(questionNumber);
	}else if(questionNumber===7){
		$questionText.text("Ao sair para passear ou fazer compras, como você se comporta?");
		$answerAText.text("Procuro saber onde vou e o que vou fazer, para não comprar por impulso");
		$answerBText.text("Gosto de passear e fazer compras e quando há promoções, geralmente compro");
		$answerCText.text("Ao sair não me procuro em saber se vou ou não comprar, mas se vejo algo interessante compro independente se tenho ou não dinheiro");
		$answerDText.text("Adoro sair e ir as compras, o importante é viver o momento");
		$questionNumberText.text(questionNumber);
	}else if(questionNumber===8){
		$questionText.text("Onde você aplica o seu dinheiro guardado?");
		$answerAText.text("Aplico meu dinheiro conforme o tempo do meu sonho (ex.: até 1 ano caderneta de poupança, até 10 anos titulo do governo, CDB/Fundos e acima de 10 anos previdência e ações)");
		$answerBText.text("Aplico meu dinheiro em caderneta de poupança");
		$answerCText.text("Não aplico porque não sobra dinheiro");
		$answerDText.text("Não consigo nem mesmo pagar meus gastos mensais quem dirá aplicar dinheiro");
		$questionNumberText.text(questionNumber);
	}else if(questionNumber===9){
		$questionText.text("Se hoje você deixar de ter seu ganho mensal (salário, mesada ou outros), por quanto tempo você consegue honrar seus compromissos mensais?");
		$answerAText.text("De 2 a 5 anos");
		$answerBText.text("De 1 a 2 anos");
		$answerCText.text("Até 1 ano");
		$answerDText.text("Nem por 1 mês");
		$questionNumberText.text(questionNumber);
	}else if(questionNumber===10){
		$questionText.text("Antes de você começar a trabalhar, você tinha dívidas? E depois de ter começado?");
		$answerAText.text("Nem antes e nem depois, controlo meu dinheiro para realizar meus sonhos");
		$answerBText.text("Não tinha dívidas antes e nem depois, mesmo tendo a disponibilidade do limite de crédito");
		$answerCText.text("Não tinha, mas agora estou completamente endividado em cheque especial e cartões de credito");
		$answerDText.text("Antes mesmo de trabalhar já estava endividado");
		$questionNumberText.text(questionNumber);
	}else{
		showResults();
	}

});

function showResults(){
	if(points >= 160 && points <=200){
		$resultText.text("Parabéns! Suas respostas mostraram um bom conhecimento sobre educação financeira. Continue se aprimorando cada vez mais, priorizando seus sonhos e reservando um valor mensal para a conquista deles.");
	}else if(points >=110 && points <= 155){
		$resultText.text("Você está no caminho para alcançar a independência financeira, porém necessita estruturar melhor seus controles, estabelecer e priorizar seus sonhos de curto, médio e longo prazos. Invista em sua educação financeira.");
	}else if(points >=70 && points <= 105){
		$resultText.text("Atenção! Seu desequilíbrio financeiro está muito próximo ou você já vivendo esse momentos. Você necessita imediatamente assumir o comando de seu dinheiro, sabendo para onde está indo cada centavo de seu dinheiro. Recomendo fazer um diagnóstico financeiro, estabelecer suas prioridades, reduzir seus gastos e investir em seus sonhos.");
	}else if(points >=50 && points <= 65){
		$resultText.text("Muito cuidado! Sua situação é preocupante e necessita de imediata atitude no que se refere à administração de seu dinheiro. É preciso investir em sua reeducação financeira, mudando hábitos e costumes para gerar um novo comportamento em relação ao dinheiro. Lembre-se que o dinheiro não aceita desaforo e por isso precisa ser respeitado.");
	}

	$divQuiz.fadeOut();
	$resultText.fadeIn();

}