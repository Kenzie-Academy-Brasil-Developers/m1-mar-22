const arrayNomes = ["Hudson", "Rodrigo", "Tiago", "André", "Igor"]


//LISTANDO OS NOMES NO ARRAY
for(let i = 0; i<arrayNomes.length; i++){

        
    listarNome(arrayNomes[i])

}

//FORMATANDO MOSTRANDO NO CONSOLE
function listarNome(nome){

    //console.log(`Facilitador: ${nome}`)

}


//MÉTODO => FOREACH
arrayNomes.forEach(function(nome, i){

    // console.log(i)
    // console.log(`Facilitador: ${nome}`)

})

//*************************** */
//*************************** */

//retornar um novo array com os nomes "Facilitador - Nome"
const arrayNomes2 = ["Hudson", "Rodrigo", "Tiago", "André", "Igor", "Anderson"]


function tratarNomes(arrayNomes){

    let novoArrayNomes = []

    for(let i = 0; i< arrayNomes.length; i++){


        let facilitador = `Facilitador - ${arrayNomes[i]}`

        novoArrayNomes.push(facilitador)
    
    }

    console.log(novoArrayNomes)
}

//tratarNomes(arrayNomes2)

//array                                        //valor da função callback
// const novoArrayNomesTratados = arrayNomes2.map(function(nome){
    
//    return `Facilitador - ${nome}`

// })

// console.log(novoArrayNomesTratados)



//*************************** */
//MAP
//*************************** */

const arrayNumeros = [1,2,3,4,5,6,7]

const novoArrayMultiplicado  = arrayNumeros.map(function(numero){

    if(numero > 2){
        return numero
    }
     

})

//console.log(novoArrayMultiplicado)


//*************************** */
//FILTER
//*************************** */
const arrayNumeros2 = [1,2,3,4,5,6,7,4,-1,2,-4,10,11,90,-1,-7]

const numerosNevatios = arrayNumeros2.filter(function(numero){

   
        return numero < 0
   

})

//console.log(arrayNumeros2)
console.log(numerosNevatios)


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter( function(word){

    return word.length > 6


});

//console.log(result);




// words.forEach(function(palavra, i){

//     console.log(i*2)



// })

// const resultado  = [1,2,3,4,5,6,7].reduce(function(contator, numero){
     
//     return contator + numero

// }, 0)


