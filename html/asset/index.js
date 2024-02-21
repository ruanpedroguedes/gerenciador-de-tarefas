function geraTarefa() {
    return {
        //atributos
        display: document.querySelector('.display'),
        section: document.querySelector('.minha-section'),
        btnAdicionar: document.querySelector('.btn-adicionar'),
        btnClear :document.querySelector('.btn-limpar'),
        btnRetirar: document.querySelector('.btn-retirar'),

        //metodos
        inicia() {
            this.cliqueBotao();
        },

        cliqueBotao() {
            this.btnAdicionar.addEventListener('click', () => {
                const valor = this.display.value;
                if (valor !== '') { // Verifica se o valor não está vazio
                    this.btnParaDisplay(valor); // Chama a função btnParaDisplay com o valor obtido do campo de texto
                    this.display.value = ''; // Limpa o campo de texto após adicionar a tarefa
                }
            });

            this.btnClear.addEventListener('click', () => {
                this.limparTarefas()
            })

            this.btnRetirar.addEventListener('click', () =>{
                const tarefas = this.section

                if(tarefas != ''){
                    this.retirarTarefa()
                    this.display.value = ''
                }
            })

        },
        
        limparTarefas(){
            while (this.section.firstChild) {
                this.section.removeChild(this.section.firstChild);
            }
        },
        
        retirarTarefa(){
            this.section.removeChild(this.section.lastChild);
        },

        btnParaDisplay(valor) {
            this.section.innerHTML += `<p>. ${valor}</p>`;
        },
    };
}

function trocaCores(){
    return{
        //atributos
        titulo:document.querySelector('h1'),
        // metodos
        inicia(){
            this.mudaTitulo()
        },
        
        mudaTitulo(){
            this.titulo.addEventListener('mouseout', (e) =>{
                this.titulo.style.color = 'black'
            })
            this.titulo.addEventListener('mouseover', (e) => {
                this.titulo.style.color = 'white'
            })
        },

    }
}
const geradorDeTarefa = geraTarefa();
geradorDeTarefa.inicia();
const mudarDeCor = trocaCores();
mudarDeCor.inicia();

