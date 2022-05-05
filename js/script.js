//UNIDIMINSIONAL
let array = [1,2,3,4,5]

//BIDIMENSIONAL 
let array2 = [
    [],[],[],
    [],[],[]
]

//MULTIDIMENSIONAL

let array3 = [
    [[],[]],[[],[]],[[],[]],
    [[],[]],[[],[]],[[],[]]
]

//

const arrayNotas = [
    [60,80,80,40],// ALUNO   0
    [76,75,74,80], // ALUNO  1
    [40,85,80,100], // ALUNO 2
    [60,80,80,40], // ALUNO  3
    [10,10,10,10], // ALUNO  4
    
]






// arrayNotas.push([10,30,40,20])

// console.table(arrayNotas)

const medias = []

for(let i = 0; i < arrayNotas.length; i++){
    console.log(`------- Aluno ${i} ------- ` )
    arrayNotas[i].push(100)
    console.log(arrayNotas[i])

    let somaNotas = 0
    for(let j = 0; j < arrayNotas[i].length; j++){
        
        somaNotas += arrayNotas[i][j]
    }

    medias.push(somaNotas)
    console.log(somaNotas / arrayNotas[i].length)
}



// arrayNotas.forEach(function(arrayNotas){

//     arrayNotas.forEach(function(notas){

    
//     })

// })




const pessoa = {
    nome:"Hudson",
    sobrenome:"Carolino",

    apresentar (){

        console.log(`Meu nome é ${pessoa.nome} ${pessoa.sobrenome}`)

    }

}