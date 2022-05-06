let body = document.querySelector("body")




//console.log(body)



for(let i = 0; i < 10; i++){
    
    let p = document.createElement("p")

    p.innerText = ` Hudson: ${i}`
    
    body.appendChild(p)

}

