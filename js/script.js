
const listaClientes = document.querySelector(".listaClientes")

//LISTANDO FUNCIONARIOS DA BASE 
function listarFuncionarios(listaFuncionario){

    //LIMPANDO A LISTA, PARA LISTAR NOVAMENTE OS FUNCIONÁRIOS
    listaClientes.innerHTML = ""

    //PERCORRENDO ARRAY DE FUNCIONARIOS
    for(let i = 0; i<listaFuncionario.length; i++){
        
        //ACESSANDO CADA FUNCIONARIO 
        const funcionario = listaFuncionario[i]

        //CRIANDO CARD (RETURN => LI)
        const cardFuncionario = criarCardFuncionario(funcionario)
        listaClientes.appendChild(cardFuncionario)

    }
}
listarFuncionarios(data_base)


//1 FUNÇÃO PARA CRIAR CARD FUNCIONARIO
function criarCardFuncionario(funcionario){

    //1)RECUPERANDO INFORMAÇÕES DO FUNCIONARIO
    const nome      = funcionario.nome
    const cargo     = funcionario.cargo
    const empresa   = funcionario.empresa
    const image     = funcionario.image
    const modulo    = funcionario.modulo
    const ativo     = funcionario.ativo

    //2) CRIANDO ELEMENTOS => CARD FUNCIONÁRIO 
    const  tagLi        = document.createElement("li")
    const  tagFigure    = document.createElement("figure")
    const  tagImg       = document.createElement("img")
    const  tagDiv       = document.createElement("div")
    const  tagNome      = document.createElement("p")
    const  tagCargo     = document.createElement("p")
    const  tagEmpresa   = document.createElement("p")

    //3) ADICIONAR INFORMAÇÕES NAS TAGS CRIADAS
    tagImg.src           = image
    tagImg.alt           = nome
    tagNome.innerHTML    = `<strong>Nome:</strong> ${nome}`
    tagCargo.innerHTML   = `<strong>Cargo:</strong> ${cargo}`
    tagEmpresa.innerHTML = `<strong>Empresa:</strong> ${empresa}`

    //4) MONTAR O TEMPLATE CARD 
    tagFigure.appendChild(tagImg)
    tagLi.appendChild(tagFigure)

    tagDiv.classList.add("informacoes")
    tagDiv.appendChild(tagNome)
    tagDiv.appendChild(tagCargo)
    tagDiv.appendChild(tagEmpresa)
    
    tagLi.appendChild(tagDiv)

   
    //5) RETORNAR ESSE CARD
    return tagLi
}


//SELECIONANDO FORMULÁRIO (FORM )
const formulario = document.querySelector(".formulario")

//INTERCEPTANDO EVENTO (SUBMIT)
formulario.addEventListener("submit", cadastrarFuncionario)

//FUNÇÃO QUE VAER CHAMADA NO EVENTO
function cadastrarFuncionario(event){

    //CONGELANDO EVENTO PADRÃO TAG FORM (SUBMIT)
    event.preventDefault()
    
    //INDENTIFICANDO TAG FORM 
    const inputs      = event.target

    //RECUPERANDO CADA INPUT DE ENTRADA + O VALOR DO CAMPO
    const nome      = inputs[0].value
    const cargo     = inputs[1].value
    const empresa   = inputs[2].value
    const image     = inputs[3].value
    
    //CRIANDO UM NOVO OBJETO (FUNCIONARIO) ADICIONANDO INFORMAÇÕES RECEBIDA DOS CAMPOS
    const novoFuncionario   = {}
    novoFuncionario.modulo   = "M1"
    novoFuncionario.status   = true
    novoFuncionario.nome    = nome
    novoFuncionario.cargo   = cargo
    novoFuncionario.empresa = empresa
    novoFuncionario.image   = image
  

    //ATUALIZANDO ARRAY DE FUNCONARIOS - ADICIONANDO O NOVO FUNCIONARIO
    data_base.unshift(novoFuncionario)

    //LISTANDO NOVAMENTE OS FUNCIONÁRIOS
    listarFuncionarios(data_base)
}