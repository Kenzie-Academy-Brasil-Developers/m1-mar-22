const listaClientes = document.querySelector(".listaClientes")

//LISTANDO FUNCIONARIOS DA BASE 
function listarFuncionarios(listaFuncionario){
    

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
    tagImg.src           = `./img/${image}`
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













