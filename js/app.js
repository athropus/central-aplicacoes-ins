document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Injetar o script dos dados (importado do cfsd.js) no container principal
    const container = document.getElementById('script-container');
    if (container && typeof dadosScriptCFSd !== 'undefined') {
        container.innerHTML = dadosScriptCFSd;
    }

    // 2. Função para atualizar Data e Hora
    function atualizarDataHora() {
        const agora = new Date();
        const data = agora.toLocaleDateString('pt-BR');
        const hora = agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        const inputData = document.getElementById('dataHora');
        
        if (inputData) {
            inputData.value = `${data} ${hora}`;
        }
    }
    atualizarDataHora();

    // 3. Sistema de Copiar ao Clicar (Event Delegation)
    // Usamos event delegation no container para que funcione em scripts injetados dinamicamente
    container.addEventListener('click', function(e) {
        // Verifica se o elemento clicado tem a classe 'frase'
        if (e.target && e.target.classList.contains('frase')) {
            const texto = e.target.innerText;
            
            navigator.clipboard.writeText(texto).then(() => {
                // Adiciona a classe que deixa o botão verde permanentemente
                e.target.classList.add('copied');
            }).catch(err => {
                console.error('Erro ao copiar o texto: ', err);
            });
        }
    });

});