//DECLARADA   **
//CHAMADA (1,2)
//AÇÃO 
//PARAMETRO  
//RETURN 

// FUNÇÕES SÃO EXECUTADAS, A PARTIR DE UMA CHAMADA

//OPERAÇÕES
//SOMA
// function soma(num1, num2){

//    return num1 + num2

// }

// function subtracao(num1, num2){

//     return num1 - num2
 
//  }

// //MULTIPLICAÇAO 
// function multiplicacao(num1, num2){

//     return num1 * num2

// }



//CALCULADORA
// calculadora("subtracao", 2, 4)



// function calculadora(operacao, numero1, numero2){

//     if(operacao == "soma"){

//         let result = soma(numero1, numero2)
        
//         return result

//     }else if(operacao == "subtracao"){

//         return  subtracao(numero1, numero2)

//     }else if(operacao == "multiplicação" || operacao == "multiplicacao" || operacao == "*"){

//         return multiplicacao(numero1, numero2)

//     }
//     return "Nenhuma operação encontrada"

// }


//EXECUÇÃO - RECEBENDO VALOR DO USUÁRIO

    
    // let valor1   = prompt("Escreva o primeiro número")
    // let valor2   = prompt("Escreva o segundo número")
    // let operacao = prompt("Escreva qual operação")

    // let resultado = calculadora(operacao, valor1, valor2)
    // resultado


//*********************** */
    //ARRAYS
//*********************** */


//1 - 
//A) Crie uma função que recebe um array como parâmetro;

//B) e (retorna) (quantos) (números negativos) tem nesse mesmo array. 


function contaNumerosNegativos(array){
    
    let cont = 0
   
    for(let i = 0; i < array.length; i++){
        if(array[i] < 0){
            cont++
        }
    }

    return cont
   
}

//console.log(contaNumerosNegativos([1,2,3,4,-1,-4,-10,10,1,2]))


//1 - 
//A) Crie uma (função) que receba um (número) como (parâmetro), **
//B) e (retorne) um (array)  ***

//C) contendo todos os (números) (pares) existentes 

//D) (entre o 0 e o número) passado no parâmetro.


function contaNumerosPares(numero){
   
    let arrayPares = []

    for(let cont = 0; cont <= numero; cont++){
       
        if(cont % 2 === 0){

            arrayPares.push(cont)

        }

    }

   
    return arrayPares

}

let arrayPares = contaNumerosPares(5)



function retornaNumerosParesArray(arrayNumeros){

    let array = []

    for(let i = 0; i < arrayNumeros.length; i++){


        if(arrayNumeros[i] % 2 == 0){

            array.push(arrayNumeros[i])

        }

    }


    return array
}


retornaNumerosParesArray([1,23,4,35,6,4,34,5,6])





// let nome = "Hudson Carolino"

// let contN = 0
// for(let i = 0; i < nome.length; i++){

//     if(nome[i] == "n"){
//         contN++
//     } 

// }

    













