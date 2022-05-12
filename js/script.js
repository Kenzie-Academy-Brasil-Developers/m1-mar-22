//1 - INTERCEPTAR EVENTO 
    //BOTÃO ADICIONAR **
    //RECUPERAR O VALOR DIGITADO  **
        //VALIDAR SE O CAMPO ESTIVER VAZIO ****

//2 - MODELAR ESSA TAREFA **
    //CRIAR UM OBJETO => MODELAR **
//3 - ARMAZENAR ESSA TAREFA **
    //ARRAY DE TAREFAS **
//--------------------------------------//

//SELECIONAR OS CAMPOS
const btnAdicionar = document.querySelector(".btnAdicionar")
const inputText    = document.querySelector(".inputText")
const listaTag        = document.querySelector(".lista")

//ARRAY PARA ARMAZENAR TAREFAS
const listaTarefas = []

//FUNÇÃO ADICIONAR TAREFA
function adicionarTarefa(){
    
    //RECUPERANDO VALOR DO CAMPO => TRATANDO ESPAÇO VAZIO
    const textValue = inputText.value.trim()
    
    //CRIANDO UM OBJETO PARA MODELAR UMA NOVA TAREFA
    const novaTarefa = {}

    //VALIDANDO SE O VALOR É INVALIDO/VAZIO
    if(textValue !== ""){
       
        novaTarefa.nome     = textValue
        novaTarefa.status   = false

        listaTarefas.unshift(novaTarefa)
        listarTarefas(listaTarefas)
    }
    
}
btnAdicionar.addEventListener("click", adicionarTarefa)


//LISTAR TAREFAS
function listarTarefas(arrayTarefas){
    
    listaTag.innerHTML = ""
    
    arrayTarefas.forEach(function(tarefa, index){
      
        const template  = montarTemplate(tarefa, index)
        listaTag.appendChild(template)

    })
   
}
listarTarefas(listaTarefas)


function montarTemplate(tarefa, index){
    const li  = document.createElement("li")
    li.innerHTML = `
        <h2>${tarefa.nome}</h2>
        <button id="${index}">X</button>
    `
    return li
}

//REMOVER TAREFA
function removerTarefa(event){
    const button  = event.target
    
    if(button.tagName == "BUTTON"){

        const index = button.id

        listaTarefas.splice(index,1)
        listarTarefas(listaTarefas)

    }
}
listaTag.addEventListener("click", removerTarefa)
