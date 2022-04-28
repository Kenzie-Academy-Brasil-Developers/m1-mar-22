//DECLARADA   **
//CHAMADA (1,2)
//AÇÃO 
//PARAMETRO  
//RETURN 

// FUNÇÕES SÃO EXECUTADAS, A PARTIR DE UMA CHAMADA

//OPERAÇÕES
//SOMA
function soma(num1, num2){

   return num1 + num2

}

function subtracao(num1, num2){

    return num1 - num2
 
 }

//MULTIPLICAÇAO 
function multiplicacao(num1, num2){

    return num1 * num2

}



//CALCULADORA
calculadora("subtracao", 2, 4)

function calculadora(operacao, numero1, numero2){

    if(operacao == "soma"){

        let result = soma(numero1, numero2)
        
        return result

    }else if(operacao == "subtracao"){

        return  subtracao(numero1, numero2)

    }else if(operacao == "multiplicação" || operacao == "multiplicacao" || operacao == "*"){

        return multiplicacao(numero1, numero2)

    }
    return "Nenhuma operação encontrada"

}





//EXECUÇÃO - RECEBENDO VALOR DO USUÁRIO

    
    let valor1   = prompt("Escreva o primeiro número")
    let valor2   = prompt("Escreva o segundo número")
    let operacao = prompt("Escreva qual operação")

    let resultado = calculadora(operacao, valor1, valor2)
    resultado





    














//1 RECEBO 3 VALORES DO USUÁRIO
//2 CALCULADORA(SOMA, 2, 3)
//3 SOMA( 2 + 3 )
//4  CALCULADORA <= SOMA
//5  USUÁRIO <= CALCULADORA



