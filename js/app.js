document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Injetar o script dos dados (importado do cfsd.js) no container principal
    const container = document.getElementById('script-container');
    if (container && typeof dadosScriptCFSd !== 'undefined') {
        container.innerHTML = dadosScriptCFSd;
    } else {
        console.error("Erro: container não encontrado ou dadosScriptCFSd não definido.");
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

    // 3. Sistema de Copiar ao Clicar (Com verificação de segurança do container)
    if (container) {
        container.addEventListener('click', function(e) {
            // Pega o elemento clicado ou o elemento pai mais próximo que contenha a classe 'frase'
            const elementoFrase = e.target.closest('.frase');
            
            if (elementoFrase) {
                const texto = elementoFrase.innerText;
                
                navigator.clipboard.writeText(texto).then(() => {
                    // Adiciona a classe que deixa o item com destaque de copiado
                    elementoFrase.classList.add('copied');
                }).catch(err => {
                    console.error('Erro ao copiar o texto: ', err);
                });
            }
        });
    }

});