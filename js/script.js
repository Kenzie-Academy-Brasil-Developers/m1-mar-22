let titulo = document.getElementById("titulo")

titulo.style.background = "red"


// let img = document.getElementsByTagName("img")

//let img = document.querySelector("img")
//let lis = document.querySelectorAll("li")



// tituloPrincipal.id
// tituloPrincipal.className
// tituloPrincipal.innerText = "Hudson"
// tituloPrincipal.innerHTML = "<em>Funcionarios</em>"

//tituloPrincipal.classList.add("tituloClass")
//console.log(tituloPrincipal)


//LI
let listaFuncionarios = document.querySelector(".listaFuncionarios")

function listarFuncionario(){
    let li = document.createElement("li")
    let figure = document.createElement("figure")
    let img = document.createElement("img")
    let h2 = document.createElement("h2")


    img.src = "./img.jpg"
    h2.innerText = "Hudson"

    figure.appendChild(img)
    li.appendChild(figure)
    li.appendChild(h2)


    listaFuncionarios.appendChild(li)
}
listarFuncionario()



