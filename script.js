// Aguarda o navegador carregar todo o HTML antes de executar o script
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleciona o botão pelo ID "btnMensagem" que criamos no HTML
    const botao = document.getElementById("btnMensagem");

    // Adiciona o evento de clique ao botão
    botao.addEventListener("click", function() {
        
        // Mensagem exigida pelo roteiro
        const mensagem = "O futuro do agro depende da tecnologia, da responsabilidade e do cuidado com o meio ambiente.";
        
        // Exibe a mensagem em uma janela de alerta na tela
        alert(mensagem);
        
    });
});