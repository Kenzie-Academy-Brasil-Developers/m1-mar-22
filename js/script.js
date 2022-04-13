let nomePessoa  = "Hudson"

let numero2     = 10  

const VALOR_FRETE =  50 

let numero1     = 20


//TIPO DE DADOS 
//STRING
let primeiroNome  = "Hudson"

//INT
let segundoNome =  "12"

//FLOAT
let numeroFloat = 12.05

//BOOLEAN
let verdadeiro = true
let falso      = false





// let usuario  = "Hudson"
// let senha    = "123457"

 
// if(usuario == "Hudson" && senha == "12345"){

//     console.log("Login com sucesso")


// }else{
//     console.log("Usuario ou senha invalida")
// }


// let nomeAdmin    = "Gabriel"


// if(nomeAdmin == "Anderson" || nomeAdmin == "Hudson"){

//     console.log("Login com sucesso")

// }else{

//     console.log("Usuario ou senha invalida")
// }

// let usuarioVip = false
// let usuario    = "Gabriel"
//  let senha      = "12345"

// if(usuario == "Gabriel" && senha == "12345"){
//     console.log("Login com sucesso")

//     if(usuarioVip){
        
//         console.log("Usuario vip")
        
//     }else{

//         console.log("Não é usuario vip")
//     }


// }else{

//     console.log("Usuario ou senha invalida")
// }



// let numero = 10

// if(typeof numero == "number"){

//     console.log("Tipo numero")

// }


// let idade = 18

// if(idade >= 18){
//     console.log("Atingiu maior idade")
// }else{
//     console.log("Não atingiu maior idade")
// }


// let totalPedido = 250


// if(totalPedido > 200){
   
//     let descontoFrete = 25
//     console.log("Aplicou desconto 25")

// }

// if(totalPedido > 250){

//     let descontoFrete = 50
//     console.log("Aplicou desconto 50")

// }




// function soma(num1, num2){

//     return num1 + num2
// }


// function calculadora(operacao, numero1, numero2){
    
//     //VERIFICAR O TIPO DE OPERAÇÃO 
//     if(operacao == "+"){

//         //soma(10,10)
//         return soma(numero1, numero2)
//     }

// }

// let resultado  = calculadora("+", 10, 10)
// console.log(resultado)


// function nomeCompleto(nome, sobrenome){

//     return `Meu nome é ${nome} ${sobrenome}`
    
// }

// let nome = nomeCompleto("Hudson", "Carolino")
// console.log(nome)

// function parOuImpar(numero){
//     let resultado  = ""
//     if(numero % 2 == 0){
//         return resultado =   "Par"
//     }

//     return  resultado =   "Impar" 
// }

// let resultado  = parOuImpar(10)
// console.log(resultado)


 
const idade = 10

//const array = ["Hudson", "Daniel", "Jardel", "Bruno"]

//MOSTRANDO 
//console.log(array)

//TAMANHO DO MEU ARRAY
//console.log(array.length)

//ACESSANDO INFORMAÇÃO
//array[2] = "Gabriel"

//ATRIBUIR MAIS DADOS PARA O ARRAY
//array.push("Andre")

//LISTAR NOMES





// function teste(){
//     let i = 4 
    
//     while(i <= 10){
        
        
//             return i
        
        
        
    
        
//         i++
//     } 
// }


//
// for(let i = 0; i <= 10; i++){
    
//     console.log(i)

// }


const array = ["Hudson", "Daniel", "Jardel", "Anderson", "Andre", "Gabriel"]

function listarNomesArray(listaNomes){
 
   for(let i = 0; i < listaNomes.length; i++ ){

        if(listaNomes[i] == "Anderson"){

          console.log(`Encontrei o ${listaNomes[i]}`)  
            
        }

   }
   console.log(listaNomes)
}
//listarNomesArray(array)





const notasAluno1 = [40,60,80,60,30,80]
console.log(notasAluno1)
//PERCORRER NOTA A NOTA 
// SOMAR AS NOTAS 
// DIVIDIR O RESULTADO DA SOMA, PELA QUANTIDADE 
// VERIFICAR SE O ALUNO FOI APROVADO

function calculaMedia(notas){

    let soma  = 0 
    let media = 0

    for(let i  = 0; i < notas.length; i++){
        soma += notas[i]
    }

    media = soma / notas.length
    
    if(media >= 80){
        return "Aprovado"
    }
    
    return "Não aprovado"
    
}
calculaMedia(notasAluno1)
