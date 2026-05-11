// Seleciona o formulário
const formulario = document.getElementById("formulario");

// Evento de envio
formulario.addEventListener("submit", function(event){

    // Impede o recarregamento da página
    event.preventDefault();

    // Captura os valores
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    // Campo de resposta
    const resposta = document.getElementById("resposta");

    // Verifica se os campos estão vazios
    if(nome === "" || email === "" || mensagem === ""){

        resposta.textContent = "Preencha todos os campos.";

        resposta.style.color = "red";

    }else{

        resposta.textContent = "Mensagem enviada com sucesso!";

        resposta.style.color = "lightgreen";

    }

});