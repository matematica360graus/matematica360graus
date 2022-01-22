


window.onload = function(){
	function mostrar_nome(){
	const div = document.createElement("div");
	const input_nome = document.querySelector("#nome");
	const texto = document.createTextNode("Olá " + input_nome.value + ". Bem-vindo ao portal Matemática 360 graus.");

	div.appendChild(texto);
	document.body.appendChild(div);
	}


	const botao_ok = document.querySelector("#botao");
	botao_ok.onclick = mostrar_nome;

	
}
